// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_cloud_elasticsearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermElasticCloudElasticsearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_cloud_elasticsearch#id DataAzurermElasticCloudElasticsearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_cloud_elasticsearch#name DataAzurermElasticCloudElasticsearch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_cloud_elasticsearch#resource_group_name DataAzurermElasticCloudElasticsearch#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_cloud_elasticsearch#logs DataAzurermElasticCloudElasticsearch#logs}
  */
  readonly logs?: DataAzurermElasticCloudElasticsearchLogs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_cloud_elasticsearch#timeouts DataAzurermElasticCloudElasticsearch#timeouts}
  */
  readonly timeouts?: DataAzurermElasticCloudElasticsearchTimeouts;
}
export interface DataAzurermElasticCloudElasticsearchLogsFilteringTag {
}

export function dataAzurermElasticCloudElasticsearchLogsFilteringTagToTerraform(struct?: DataAzurermElasticCloudElasticsearchLogsFilteringTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermElasticCloudElasticsearchLogsFilteringTagToHclTerraform(struct?: DataAzurermElasticCloudElasticsearchLogsFilteringTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermElasticCloudElasticsearchLogsFilteringTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermElasticCloudElasticsearchLogsFilteringTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAzurermElasticCloudElasticsearchLogsFilteringTagList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference {
    return new DataAzurermElasticCloudElasticsearchLogsFilteringTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermElasticCloudElasticsearchLogs {
}

export function dataAzurermElasticCloudElasticsearchLogsToTerraform(struct?: DataAzurermElasticCloudElasticsearchLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermElasticCloudElasticsearchLogsToHclTerraform(struct?: DataAzurermElasticCloudElasticsearchLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermElasticCloudElasticsearchLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermElasticCloudElasticsearchLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermElasticCloudElasticsearchLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // filtering_tag - computed: true, optional: false, required: false
  private _filteringTag = new DataAzurermElasticCloudElasticsearchLogsFilteringTagList(this, "filtering_tag", false);
  public get filteringTag() {
    return this._filteringTag;
  }

  // send_activity_logs - computed: true, optional: false, required: false
  public get sendActivityLogs() {
    return this.getBooleanAttribute('send_activity_logs');
  }

  // send_azuread_logs - computed: true, optional: false, required: false
  public get sendAzureadLogs() {
    return this.getBooleanAttribute('send_azuread_logs');
  }

  // send_subscription_logs - computed: true, optional: false, required: false
  public get sendSubscriptionLogs() {
    return this.getBooleanAttribute('send_subscription_logs');
  }
}

export class DataAzurermElasticCloudElasticsearchLogsList extends cdktf.ComplexList {
  public internalValue? : DataAzurermElasticCloudElasticsearchLogs[] | cdktf.IResolvable

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
  public get(index: number): DataAzurermElasticCloudElasticsearchLogsOutputReference {
    return new DataAzurermElasticCloudElasticsearchLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermElasticCloudElasticsearchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_cloud_elasticsearch#read DataAzurermElasticCloudElasticsearch#read}
  */
  readonly read?: string;
}

export function dataAzurermElasticCloudElasticsearchTimeoutsToTerraform(struct?: DataAzurermElasticCloudElasticsearchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermElasticCloudElasticsearchTimeoutsToHclTerraform(struct?: DataAzurermElasticCloudElasticsearchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermElasticCloudElasticsearchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermElasticCloudElasticsearchTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermElasticCloudElasticsearchTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_cloud_elasticsearch azurerm_elastic_cloud_elasticsearch}
*/
export class DataAzurermElasticCloudElasticsearch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_elastic_cloud_elasticsearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermElasticCloudElasticsearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermElasticCloudElasticsearch to import
  * @param importFromId The id of the existing DataAzurermElasticCloudElasticsearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_cloud_elasticsearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermElasticCloudElasticsearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_elastic_cloud_elasticsearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_cloud_elasticsearch azurerm_elastic_cloud_elasticsearch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermElasticCloudElasticsearchConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermElasticCloudElasticsearchConfig) {
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
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
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

  // elastic_cloud_email_address - computed: true, optional: false, required: false
  public get elasticCloudEmailAddress() {
    return this.getStringAttribute('elastic_cloud_email_address');
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // monitoring_enabled - computed: true, optional: false, required: false
  public get monitoringEnabled() {
    return this.getBooleanAttribute('monitoring_enabled');
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

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new DataAzurermElasticCloudElasticsearchLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: DataAzurermElasticCloudElasticsearchLogs[] | cdktf.IResolvable) {
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
  private _timeouts = new DataAzurermElasticCloudElasticsearchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermElasticCloudElasticsearchTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      logs: cdktf.listMapper(dataAzurermElasticCloudElasticsearchLogsToTerraform, true)(this._logs.internalValue),
      timeouts: dataAzurermElasticCloudElasticsearchTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs: {
        value: cdktf.listMapperHcl(dataAzurermElasticCloudElasticsearchLogsToHclTerraform, true)(this._logs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAzurermElasticCloudElasticsearchLogsList",
      },
      timeouts: {
        value: dataAzurermElasticCloudElasticsearchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermElasticCloudElasticsearchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
