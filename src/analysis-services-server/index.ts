// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnalysisServicesServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}
  */
  readonly adminUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}
  */
  readonly backupBlobContainerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#power_bi_service_enabled AnalysisServicesServer#power_bi_service_enabled}
  */
  readonly powerBiServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}
  */
  readonly querypoolConnectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * ipv4_firewall_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#ipv4_firewall_rule AnalysisServicesServer#ipv4_firewall_rule}
  */
  readonly ipv4FirewallRule?: AnalysisServicesServerIpv4FirewallRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#timeouts AnalysisServicesServer#timeouts}
  */
  readonly timeouts?: AnalysisServicesServerTimeouts;
}
export interface AnalysisServicesServerIpv4FirewallRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#range_end AnalysisServicesServer#range_end}
  */
  readonly rangeEnd: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#range_start AnalysisServicesServer#range_start}
  */
  readonly rangeStart: string;
}

export function analysisServicesServerIpv4FirewallRuleToTerraform(struct?: AnalysisServicesServerIpv4FirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    range_end: cdktf.stringToTerraform(struct!.rangeEnd),
    range_start: cdktf.stringToTerraform(struct!.rangeStart),
  }
}


export function analysisServicesServerIpv4FirewallRuleToHclTerraform(struct?: AnalysisServicesServerIpv4FirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_end: {
      value: cdktf.stringToHclTerraform(struct!.rangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_start: {
      value: cdktf.stringToHclTerraform(struct!.rangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalysisServicesServerIpv4FirewallRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AnalysisServicesServerIpv4FirewallRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEnd = this._rangeEnd;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalysisServicesServerIpv4FirewallRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rangeEnd = undefined;
      this._rangeStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rangeEnd = value.rangeEnd;
      this._rangeStart = value.rangeStart;
    }
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

  // range_end - computed: false, optional: false, required: true
  private _rangeEnd?: string; 
  public get rangeEnd() {
    return this.getStringAttribute('range_end');
  }
  public set rangeEnd(value: string) {
    this._rangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_start - computed: false, optional: false, required: true
  private _rangeStart?: string; 
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }
  public set rangeStart(value: string) {
    this._rangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }
}

export class AnalysisServicesServerIpv4FirewallRuleList extends cdktf.ComplexList {
  public internalValue? : AnalysisServicesServerIpv4FirewallRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AnalysisServicesServerIpv4FirewallRuleOutputReference {
    return new AnalysisServicesServerIpv4FirewallRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalysisServicesServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#create AnalysisServicesServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#delete AnalysisServicesServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#read AnalysisServicesServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#update AnalysisServicesServer#update}
  */
  readonly update?: string;
}

export function analysisServicesServerTimeoutsToTerraform(struct?: AnalysisServicesServerTimeouts | cdktf.IResolvable): any {
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


export function analysisServicesServerTimeoutsToHclTerraform(struct?: AnalysisServicesServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalysisServicesServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AnalysisServicesServerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AnalysisServicesServerTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server azurerm_analysis_services_server}
*/
export class AnalysisServicesServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_analysis_services_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnalysisServicesServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnalysisServicesServer to import
  * @param importFromId The id of the existing AnalysisServicesServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnalysisServicesServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_analysis_services_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/analysis_services_server azurerm_analysis_services_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnalysisServicesServerConfig
  */
  public constructor(scope: Construct, id: string, config: AnalysisServicesServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_analysis_services_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminUsers = config.adminUsers;
    this._backupBlobContainerUri = config.backupBlobContainerUri;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._powerBiServiceEnabled = config.powerBiServiceEnabled;
    this._querypoolConnectionMode = config.querypoolConnectionMode;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._ipv4FirewallRule.internalValue = config.ipv4FirewallRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_users - computed: false, optional: true, required: false
  private _adminUsers?: string[]; 
  public get adminUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_users'));
  }
  public set adminUsers(value: string[]) {
    this._adminUsers = value;
  }
  public resetAdminUsers() {
    this._adminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers;
  }

  // backup_blob_container_uri - computed: false, optional: true, required: false
  private _backupBlobContainerUri?: string; 
  public get backupBlobContainerUri() {
    return this.getStringAttribute('backup_blob_container_uri');
  }
  public set backupBlobContainerUri(value: string) {
    this._backupBlobContainerUri = value;
  }
  public resetBackupBlobContainerUri() {
    this._backupBlobContainerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupBlobContainerUriInput() {
    return this._backupBlobContainerUri;
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

  // power_bi_service_enabled - computed: false, optional: true, required: false
  private _powerBiServiceEnabled?: boolean | cdktf.IResolvable; 
  public get powerBiServiceEnabled() {
    return this.getBooleanAttribute('power_bi_service_enabled');
  }
  public set powerBiServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._powerBiServiceEnabled = value;
  }
  public resetPowerBiServiceEnabled() {
    this._powerBiServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerBiServiceEnabledInput() {
    return this._powerBiServiceEnabled;
  }

  // querypool_connection_mode - computed: false, optional: true, required: false
  private _querypoolConnectionMode?: string; 
  public get querypoolConnectionMode() {
    return this.getStringAttribute('querypool_connection_mode');
  }
  public set querypoolConnectionMode(value: string) {
    this._querypoolConnectionMode = value;
  }
  public resetQuerypoolConnectionMode() {
    this._querypoolConnectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querypoolConnectionModeInput() {
    return this._querypoolConnectionMode;
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

  // server_full_name - computed: true, optional: false, required: false
  public get serverFullName() {
    return this.getStringAttribute('server_full_name');
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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

  // ipv4_firewall_rule - computed: false, optional: true, required: false
  private _ipv4FirewallRule = new AnalysisServicesServerIpv4FirewallRuleList(this, "ipv4_firewall_rule", true);
  public get ipv4FirewallRule() {
    return this._ipv4FirewallRule;
  }
  public putIpv4FirewallRule(value: AnalysisServicesServerIpv4FirewallRule[] | cdktf.IResolvable) {
    this._ipv4FirewallRule.internalValue = value;
  }
  public resetIpv4FirewallRule() {
    this._ipv4FirewallRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FirewallRuleInput() {
    return this._ipv4FirewallRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AnalysisServicesServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AnalysisServicesServerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminUsers),
      backup_blob_container_uri: cdktf.stringToTerraform(this._backupBlobContainerUri),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      power_bi_service_enabled: cdktf.booleanToTerraform(this._powerBiServiceEnabled),
      querypool_connection_mode: cdktf.stringToTerraform(this._querypoolConnectionMode),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      ipv4_firewall_rule: cdktf.listMapper(analysisServicesServerIpv4FirewallRuleToTerraform, true)(this._ipv4FirewallRule.internalValue),
      timeouts: analysisServicesServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_blob_container_uri: {
        value: cdktf.stringToHclTerraform(this._backupBlobContainerUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_bi_service_enabled: {
        value: cdktf.booleanToHclTerraform(this._powerBiServiceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      querypool_connection_mode: {
        value: cdktf.stringToHclTerraform(this._querypoolConnectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ipv4_firewall_rule: {
        value: cdktf.listMapperHcl(analysisServicesServerIpv4FirewallRuleToHclTerraform, true)(this._ipv4FirewallRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AnalysisServicesServerIpv4FirewallRuleList",
      },
      timeouts: {
        value: analysisServicesServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AnalysisServicesServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
