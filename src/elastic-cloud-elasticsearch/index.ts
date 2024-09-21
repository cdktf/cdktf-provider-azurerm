// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticCloudElasticsearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#elastic_cloud_email_address ElasticCloudElasticsearch#elastic_cloud_email_address}
  */
  readonly elasticCloudEmailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#id ElasticCloudElasticsearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#location ElasticCloudElasticsearch#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#monitoring_enabled ElasticCloudElasticsearch#monitoring_enabled}
  */
  readonly monitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#resource_group_name ElasticCloudElasticsearch#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#sku_name ElasticCloudElasticsearch#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#tags ElasticCloudElasticsearch#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#logs ElasticCloudElasticsearch#logs}
  */
  readonly logs?: ElasticCloudElasticsearchLogs;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#timeouts ElasticCloudElasticsearch#timeouts}
  */
  readonly timeouts?: ElasticCloudElasticsearchTimeouts;
}
export interface ElasticCloudElasticsearchLogsFilteringTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#action ElasticCloudElasticsearch#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#name ElasticCloudElasticsearch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#value ElasticCloudElasticsearch#value}
  */
  readonly value: string;
}

export function elasticCloudElasticsearchLogsFilteringTagToTerraform(struct?: ElasticCloudElasticsearchLogsFilteringTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elasticCloudElasticsearchLogsFilteringTagToHclTerraform(struct?: ElasticCloudElasticsearchLogsFilteringTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticCloudElasticsearchLogsFilteringTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticCloudElasticsearchLogsFilteringTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticCloudElasticsearchLogsFilteringTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ElasticCloudElasticsearchLogsFilteringTagList extends cdktf.ComplexList {
  public internalValue? : ElasticCloudElasticsearchLogsFilteringTag[] | cdktf.IResolvable

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
  public get(index: number): ElasticCloudElasticsearchLogsFilteringTagOutputReference {
    return new ElasticCloudElasticsearchLogsFilteringTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticCloudElasticsearchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#send_activity_logs ElasticCloudElasticsearch#send_activity_logs}
  */
  readonly sendActivityLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#send_azuread_logs ElasticCloudElasticsearch#send_azuread_logs}
  */
  readonly sendAzureadLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#send_subscription_logs ElasticCloudElasticsearch#send_subscription_logs}
  */
  readonly sendSubscriptionLogs?: boolean | cdktf.IResolvable;
  /**
  * filtering_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#filtering_tag ElasticCloudElasticsearch#filtering_tag}
  */
  readonly filteringTag?: ElasticCloudElasticsearchLogsFilteringTag[] | cdktf.IResolvable;
}

export function elasticCloudElasticsearchLogsToTerraform(struct?: ElasticCloudElasticsearchLogsOutputReference | ElasticCloudElasticsearchLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send_activity_logs: cdktf.booleanToTerraform(struct!.sendActivityLogs),
    send_azuread_logs: cdktf.booleanToTerraform(struct!.sendAzureadLogs),
    send_subscription_logs: cdktf.booleanToTerraform(struct!.sendSubscriptionLogs),
    filtering_tag: cdktf.listMapper(elasticCloudElasticsearchLogsFilteringTagToTerraform, true)(struct!.filteringTag),
  }
}


export function elasticCloudElasticsearchLogsToHclTerraform(struct?: ElasticCloudElasticsearchLogsOutputReference | ElasticCloudElasticsearchLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send_activity_logs: {
      value: cdktf.booleanToHclTerraform(struct!.sendActivityLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_azuread_logs: {
      value: cdktf.booleanToHclTerraform(struct!.sendAzureadLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_subscription_logs: {
      value: cdktf.booleanToHclTerraform(struct!.sendSubscriptionLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filtering_tag: {
      value: cdktf.listMapperHcl(elasticCloudElasticsearchLogsFilteringTagToHclTerraform, true)(struct!.filteringTag),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticCloudElasticsearchLogsFilteringTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticCloudElasticsearchLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticCloudElasticsearchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendActivityLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendActivityLogs = this._sendActivityLogs;
    }
    if (this._sendAzureadLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendAzureadLogs = this._sendAzureadLogs;
    }
    if (this._sendSubscriptionLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendSubscriptionLogs = this._sendSubscriptionLogs;
    }
    if (this._filteringTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filteringTag = this._filteringTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticCloudElasticsearchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sendActivityLogs = undefined;
      this._sendAzureadLogs = undefined;
      this._sendSubscriptionLogs = undefined;
      this._filteringTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sendActivityLogs = value.sendActivityLogs;
      this._sendAzureadLogs = value.sendAzureadLogs;
      this._sendSubscriptionLogs = value.sendSubscriptionLogs;
      this._filteringTag.internalValue = value.filteringTag;
    }
  }

  // send_activity_logs - computed: false, optional: true, required: false
  private _sendActivityLogs?: boolean | cdktf.IResolvable; 
  public get sendActivityLogs() {
    return this.getBooleanAttribute('send_activity_logs');
  }
  public set sendActivityLogs(value: boolean | cdktf.IResolvable) {
    this._sendActivityLogs = value;
  }
  public resetSendActivityLogs() {
    this._sendActivityLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendActivityLogsInput() {
    return this._sendActivityLogs;
  }

  // send_azuread_logs - computed: false, optional: true, required: false
  private _sendAzureadLogs?: boolean | cdktf.IResolvable; 
  public get sendAzureadLogs() {
    return this.getBooleanAttribute('send_azuread_logs');
  }
  public set sendAzureadLogs(value: boolean | cdktf.IResolvable) {
    this._sendAzureadLogs = value;
  }
  public resetSendAzureadLogs() {
    this._sendAzureadLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAzureadLogsInput() {
    return this._sendAzureadLogs;
  }

  // send_subscription_logs - computed: false, optional: true, required: false
  private _sendSubscriptionLogs?: boolean | cdktf.IResolvable; 
  public get sendSubscriptionLogs() {
    return this.getBooleanAttribute('send_subscription_logs');
  }
  public set sendSubscriptionLogs(value: boolean | cdktf.IResolvable) {
    this._sendSubscriptionLogs = value;
  }
  public resetSendSubscriptionLogs() {
    this._sendSubscriptionLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSubscriptionLogsInput() {
    return this._sendSubscriptionLogs;
  }

  // filtering_tag - computed: false, optional: true, required: false
  private _filteringTag = new ElasticCloudElasticsearchLogsFilteringTagList(this, "filtering_tag", false);
  public get filteringTag() {
    return this._filteringTag;
  }
  public putFilteringTag(value: ElasticCloudElasticsearchLogsFilteringTag[] | cdktf.IResolvable) {
    this._filteringTag.internalValue = value;
  }
  public resetFilteringTag() {
    this._filteringTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringTagInput() {
    return this._filteringTag.internalValue;
  }
}
export interface ElasticCloudElasticsearchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#create ElasticCloudElasticsearch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#delete ElasticCloudElasticsearch#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#read ElasticCloudElasticsearch#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#update ElasticCloudElasticsearch#update}
  */
  readonly update?: string;
}

export function elasticCloudElasticsearchTimeoutsToTerraform(struct?: ElasticCloudElasticsearchTimeouts | cdktf.IResolvable): any {
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


export function elasticCloudElasticsearchTimeoutsToHclTerraform(struct?: ElasticCloudElasticsearchTimeouts | cdktf.IResolvable): any {
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

export class ElasticCloudElasticsearchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticCloudElasticsearchTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElasticCloudElasticsearchTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch azurerm_elastic_cloud_elasticsearch}
*/
export class ElasticCloudElasticsearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_elastic_cloud_elasticsearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticCloudElasticsearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticCloudElasticsearch to import
  * @param importFromId The id of the existing ElasticCloudElasticsearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticCloudElasticsearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_elastic_cloud_elasticsearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/elastic_cloud_elasticsearch azurerm_elastic_cloud_elasticsearch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticCloudElasticsearchConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticCloudElasticsearchConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_elastic_cloud_elasticsearch',
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
    this._elasticCloudEmailAddress = config.elasticCloudEmailAddress;
    this._id = config.id;
    this._location = config.location;
    this._monitoringEnabled = config.monitoringEnabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._logs.internalValue = config.logs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // elastic_cloud_deployment_id - computed: true, optional: false, required: false
  public get elasticCloudDeploymentId() {
    return this.getStringAttribute('elastic_cloud_deployment_id');
  }

  // elastic_cloud_email_address - computed: false, optional: false, required: true
  private _elasticCloudEmailAddress?: string; 
  public get elasticCloudEmailAddress() {
    return this.getStringAttribute('elastic_cloud_email_address');
  }
  public set elasticCloudEmailAddress(value: string) {
    this._elasticCloudEmailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticCloudEmailAddressInput() {
    return this._elasticCloudEmailAddress;
  }

  // elastic_cloud_sso_default_url - computed: true, optional: false, required: false
  public get elasticCloudSsoDefaultUrl() {
    return this.getStringAttribute('elastic_cloud_sso_default_url');
  }

  // elastic_cloud_user_id - computed: true, optional: false, required: false
  public get elasticCloudUserId() {
    return this.getStringAttribute('elastic_cloud_user_id');
  }

  // elasticsearch_service_url - computed: true, optional: false, required: false
  public get elasticsearchServiceUrl() {
    return this.getStringAttribute('elasticsearch_service_url');
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

  // kibana_service_url - computed: true, optional: false, required: false
  public get kibanaServiceUrl() {
    return this.getStringAttribute('kibana_service_url');
  }

  // kibana_sso_uri - computed: true, optional: false, required: false
  public get kibanaSsoUri() {
    return this.getStringAttribute('kibana_sso_uri');
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

  // monitoring_enabled - computed: false, optional: true, required: false
  private _monitoringEnabled?: boolean | cdktf.IResolvable; 
  public get monitoringEnabled() {
    return this.getBooleanAttribute('monitoring_enabled');
  }
  public set monitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._monitoringEnabled = value;
  }
  public resetMonitoringEnabled() {
    this._monitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringEnabledInput() {
    return this._monitoringEnabled;
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
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

  // logs - computed: false, optional: true, required: false
  private _logs = new ElasticCloudElasticsearchLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: ElasticCloudElasticsearchLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElasticCloudElasticsearchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElasticCloudElasticsearchTimeouts) {
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
      elastic_cloud_email_address: cdktf.stringToTerraform(this._elasticCloudEmailAddress),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      monitoring_enabled: cdktf.booleanToTerraform(this._monitoringEnabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      logs: elasticCloudElasticsearchLogsToTerraform(this._logs.internalValue),
      timeouts: elasticCloudElasticsearchTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      elastic_cloud_email_address: {
        value: cdktf.stringToHclTerraform(this._elasticCloudEmailAddress),
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
      monitoring_enabled: {
        value: cdktf.booleanToHclTerraform(this._monitoringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
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
      logs: {
        value: elasticCloudElasticsearchLogsToHclTerraform(this._logs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticCloudElasticsearchLogsList",
      },
      timeouts: {
        value: elasticCloudElasticsearchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticCloudElasticsearchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
