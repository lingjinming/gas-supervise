export interface Flow {
  dangerId: string | undefined;
  level: 'ZD' | 'JD' | 'YB' | undefined;
  _level: string | undefined;
  flow: NodeTypes[] | undefined
}

type NodeTypes = PushNode | HandleNode | AuditNode


type PushNode = {
  stage: 'PUSH',
  content: {
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


type AuditNode = {
  stage: 'AUDIT',
  content: {
    remark: string;
    picIds?: string[]
  }
} & BaseFlowItem

type HandleNode = {
  stage: 'HANDLE',
  content: {
    handleTime: string;
    remark: string;
    picIds: string[]
    
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

export type Stage = 'PUSH' | 'HANDLE' | 'AUDIT' | 'COMMENT'

interface BaseFlowItem {
  title: string;
  stage: Stage ;
  stageId: string;
  stageTime: string;
  operator: string;
  operatorOrgId: string;
  commentList?: LeaderComment[];
}


export interface LeaderCommentCreate {
  dangerId: string;
  stage: Stage,
  stageId: string;
  comment: string | undefined;
}