// https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogzMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#company_name LogzMonitor#company_name}
  */
  readonly companyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#enabled LogzMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#enterprise_app_id LogzMonitor#enterprise_app_id}
  */
  readonly enterpriseAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#location LogzMonitor#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#name LogzMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#resource_group_name LogzMonitor#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#tags LogzMonitor#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#plan LogzMonitor#plan}
  */
  readonly plan: LogzMonitorPlan;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#timeouts LogzMonitor#timeouts}
  */
  readonly timeouts?: LogzMonitorTimeouts;
  /**
  * user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#user LogzMonitor#user}
  */
  readonly user: LogzMonitorUser;
}
export interface LogzMonitorPlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#billing_cycle LogzMonitor#billing_cycle}
  */
  readonly billingCycle: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#effective_date LogzMonitor#effective_date}
  */
  readonly effectiveDate: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#plan_id LogzMonitor#plan_id}
  */
  readonly planId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#usage_type LogzMonitor#usage_type}
  */
  readonly usageType: string;
}

function logzMonitorPlanToTerraform(struct?: LogzMonitorPlanOutputReference | LogzMonitorPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_cycle: cdktf.stringToTerraform(struct!.billingCycle),
    effective_date: cdktf.stringToTerraform(struct!.effectiveDate),
    plan_id: cdktf.stringToTerraform(struct!.planId),
    usage_type: cdktf.stringToTerraform(struct!.usageType),
  }
}

export class LogzMonitorPlanOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // billing_cycle - computed: false, optional: false, required: true
  private _billingCycle?: string; 
  public get billingCycle() {
    return this.getStringAttribute('billing_cycle');
  }
  public set billingCycle(value: string) {
    this._billingCycle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCycleInput() {
    return this._billingCycle
  }

  // effective_date - computed: false, optional: false, required: true
  private _effectiveDate?: string; 
  public get effectiveDate() {
    return this.getStringAttribute('effective_date');
  }
  public set effectiveDate(value: string) {
    this._effectiveDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveDateInput() {
    return this._effectiveDate
  }

  // plan_id - computed: false, optional: false, required: true
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId
  }

  // usage_type - computed: false, optional: false, required: true
  private _usageType?: string; 
  public get usageType() {
    return this.getStringAttribute('usage_type');
  }
  public set usageType(value: string) {
    this._usageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTypeInput() {
    return this._usageType
  }
}
export interface LogzMonitorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#create LogzMonitor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#delete LogzMonitor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#read LogzMonitor#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#update LogzMonitor#update}
  */
  readonly update?: string;
}

function logzMonitorTimeoutsToTerraform(struct?: LogzMonitorTimeoutsOutputReference | LogzMonitorTimeouts): any {
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

export class LogzMonitorTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface LogzMonitorUser {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#email LogzMonitor#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#first_name LogzMonitor#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#last_name LogzMonitor#last_name}
  */
  readonly lastName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html#phone_number LogzMonitor#phone_number}
  */
  readonly phoneNumber: string;
}

function logzMonitorUserToTerraform(struct?: LogzMonitorUserOutputReference | LogzMonitorUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}

export class LogzMonitorUserOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html azurerm_logz_monitor}
*/
export class LogzMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logz_monitor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logz_monitor.html azurerm_logz_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogzMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: LogzMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logz_monitor',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._companyName = config.companyName;
    this._enabled = config.enabled;
    this._enterpriseAppId = config.enterpriseAppId;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._plan = config.plan;
    this._timeouts = config.timeouts;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_name - computed: false, optional: true, required: false
  private _companyName?: string | undefined; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string | undefined) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // enterprise_app_id - computed: false, optional: true, required: false
  private _enterpriseAppId?: string | undefined; 
  public get enterpriseAppId() {
    return this.getStringAttribute('enterprise_app_id');
  }
  public set enterpriseAppId(value: string | undefined) {
    this._enterpriseAppId = value;
  }
  public resetEnterpriseAppId() {
    this._enterpriseAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseAppIdInput() {
    return this._enterpriseAppId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // logz_organization_id - computed: true, optional: false, required: false
  public get logzOrganizationId() {
    return this.getStringAttribute('logz_organization_id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // single_sign_on_url - computed: true, optional: false, required: false
  public get singleSignOnUrl() {
    return this.getStringAttribute('single_sign_on_url');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: LogzMonitorPlan; 
  private __planOutput = new LogzMonitorPlanOutputReference(this as any, "plan", true);
  public get plan() {
    return this.__planOutput;
  }
  public putPlan(value: LogzMonitorPlan) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogzMonitorTimeouts | undefined; 
  private __timeoutsOutput = new LogzMonitorTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LogzMonitorTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // user - computed: false, optional: false, required: true
  private _user?: LogzMonitorUser; 
  private __userOutput = new LogzMonitorUserOutputReference(this as any, "user", true);
  public get user() {
    return this.__userOutput;
  }
  public putUser(value: LogzMonitorUser) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company_name: cdktf.stringToTerraform(this._companyName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enterprise_app_id: cdktf.stringToTerraform(this._enterpriseAppId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      plan: logzMonitorPlanToTerraform(this._plan),
      timeouts: logzMonitorTimeoutsToTerraform(this._timeouts),
      user: logzMonitorUserToTerraform(this._user),
    };
  }
}
