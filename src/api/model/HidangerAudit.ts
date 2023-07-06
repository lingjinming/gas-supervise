/**
 * 隐患审核请求
 */
export  interface  AuditCreateReq{
  riskIds: string[];
  auditResult: 'PASS' | 'NOT_PASS';
  auditRemark: string | undefined;
}