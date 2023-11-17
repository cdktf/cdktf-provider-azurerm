/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogzMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#company_name LogzMonitor#company_name}
  */
  readonly companyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#enabled LogzMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#enterprise_app_id LogzMonitor#enterprise_app_id}
  */
  readonly enterpriseAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#id LogzMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#location LogzMonitor#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#name LogzMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#resource_group_name LogzMonitor#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#tags LogzMonitor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#plan LogzMonitor#plan}
  */
  readonly plan: LogzMonitorPlan;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#timeouts LogzMonitor#timeouts}
  */
  readonly timeouts?: LogzMonitorTimeouts;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#user LogzMonitor#user}
  */
  readonly user: LogzMonitorUser;
}
export interface LogzMonitorPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#billing_cycle LogzMonitor#billing_cycle}
  */
  readonly billingCycle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#effective_date LogzMonitor#effective_date}
  */
  readonly effectiveDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#plan_id LogzMonitor#plan_id}
  */
  readonly planId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#usage_type LogzMonitor#usage_type}
  */
  readonly usageType: string;
}

export function logzMonitorPlanToTerraform(struct?: LogzMonitorPlanOutputReference | LogzMonitorPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogzMonitorPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingCycle = this._billingCycle;
    }
    if (this._effectiveDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveDate = this._effectiveDate;
    }
    if (this._planId !== undefined) {
      hasAnyValues = true;
      internalValueResult.planId = this._planId;
    }
    if (this._usageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageType = this._usageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogzMonitorPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._billingCycle = undefined;
      this._effectiveDate = undefined;
      this._planId = undefined;
      this._usageType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._billingCycle = value.billingCycle;
      this._effectiveDate = value.effectiveDate;
      this._planId = value.planId;
      this._usageType = value.usageType;
    }
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
    return this._billingCycle;
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
    return this._effectiveDate;
  }

  // plan_id - computed: false, optional: true, required: false
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  public resetPlanId() {
    this._planId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
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
    return this._usageType;
  }
}
export interface LogzMonitorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#create LogzMonitor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#delete LogzMonitor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#read LogzMonitor#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#update LogzMonitor#update}
  */
  readonly update?: string;
}

export function logzMonitorTimeoutsToTerraform(struct?: LogzMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogzMonitorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogzMonitorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface LogzMonitorUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#email LogzMonitor#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#first_name LogzMonitor#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#last_name LogzMonitor#last_name}
  */
  readonly lastName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#phone_number LogzMonitor#phone_number}
  */
  readonly phoneNumber: string;
}

export function logzMonitorUserToTerraform(struct?: LogzMonitorUserOutputReference | LogzMonitorUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogzMonitorUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogzMonitorUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._phoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._phoneNumber = value.phoneNumber;
    }
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
    return this._email;
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
    return this._firstName;
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
    return this._lastName;
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
    return this._phoneNumber;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor azurerm_logz_monitor}
*/
export class LogzMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_logz_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogzMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogzMonitor to import
  * @param importFromId The id of the existing LogzMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogzMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_logz_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/logz_monitor azurerm_logz_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogzMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: LogzMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logz_monitor',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.81.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._companyName = config.companyName;
    this._enabled = config.enabled;
    this._enterpriseAppId = config.enterpriseAppId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._plan.internalValue = config.plan;
    this._timeouts.internalValue = config.timeouts;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_name - computed: false, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enterprise_app_id - computed: false, optional: true, required: false
  private _enterpriseAppId?: string; 
  public get enterpriseAppId() {
    return this.getStringAttribute('enterprise_app_id');
  }
  public set enterpriseAppId(value: string) {
    this._enterpriseAppId = value;
  }
  public resetEnterpriseAppId() {
    this._enterpriseAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseAppIdInput() {
    return this._enterpriseAppId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._location;
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
    return this._name;
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
    return this._resourceGroupName;
  }

  // single_sign_on_url - computed: true, optional: false, required: false
  public get singleSignOnUrl() {
    return this.getStringAttribute('single_sign_on_url');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // plan - computed: false, optional: false, required: true
  private _plan = new LogzMonitorPlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
  public putPlan(value: LogzMonitorPlan) {
    this._plan.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogzMonitorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogzMonitorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user - computed: false, optional: false, required: true
  private _user = new LogzMonitorUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: LogzMonitorUser) {
    this._user.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company_name: cdktf.stringToTerraform(this._companyName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enterprise_app_id: cdktf.stringToTerraform(this._enterpriseAppId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      plan: logzMonitorPlanToTerraform(this._plan.internalValue),
      timeouts: logzMonitorTimeoutsToTerraform(this._timeouts.internalValue),
      user: logzMonitorUserToTerraform(this._user.internalValue),
    };
  }
}
