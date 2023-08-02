export interface Flow {
  dangerSource: string;
  state: string | undefined;
  dangerId: string | undefined;
  level: 'ZD' | 'JD' | 'YB' | undefined;
  _level: string | undefined;
  flow: NodeTypes[] | undefined
}

type NodeTypes = PushNode | DispatchNode | Receive | HandleNode | StatementNode | AuditNode


type PushNode = {
  stage: 'PUSH',
  content: {
    planCode: string;
    orderCode: string;
    address: string;
    dangerType: string;
    _dangerType: string;
    picIds: string[],
    remark: string;
    subjectType: string;
    _subjectType: string;
    handleOrg: string;
  }
} & BaseFlowItem

type DispatchNode = {
  stage: 'DISPATCH',
  content : {
    remark?: string;
    dispatchRemark: string;
    receiverName: string;
    receiverPhone: string;
    receiverOrgName: string;
  }
} & BaseFlowItem


type Receive = {
  stage: 'RECEIVE',
  content: {
    remark?: string;
  }
} & BaseFlowItem




type HandleNode = {
  stage: 'HANDLE',
  content: {
    handleResult: string;
    _handleResult: string;
    sameWithRemark: string;
    _sameWithRemark: string;
    handleRemark: string;
    
  }
} & BaseFlowItem

type StatementNode = {
  stage: 'STATEMENT',
  content: {
    remark: string;
  }
}  & BaseFlowItem

type AuditNode = {
  stage: 'AUDIT',
  content: {
    remark: string;
    picIds?: string[]
  }
} & BaseFlowItem

interface LeaderComment {
  uid: string;
  commentTime: string;
  leaderName: string;
  leaderOrgName: string;
  leaderComment: string;

  children ?: LeaderComment[];
}

export type Stage = 'PUSH' | 'DISPATCH' | 'RECEIVE' | 'HANDLE' | 'STATEMENT' | 'AUDIT' | 'COMMENT';

interface BaseFlowItem {
  title: string;
  stage: Stage ;
  stageId: string;
  stageTime: string;
  operator: string;
  operatorOrgId: string;
  operatorOrgName: string;
  picIds?: {id:string,name: string}[]
  commentList?: LeaderComment[];
}


export interface LeaderCommentCreate {
  dangerId: string;
  stage: Stage,
  stageId: string;
  comment: string | undefined;
}