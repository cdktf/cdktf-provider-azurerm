// https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterAssessmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#additional_data SecurityCenterAssessment#additional_data}
  */
  readonly additionalData?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#assessment_policy_id SecurityCenterAssessment#assessment_policy_id}
  */
  readonly assessmentPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#target_resource_id SecurityCenterAssessment#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#status SecurityCenterAssessment#status}
  */
  readonly status: SecurityCenterAssessmentStatus;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#timeouts SecurityCenterAssessment#timeouts}
  */
  readonly timeouts?: SecurityCenterAssessmentTimeouts;
}
export interface SecurityCenterAssessmentStatus {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#cause SecurityCenterAssessment#cause}
  */
  readonly cause?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#code SecurityCenterAssessment#code}
  */
  readonly code: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#description SecurityCenterAssessment#description}
  */
  readonly description?: string;
}

function securityCenterAssessmentStatusToTerraform(struct?: SecurityCenterAssessmentStatusOutputReference | SecurityCenterAssessmentStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cause: cdktf.stringToTerraform(struct!.cause),
    code: cdktf.stringToTerraform(struct!.code),
    description: cdktf.stringToTerraform(struct!.description),
  }
}

export class SecurityCenterAssessmentStatusOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cause - computed: false, optional: true, required: false
  private _cause?: string | undefined; 
  public get cause() {
    return this.getStringAttribute('cause');
  }
  public set cause(value: string | undefined) {
    this._cause = value;
  }
  public resetCause() {
    this._cause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get causeInput() {
    return this._cause
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }
}
export interface SecurityCenterAssessmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#create SecurityCenterAssessment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#delete SecurityCenterAssessment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#read SecurityCenterAssessment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#update SecurityCenterAssessment#update}
  */
  readonly update?: string;
}

function securityCenterAssessmentTimeoutsToTerraform(struct?: SecurityCenterAssessmentTimeoutsOutputReference | SecurityCenterAssessmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class SecurityCenterAssessmentTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html azurerm_security_center_assessment}
*/
export class SecurityCenterAssessment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_security_center_assessment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html azurerm_security_center_assessment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityCenterAssessmentConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityCenterAssessmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_assessment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalData = config.additionalData;
    this._assessmentPolicyId = config.assessmentPolicyId;
    this._targetResourceId = config.targetResourceId;
    this._status = config.status;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_data - computed: false, optional: true, required: false
  private _additionalData?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get additionalData() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_data') as any;
  }
  public set additionalData(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._additionalData = value;
  }
  public resetAdditionalData() {
    this._additionalData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDataInput() {
    return this._additionalData
  }

  // assessment_policy_id - computed: false, optional: false, required: true
  private _assessmentPolicyId?: string; 
  public get assessmentPolicyId() {
    return this.getStringAttribute('assessment_policy_id');
  }
  public set assessmentPolicyId(value: string) {
    this._assessmentPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentPolicyIdInput() {
    return this._assessmentPolicyId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId
  }

  // status - computed: false, optional: false, required: true
  private _status?: SecurityCenterAssessmentStatus; 
  private __statusOutput = new SecurityCenterAssessmentStatusOutputReference(this as any, "status", true);
  public get status() {
    return this.__statusOutput;
  }
  public putStatus(value: SecurityCenterAssessmentStatus) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterAssessmentTimeouts | undefined; 
  private __timeoutsOutput = new SecurityCenterAssessmentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SecurityCenterAssessmentTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_data: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalData),
      assessment_policy_id: cdktf.stringToTerraform(this._assessmentPolicyId),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      status: securityCenterAssessmentStatusToTerraform(this._status),
      timeouts: securityCenterAssessmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
