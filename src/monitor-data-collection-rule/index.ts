// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorDataCollectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#data_collection_endpoint_id MonitorDataCollectionRule#data_collection_endpoint_id}
  */
  readonly dataCollectionEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#description MonitorDataCollectionRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#id MonitorDataCollectionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#kind MonitorDataCollectionRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#location MonitorDataCollectionRule#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#resource_group_name MonitorDataCollectionRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#tags MonitorDataCollectionRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * data_flow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#data_flow MonitorDataCollectionRule#data_flow}
  */
  readonly dataFlow: MonitorDataCollectionRuleDataFlow[] | cdktf.IResolvable;
  /**
  * data_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#data_sources MonitorDataCollectionRule#data_sources}
  */
  readonly dataSources?: MonitorDataCollectionRuleDataSources;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}
  */
  readonly destinations: MonitorDataCollectionRuleDestinations;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#identity MonitorDataCollectionRule#identity}
  */
  readonly identity?: MonitorDataCollectionRuleIdentity;
  /**
  * stream_declaration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#stream_declaration MonitorDataCollectionRule#stream_declaration}
  */
  readonly streamDeclaration?: MonitorDataCollectionRuleStreamDeclaration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#timeouts MonitorDataCollectionRule#timeouts}
  */
  readonly timeouts?: MonitorDataCollectionRuleTimeouts;
}
export interface MonitorDataCollectionRuleDataFlow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#built_in_transform MonitorDataCollectionRule#built_in_transform}
  */
  readonly builtInTransform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}
  */
  readonly destinations: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#output_stream MonitorDataCollectionRule#output_stream}
  */
  readonly outputStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#transform_kql MonitorDataCollectionRule#transform_kql}
  */
  readonly transformKql?: string;
}

export function monitorDataCollectionRuleDataFlowToTerraform(struct?: MonitorDataCollectionRuleDataFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    built_in_transform: cdktf.stringToTerraform(struct!.builtInTransform),
    destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinations),
    output_stream: cdktf.stringToTerraform(struct!.outputStream),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
    transform_kql: cdktf.stringToTerraform(struct!.transformKql),
  }
}


export function monitorDataCollectionRuleDataFlowToHclTerraform(struct?: MonitorDataCollectionRuleDataFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    built_in_transform: {
      value: cdktf.stringToHclTerraform(struct!.builtInTransform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destinations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    output_stream: {
      value: cdktf.stringToHclTerraform(struct!.outputStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transform_kql: {
      value: cdktf.stringToHclTerraform(struct!.transformKql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataFlowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInTransform !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInTransform = this._builtInTransform;
    }
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._outputStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStream = this._outputStream;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    if (this._transformKql !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformKql = this._transformKql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builtInTransform = undefined;
      this._destinations = undefined;
      this._outputStream = undefined;
      this._streams = undefined;
      this._transformKql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builtInTransform = value.builtInTransform;
      this._destinations = value.destinations;
      this._outputStream = value.outputStream;
      this._streams = value.streams;
      this._transformKql = value.transformKql;
    }
  }

  // built_in_transform - computed: false, optional: true, required: false
  private _builtInTransform?: string; 
  public get builtInTransform() {
    return this.getStringAttribute('built_in_transform');
  }
  public set builtInTransform(value: string) {
    this._builtInTransform = value;
  }
  public resetBuiltInTransform() {
    this._builtInTransform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInTransformInput() {
    return this._builtInTransform;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
  }

  // output_stream - computed: false, optional: true, required: false
  private _outputStream?: string; 
  public get outputStream() {
    return this.getStringAttribute('output_stream');
  }
  public set outputStream(value: string) {
    this._outputStream = value;
  }
  public resetOutputStream() {
    this._outputStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStreamInput() {
    return this._outputStream;
  }

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }

  // transform_kql - computed: false, optional: true, required: false
  private _transformKql?: string; 
  public get transformKql() {
    return this.getStringAttribute('transform_kql');
  }
  public set transformKql(value: string) {
    this._transformKql = value;
  }
  public resetTransformKql() {
    this._transformKql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformKqlInput() {
    return this._transformKql;
  }
}

export class MonitorDataCollectionRuleDataFlowList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataFlow[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataFlowOutputReference {
    return new MonitorDataCollectionRuleDataFlowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#consumer_group MonitorDataCollectionRule#consumer_group}
  */
  readonly consumerGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#stream MonitorDataCollectionRule#stream}
  */
  readonly stream: string;
}

export function monitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceToTerraform(struct?: MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_group: cdktf.stringToTerraform(struct!.consumerGroup),
    name: cdktf.stringToTerraform(struct!.name),
    stream: cdktf.stringToTerraform(struct!.stream),
  }
}


export function monitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_group: {
      value: cdktf.stringToHclTerraform(struct!.consumerGroup),
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
    stream: {
      value: cdktf.stringToHclTerraform(struct!.stream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroup = this._consumerGroup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stream !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerGroup = undefined;
      this._name = undefined;
      this._stream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerGroup = value.consumerGroup;
      this._name = value.name;
      this._stream = value.stream;
    }
  }

  // consumer_group - computed: false, optional: true, required: false
  private _consumerGroup?: string; 
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }
  public set consumerGroup(value: string) {
    this._consumerGroup = value;
  }
  public resetConsumerGroup() {
    this._consumerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup;
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

  // stream - computed: false, optional: false, required: true
  private _stream?: string; 
  public get stream() {
    return this.getStringAttribute('stream');
  }
  public set stream(value: string) {
    this._stream = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream;
  }
}

export class MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference {
    return new MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesDataImport {
  /**
  * event_hub_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#event_hub_data_source MonitorDataCollectionRule#event_hub_data_source}
  */
  readonly eventHubDataSource: MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource[] | cdktf.IResolvable;
}

export function monitorDataCollectionRuleDataSourcesDataImportToTerraform(struct?: MonitorDataCollectionRuleDataSourcesDataImportOutputReference | MonitorDataCollectionRuleDataSourcesDataImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_hub_data_source: cdktf.listMapper(monitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceToTerraform, true)(struct!.eventHubDataSource),
  }
}


export function monitorDataCollectionRuleDataSourcesDataImportToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesDataImportOutputReference | MonitorDataCollectionRuleDataSourcesDataImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_hub_data_source: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceToHclTerraform, true)(struct!.eventHubDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesDataImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDataSourcesDataImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventHubDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventHubDataSource = this._eventHubDataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesDataImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventHubDataSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventHubDataSource.internalValue = value.eventHubDataSource;
    }
  }

  // event_hub_data_source - computed: false, optional: false, required: true
  private _eventHubDataSource = new MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList(this, "event_hub_data_source", false);
  public get eventHubDataSource() {
    return this._eventHubDataSource;
  }
  public putEventHubDataSource(value: MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource[] | cdktf.IResolvable) {
    this._eventHubDataSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubDataSourceInput() {
    return this._eventHubDataSource.internalValue;
  }
}
export interface MonitorDataCollectionRuleDataSourcesExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#extension_json MonitorDataCollectionRule#extension_json}
  */
  readonly extensionJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#extension_name MonitorDataCollectionRule#extension_name}
  */
  readonly extensionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#input_data_sources MonitorDataCollectionRule#input_data_sources}
  */
  readonly inputDataSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
}

export function monitorDataCollectionRuleDataSourcesExtensionToTerraform(struct?: MonitorDataCollectionRuleDataSourcesExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension_json: cdktf.stringToTerraform(struct!.extensionJson),
    extension_name: cdktf.stringToTerraform(struct!.extensionName),
    input_data_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputDataSources),
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
  }
}


export function monitorDataCollectionRuleDataSourcesExtensionToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension_json: {
      value: cdktf.stringToHclTerraform(struct!.extensionJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_name: {
      value: cdktf.stringToHclTerraform(struct!.extensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_data_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputDataSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesExtensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensionJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionJson = this._extensionJson;
    }
    if (this._extensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionName = this._extensionName;
    }
    if (this._inputDataSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDataSources = this._inputDataSources;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensionJson = undefined;
      this._extensionName = undefined;
      this._inputDataSources = undefined;
      this._name = undefined;
      this._streams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extensionJson = value.extensionJson;
      this._extensionName = value.extensionName;
      this._inputDataSources = value.inputDataSources;
      this._name = value.name;
      this._streams = value.streams;
    }
  }

  // extension_json - computed: false, optional: true, required: false
  private _extensionJson?: string; 
  public get extensionJson() {
    return this.getStringAttribute('extension_json');
  }
  public set extensionJson(value: string) {
    this._extensionJson = value;
  }
  public resetExtensionJson() {
    this._extensionJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionJsonInput() {
    return this._extensionJson;
  }

  // extension_name - computed: false, optional: false, required: true
  private _extensionName?: string; 
  public get extensionName() {
    return this.getStringAttribute('extension_name');
  }
  public set extensionName(value: string) {
    this._extensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionNameInput() {
    return this._extensionName;
  }

  // input_data_sources - computed: false, optional: true, required: false
  private _inputDataSources?: string[]; 
  public get inputDataSources() {
    return this.getListAttribute('input_data_sources');
  }
  public set inputDataSources(value: string[]) {
    this._inputDataSources = value;
  }
  public resetInputDataSources() {
    this._inputDataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataSourcesInput() {
    return this._inputDataSources;
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

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }
}

export class MonitorDataCollectionRuleDataSourcesExtensionList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesExtension[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesExtensionOutputReference {
    return new MonitorDataCollectionRuleDataSourcesExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesIisLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#log_directories MonitorDataCollectionRule#log_directories}
  */
  readonly logDirectories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
}

export function monitorDataCollectionRuleDataSourcesIisLogToTerraform(struct?: MonitorDataCollectionRuleDataSourcesIisLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_directories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logDirectories),
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
  }
}


export function monitorDataCollectionRuleDataSourcesIisLogToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesIisLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_directories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logDirectories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesIisLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesIisLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logDirectories !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDirectories = this._logDirectories;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesIisLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logDirectories = undefined;
      this._name = undefined;
      this._streams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logDirectories = value.logDirectories;
      this._name = value.name;
      this._streams = value.streams;
    }
  }

  // log_directories - computed: false, optional: true, required: false
  private _logDirectories?: string[]; 
  public get logDirectories() {
    return this.getListAttribute('log_directories');
  }
  public set logDirectories(value: string[]) {
    this._logDirectories = value;
  }
  public resetLogDirectories() {
    this._logDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDirectoriesInput() {
    return this._logDirectories;
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

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }
}

export class MonitorDataCollectionRuleDataSourcesIisLogList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesIisLog[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesIisLogOutputReference {
    return new MonitorDataCollectionRuleDataSourcesIisLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesLogFileSettingsText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#record_start_timestamp_format MonitorDataCollectionRule#record_start_timestamp_format}
  */
  readonly recordStartTimestampFormat: string;
}

export function monitorDataCollectionRuleDataSourcesLogFileSettingsTextToTerraform(struct?: MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference | MonitorDataCollectionRuleDataSourcesLogFileSettingsText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_start_timestamp_format: cdktf.stringToTerraform(struct!.recordStartTimestampFormat),
  }
}


export function monitorDataCollectionRuleDataSourcesLogFileSettingsTextToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference | MonitorDataCollectionRuleDataSourcesLogFileSettingsText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_start_timestamp_format: {
      value: cdktf.stringToHclTerraform(struct!.recordStartTimestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDataSourcesLogFileSettingsText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordStartTimestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordStartTimestampFormat = this._recordStartTimestampFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesLogFileSettingsText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordStartTimestampFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordStartTimestampFormat = value.recordStartTimestampFormat;
    }
  }

  // record_start_timestamp_format - computed: false, optional: false, required: true
  private _recordStartTimestampFormat?: string; 
  public get recordStartTimestampFormat() {
    return this.getStringAttribute('record_start_timestamp_format');
  }
  public set recordStartTimestampFormat(value: string) {
    this._recordStartTimestampFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordStartTimestampFormatInput() {
    return this._recordStartTimestampFormat;
  }
}
export interface MonitorDataCollectionRuleDataSourcesLogFileSettings {
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#text MonitorDataCollectionRule#text}
  */
  readonly text: MonitorDataCollectionRuleDataSourcesLogFileSettingsText;
}

export function monitorDataCollectionRuleDataSourcesLogFileSettingsToTerraform(struct?: MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference | MonitorDataCollectionRuleDataSourcesLogFileSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: monitorDataCollectionRuleDataSourcesLogFileSettingsTextToTerraform(struct!.text),
  }
}


export function monitorDataCollectionRuleDataSourcesLogFileSettingsToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference | MonitorDataCollectionRuleDataSourcesLogFileSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: monitorDataCollectionRuleDataSourcesLogFileSettingsTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesLogFileSettingsTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDataSourcesLogFileSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesLogFileSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text.internalValue = value.text;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text = new MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: MonitorDataCollectionRuleDataSourcesLogFileSettingsText) {
    this._text.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}
export interface MonitorDataCollectionRuleDataSourcesLogFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#file_patterns MonitorDataCollectionRule#file_patterns}
  */
  readonly filePatterns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#format MonitorDataCollectionRule#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#settings MonitorDataCollectionRule#settings}
  */
  readonly settings?: MonitorDataCollectionRuleDataSourcesLogFileSettings;
}

export function monitorDataCollectionRuleDataSourcesLogFileToTerraform(struct?: MonitorDataCollectionRuleDataSourcesLogFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filePatterns),
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
    settings: monitorDataCollectionRuleDataSourcesLogFileSettingsToTerraform(struct!.settings),
  }
}


export function monitorDataCollectionRuleDataSourcesLogFileToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesLogFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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
    streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    settings: {
      value: monitorDataCollectionRuleDataSourcesLogFileSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesLogFileSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesLogFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesLogFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePatterns = this._filePatterns;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesLogFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filePatterns = undefined;
      this._format = undefined;
      this._name = undefined;
      this._streams = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filePatterns = value.filePatterns;
      this._format = value.format;
      this._name = value.name;
      this._streams = value.streams;
      this._settings.internalValue = value.settings;
    }
  }

  // file_patterns - computed: false, optional: false, required: true
  private _filePatterns?: string[]; 
  public get filePatterns() {
    return this.getListAttribute('file_patterns');
  }
  public set filePatterns(value: string[]) {
    this._filePatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePatternsInput() {
    return this._filePatterns;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: MonitorDataCollectionRuleDataSourcesLogFileSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class MonitorDataCollectionRuleDataSourcesLogFileList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesLogFile[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesLogFileOutputReference {
    return new MonitorDataCollectionRuleDataSourcesLogFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesPerformanceCounter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#counter_specifiers MonitorDataCollectionRule#counter_specifiers}
  */
  readonly counterSpecifiers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#sampling_frequency_in_seconds MonitorDataCollectionRule#sampling_frequency_in_seconds}
  */
  readonly samplingFrequencyInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
}

export function monitorDataCollectionRuleDataSourcesPerformanceCounterToTerraform(struct?: MonitorDataCollectionRuleDataSourcesPerformanceCounter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_specifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.counterSpecifiers),
    name: cdktf.stringToTerraform(struct!.name),
    sampling_frequency_in_seconds: cdktf.numberToTerraform(struct!.samplingFrequencyInSeconds),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
  }
}


export function monitorDataCollectionRuleDataSourcesPerformanceCounterToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesPerformanceCounter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter_specifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.counterSpecifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_frequency_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.samplingFrequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesPerformanceCounter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counterSpecifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterSpecifiers = this._counterSpecifiers;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._samplingFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingFrequencyInSeconds = this._samplingFrequencyInSeconds;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesPerformanceCounter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counterSpecifiers = undefined;
      this._name = undefined;
      this._samplingFrequencyInSeconds = undefined;
      this._streams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counterSpecifiers = value.counterSpecifiers;
      this._name = value.name;
      this._samplingFrequencyInSeconds = value.samplingFrequencyInSeconds;
      this._streams = value.streams;
    }
  }

  // counter_specifiers - computed: false, optional: false, required: true
  private _counterSpecifiers?: string[]; 
  public get counterSpecifiers() {
    return this.getListAttribute('counter_specifiers');
  }
  public set counterSpecifiers(value: string[]) {
    this._counterSpecifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get counterSpecifiersInput() {
    return this._counterSpecifiers;
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

  // sampling_frequency_in_seconds - computed: false, optional: false, required: true
  private _samplingFrequencyInSeconds?: number; 
  public get samplingFrequencyInSeconds() {
    return this.getNumberAttribute('sampling_frequency_in_seconds');
  }
  public set samplingFrequencyInSeconds(value: number) {
    this._samplingFrequencyInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingFrequencyInSecondsInput() {
    return this._samplingFrequencyInSeconds;
  }

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }
}

export class MonitorDataCollectionRuleDataSourcesPerformanceCounterList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesPerformanceCounter[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference {
    return new MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesPlatformTelemetry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
}

export function monitorDataCollectionRuleDataSourcesPlatformTelemetryToTerraform(struct?: MonitorDataCollectionRuleDataSourcesPlatformTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
  }
}


export function monitorDataCollectionRuleDataSourcesPlatformTelemetryToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesPlatformTelemetry | cdktf.IResolvable): any {
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
    streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesPlatformTelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesPlatformTelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._streams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._streams = value.streams;
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

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }
}

export class MonitorDataCollectionRuleDataSourcesPlatformTelemetryList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesPlatformTelemetry[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference {
    return new MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#label MonitorDataCollectionRule#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#value MonitorDataCollectionRule#value}
  */
  readonly value: string;
}

export function monitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterToTerraform(struct?: MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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

export class MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

export class MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference {
    return new MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesPrometheusForwarder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
  /**
  * label_include_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#label_include_filter MonitorDataCollectionRule#label_include_filter}
  */
  readonly labelIncludeFilter?: MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter[] | cdktf.IResolvable;
}

export function monitorDataCollectionRuleDataSourcesPrometheusForwarderToTerraform(struct?: MonitorDataCollectionRuleDataSourcesPrometheusForwarder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
    label_include_filter: cdktf.listMapper(monitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterToTerraform, true)(struct!.labelIncludeFilter),
  }
}


export function monitorDataCollectionRuleDataSourcesPrometheusForwarderToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesPrometheusForwarder | cdktf.IResolvable): any {
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
    streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label_include_filter: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterToHclTerraform, true)(struct!.labelIncludeFilter),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesPrometheusForwarder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    if (this._labelIncludeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelIncludeFilter = this._labelIncludeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesPrometheusForwarder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._streams = undefined;
      this._labelIncludeFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._streams = value.streams;
      this._labelIncludeFilter.internalValue = value.labelIncludeFilter;
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

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }

  // label_include_filter - computed: false, optional: true, required: false
  private _labelIncludeFilter = new MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList(this, "label_include_filter", true);
  public get labelIncludeFilter() {
    return this._labelIncludeFilter;
  }
  public putLabelIncludeFilter(value: MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter[] | cdktf.IResolvable) {
    this._labelIncludeFilter.internalValue = value;
  }
  public resetLabelIncludeFilter() {
    this._labelIncludeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelIncludeFilterInput() {
    return this._labelIncludeFilter.internalValue;
  }
}

export class MonitorDataCollectionRuleDataSourcesPrometheusForwarderList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesPrometheusForwarder[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference {
    return new MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesSyslog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#facility_names MonitorDataCollectionRule#facility_names}
  */
  readonly facilityNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#log_levels MonitorDataCollectionRule#log_levels}
  */
  readonly logLevels: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
}

export function monitorDataCollectionRuleDataSourcesSyslogToTerraform(struct?: MonitorDataCollectionRuleDataSourcesSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facility_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.facilityNames),
    log_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logLevels),
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
  }
}


export function monitorDataCollectionRuleDataSourcesSyslogToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    facility_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.facilityNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesSyslogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facilityNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.facilityNames = this._facilityNames;
    }
    if (this._logLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevels = this._logLevels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facilityNames = undefined;
      this._logLevels = undefined;
      this._name = undefined;
      this._streams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facilityNames = value.facilityNames;
      this._logLevels = value.logLevels;
      this._name = value.name;
      this._streams = value.streams;
    }
  }

  // facility_names - computed: false, optional: false, required: true
  private _facilityNames?: string[]; 
  public get facilityNames() {
    return this.getListAttribute('facility_names');
  }
  public set facilityNames(value: string[]) {
    this._facilityNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityNamesInput() {
    return this._facilityNames;
  }

  // log_levels - computed: false, optional: false, required: true
  private _logLevels?: string[]; 
  public get logLevels() {
    return this.getListAttribute('log_levels');
  }
  public set logLevels(value: string[]) {
    this._logLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelsInput() {
    return this._logLevels;
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

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }
}

export class MonitorDataCollectionRuleDataSourcesSyslogList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesSyslog[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesSyslogOutputReference {
    return new MonitorDataCollectionRuleDataSourcesSyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesWindowsEventLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#x_path_queries MonitorDataCollectionRule#x_path_queries}
  */
  readonly xPathQueries: string[];
}

export function monitorDataCollectionRuleDataSourcesWindowsEventLogToTerraform(struct?: MonitorDataCollectionRuleDataSourcesWindowsEventLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
    x_path_queries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xPathQueries),
  }
}


export function monitorDataCollectionRuleDataSourcesWindowsEventLogToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesWindowsEventLog | cdktf.IResolvable): any {
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
    streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    x_path_queries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xPathQueries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesWindowsEventLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    if (this._xPathQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPathQueries = this._xPathQueries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesWindowsEventLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._streams = undefined;
      this._xPathQueries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._streams = value.streams;
      this._xPathQueries = value.xPathQueries;
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

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }

  // x_path_queries - computed: false, optional: false, required: true
  private _xPathQueries?: string[]; 
  public get xPathQueries() {
    return this.getListAttribute('x_path_queries');
  }
  public set xPathQueries(value: string[]) {
    this._xPathQueries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xPathQueriesInput() {
    return this._xPathQueries;
  }
}

export class MonitorDataCollectionRuleDataSourcesWindowsEventLogList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesWindowsEventLog[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference {
    return new MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesWindowsFirewallLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
}

export function monitorDataCollectionRuleDataSourcesWindowsFirewallLogToTerraform(struct?: MonitorDataCollectionRuleDataSourcesWindowsFirewallLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
  }
}


export function monitorDataCollectionRuleDataSourcesWindowsFirewallLogToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesWindowsFirewallLog | cdktf.IResolvable): any {
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
    streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesWindowsFirewallLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesWindowsFirewallLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._streams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._streams = value.streams;
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

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }
}

export class MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesWindowsFirewallLog[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference {
    return new MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSources {
  /**
  * data_import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#data_import MonitorDataCollectionRule#data_import}
  */
  readonly dataImport?: MonitorDataCollectionRuleDataSourcesDataImport;
  /**
  * extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#extension MonitorDataCollectionRule#extension}
  */
  readonly extension?: MonitorDataCollectionRuleDataSourcesExtension[] | cdktf.IResolvable;
  /**
  * iis_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#iis_log MonitorDataCollectionRule#iis_log}
  */
  readonly iisLog?: MonitorDataCollectionRuleDataSourcesIisLog[] | cdktf.IResolvable;
  /**
  * log_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#log_file MonitorDataCollectionRule#log_file}
  */
  readonly logFile?: MonitorDataCollectionRuleDataSourcesLogFile[] | cdktf.IResolvable;
  /**
  * performance_counter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#performance_counter MonitorDataCollectionRule#performance_counter}
  */
  readonly performanceCounter?: MonitorDataCollectionRuleDataSourcesPerformanceCounter[] | cdktf.IResolvable;
  /**
  * platform_telemetry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#platform_telemetry MonitorDataCollectionRule#platform_telemetry}
  */
  readonly platformTelemetry?: MonitorDataCollectionRuleDataSourcesPlatformTelemetry[] | cdktf.IResolvable;
  /**
  * prometheus_forwarder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#prometheus_forwarder MonitorDataCollectionRule#prometheus_forwarder}
  */
  readonly prometheusForwarder?: MonitorDataCollectionRuleDataSourcesPrometheusForwarder[] | cdktf.IResolvable;
  /**
  * syslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#syslog MonitorDataCollectionRule#syslog}
  */
  readonly syslog?: MonitorDataCollectionRuleDataSourcesSyslog[] | cdktf.IResolvable;
  /**
  * windows_event_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#windows_event_log MonitorDataCollectionRule#windows_event_log}
  */
  readonly windowsEventLog?: MonitorDataCollectionRuleDataSourcesWindowsEventLog[] | cdktf.IResolvable;
  /**
  * windows_firewall_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#windows_firewall_log MonitorDataCollectionRule#windows_firewall_log}
  */
  readonly windowsFirewallLog?: MonitorDataCollectionRuleDataSourcesWindowsFirewallLog[] | cdktf.IResolvable;
}

export function monitorDataCollectionRuleDataSourcesToTerraform(struct?: MonitorDataCollectionRuleDataSourcesOutputReference | MonitorDataCollectionRuleDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_import: monitorDataCollectionRuleDataSourcesDataImportToTerraform(struct!.dataImport),
    extension: cdktf.listMapper(monitorDataCollectionRuleDataSourcesExtensionToTerraform, true)(struct!.extension),
    iis_log: cdktf.listMapper(monitorDataCollectionRuleDataSourcesIisLogToTerraform, true)(struct!.iisLog),
    log_file: cdktf.listMapper(monitorDataCollectionRuleDataSourcesLogFileToTerraform, true)(struct!.logFile),
    performance_counter: cdktf.listMapper(monitorDataCollectionRuleDataSourcesPerformanceCounterToTerraform, true)(struct!.performanceCounter),
    platform_telemetry: cdktf.listMapper(monitorDataCollectionRuleDataSourcesPlatformTelemetryToTerraform, true)(struct!.platformTelemetry),
    prometheus_forwarder: cdktf.listMapper(monitorDataCollectionRuleDataSourcesPrometheusForwarderToTerraform, true)(struct!.prometheusForwarder),
    syslog: cdktf.listMapper(monitorDataCollectionRuleDataSourcesSyslogToTerraform, true)(struct!.syslog),
    windows_event_log: cdktf.listMapper(monitorDataCollectionRuleDataSourcesWindowsEventLogToTerraform, true)(struct!.windowsEventLog),
    windows_firewall_log: cdktf.listMapper(monitorDataCollectionRuleDataSourcesWindowsFirewallLogToTerraform, true)(struct!.windowsFirewallLog),
  }
}


export function monitorDataCollectionRuleDataSourcesToHclTerraform(struct?: MonitorDataCollectionRuleDataSourcesOutputReference | MonitorDataCollectionRuleDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_import: {
      value: monitorDataCollectionRuleDataSourcesDataImportToHclTerraform(struct!.dataImport),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesDataImportList",
    },
    extension: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesExtensionToHclTerraform, true)(struct!.extension),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesExtensionList",
    },
    iis_log: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesIisLogToHclTerraform, true)(struct!.iisLog),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesIisLogList",
    },
    log_file: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesLogFileToHclTerraform, true)(struct!.logFile),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesLogFileList",
    },
    performance_counter: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesPerformanceCounterToHclTerraform, true)(struct!.performanceCounter),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesPerformanceCounterList",
    },
    platform_telemetry: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesPlatformTelemetryToHclTerraform, true)(struct!.platformTelemetry),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesPlatformTelemetryList",
    },
    prometheus_forwarder: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesPrometheusForwarderToHclTerraform, true)(struct!.prometheusForwarder),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesPrometheusForwarderList",
    },
    syslog: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesSyslogToHclTerraform, true)(struct!.syslog),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesSyslogList",
    },
    windows_event_log: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesWindowsEventLogToHclTerraform, true)(struct!.windowsEventLog),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesWindowsEventLogList",
    },
    windows_firewall_log: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDataSourcesWindowsFirewallLogToHclTerraform, true)(struct!.windowsFirewallLog),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDataSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDataSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataImport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataImport = this._dataImport?.internalValue;
    }
    if (this._extension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension?.internalValue;
    }
    if (this._iisLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iisLog = this._iisLog?.internalValue;
    }
    if (this._logFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFile = this._logFile?.internalValue;
    }
    if (this._performanceCounter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceCounter = this._performanceCounter?.internalValue;
    }
    if (this._platformTelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformTelemetry = this._platformTelemetry?.internalValue;
    }
    if (this._prometheusForwarder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusForwarder = this._prometheusForwarder?.internalValue;
    }
    if (this._syslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog?.internalValue;
    }
    if (this._windowsEventLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsEventLog = this._windowsEventLog?.internalValue;
    }
    if (this._windowsFirewallLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsFirewallLog = this._windowsFirewallLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataImport.internalValue = undefined;
      this._extension.internalValue = undefined;
      this._iisLog.internalValue = undefined;
      this._logFile.internalValue = undefined;
      this._performanceCounter.internalValue = undefined;
      this._platformTelemetry.internalValue = undefined;
      this._prometheusForwarder.internalValue = undefined;
      this._syslog.internalValue = undefined;
      this._windowsEventLog.internalValue = undefined;
      this._windowsFirewallLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataImport.internalValue = value.dataImport;
      this._extension.internalValue = value.extension;
      this._iisLog.internalValue = value.iisLog;
      this._logFile.internalValue = value.logFile;
      this._performanceCounter.internalValue = value.performanceCounter;
      this._platformTelemetry.internalValue = value.platformTelemetry;
      this._prometheusForwarder.internalValue = value.prometheusForwarder;
      this._syslog.internalValue = value.syslog;
      this._windowsEventLog.internalValue = value.windowsEventLog;
      this._windowsFirewallLog.internalValue = value.windowsFirewallLog;
    }
  }

  // data_import - computed: false, optional: true, required: false
  private _dataImport = new MonitorDataCollectionRuleDataSourcesDataImportOutputReference(this, "data_import");
  public get dataImport() {
    return this._dataImport;
  }
  public putDataImport(value: MonitorDataCollectionRuleDataSourcesDataImport) {
    this._dataImport.internalValue = value;
  }
  public resetDataImport() {
    this._dataImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataImportInput() {
    return this._dataImport.internalValue;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new MonitorDataCollectionRuleDataSourcesExtensionList(this, "extension", false);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: MonitorDataCollectionRuleDataSourcesExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // iis_log - computed: false, optional: true, required: false
  private _iisLog = new MonitorDataCollectionRuleDataSourcesIisLogList(this, "iis_log", false);
  public get iisLog() {
    return this._iisLog;
  }
  public putIisLog(value: MonitorDataCollectionRuleDataSourcesIisLog[] | cdktf.IResolvable) {
    this._iisLog.internalValue = value;
  }
  public resetIisLog() {
    this._iisLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iisLogInput() {
    return this._iisLog.internalValue;
  }

  // log_file - computed: false, optional: true, required: false
  private _logFile = new MonitorDataCollectionRuleDataSourcesLogFileList(this, "log_file", false);
  public get logFile() {
    return this._logFile;
  }
  public putLogFile(value: MonitorDataCollectionRuleDataSourcesLogFile[] | cdktf.IResolvable) {
    this._logFile.internalValue = value;
  }
  public resetLogFile() {
    this._logFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileInput() {
    return this._logFile.internalValue;
  }

  // performance_counter - computed: false, optional: true, required: false
  private _performanceCounter = new MonitorDataCollectionRuleDataSourcesPerformanceCounterList(this, "performance_counter", false);
  public get performanceCounter() {
    return this._performanceCounter;
  }
  public putPerformanceCounter(value: MonitorDataCollectionRuleDataSourcesPerformanceCounter[] | cdktf.IResolvable) {
    this._performanceCounter.internalValue = value;
  }
  public resetPerformanceCounter() {
    this._performanceCounter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceCounterInput() {
    return this._performanceCounter.internalValue;
  }

  // platform_telemetry - computed: false, optional: true, required: false
  private _platformTelemetry = new MonitorDataCollectionRuleDataSourcesPlatformTelemetryList(this, "platform_telemetry", false);
  public get platformTelemetry() {
    return this._platformTelemetry;
  }
  public putPlatformTelemetry(value: MonitorDataCollectionRuleDataSourcesPlatformTelemetry[] | cdktf.IResolvable) {
    this._platformTelemetry.internalValue = value;
  }
  public resetPlatformTelemetry() {
    this._platformTelemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformTelemetryInput() {
    return this._platformTelemetry.internalValue;
  }

  // prometheus_forwarder - computed: false, optional: true, required: false
  private _prometheusForwarder = new MonitorDataCollectionRuleDataSourcesPrometheusForwarderList(this, "prometheus_forwarder", false);
  public get prometheusForwarder() {
    return this._prometheusForwarder;
  }
  public putPrometheusForwarder(value: MonitorDataCollectionRuleDataSourcesPrometheusForwarder[] | cdktf.IResolvable) {
    this._prometheusForwarder.internalValue = value;
  }
  public resetPrometheusForwarder() {
    this._prometheusForwarder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusForwarderInput() {
    return this._prometheusForwarder.internalValue;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog = new MonitorDataCollectionRuleDataSourcesSyslogList(this, "syslog", false);
  public get syslog() {
    return this._syslog;
  }
  public putSyslog(value: MonitorDataCollectionRuleDataSourcesSyslog[] | cdktf.IResolvable) {
    this._syslog.internalValue = value;
  }
  public resetSyslog() {
    this._syslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog.internalValue;
  }

  // windows_event_log - computed: false, optional: true, required: false
  private _windowsEventLog = new MonitorDataCollectionRuleDataSourcesWindowsEventLogList(this, "windows_event_log", false);
  public get windowsEventLog() {
    return this._windowsEventLog;
  }
  public putWindowsEventLog(value: MonitorDataCollectionRuleDataSourcesWindowsEventLog[] | cdktf.IResolvable) {
    this._windowsEventLog.internalValue = value;
  }
  public resetWindowsEventLog() {
    this._windowsEventLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsEventLogInput() {
    return this._windowsEventLog.internalValue;
  }

  // windows_firewall_log - computed: false, optional: true, required: false
  private _windowsFirewallLog = new MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList(this, "windows_firewall_log", false);
  public get windowsFirewallLog() {
    return this._windowsFirewallLog;
  }
  public putWindowsFirewallLog(value: MonitorDataCollectionRuleDataSourcesWindowsFirewallLog[] | cdktf.IResolvable) {
    this._windowsFirewallLog.internalValue = value;
  }
  public resetWindowsFirewallLog() {
    this._windowsFirewallLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsFirewallLogInput() {
    return this._windowsFirewallLog.internalValue;
  }
}
export interface MonitorDataCollectionRuleDestinationsAzureMonitorMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
}

export function monitorDataCollectionRuleDestinationsAzureMonitorMetricsToTerraform(struct?: MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference | MonitorDataCollectionRuleDestinationsAzureMonitorMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function monitorDataCollectionRuleDestinationsAzureMonitorMetricsToHclTerraform(struct?: MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference | MonitorDataCollectionRuleDestinationsAzureMonitorMetrics): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDestinationsAzureMonitorMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinationsAzureMonitorMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface MonitorDataCollectionRuleDestinationsEventHub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#event_hub_id MonitorDataCollectionRule#event_hub_id}
  */
  readonly eventHubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
}

export function monitorDataCollectionRuleDestinationsEventHubToTerraform(struct?: MonitorDataCollectionRuleDestinationsEventHubOutputReference | MonitorDataCollectionRuleDestinationsEventHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_hub_id: cdktf.stringToTerraform(struct!.eventHubId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function monitorDataCollectionRuleDestinationsEventHubToHclTerraform(struct?: MonitorDataCollectionRuleDestinationsEventHubOutputReference | MonitorDataCollectionRuleDestinationsEventHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_hub_id: {
      value: cdktf.stringToHclTerraform(struct!.eventHubId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDestinationsEventHubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDestinationsEventHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventHubId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventHubId = this._eventHubId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinationsEventHub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventHubId = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventHubId = value.eventHubId;
      this._name = value.name;
    }
  }

  // event_hub_id - computed: false, optional: false, required: true
  private _eventHubId?: string; 
  public get eventHubId() {
    return this.getStringAttribute('event_hub_id');
  }
  public set eventHubId(value: string) {
    this._eventHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubIdInput() {
    return this._eventHubId;
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
}
export interface MonitorDataCollectionRuleDestinationsEventHubDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#event_hub_id MonitorDataCollectionRule#event_hub_id}
  */
  readonly eventHubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
}

export function monitorDataCollectionRuleDestinationsEventHubDirectToTerraform(struct?: MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference | MonitorDataCollectionRuleDestinationsEventHubDirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_hub_id: cdktf.stringToTerraform(struct!.eventHubId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function monitorDataCollectionRuleDestinationsEventHubDirectToHclTerraform(struct?: MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference | MonitorDataCollectionRuleDestinationsEventHubDirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_hub_id: {
      value: cdktf.stringToHclTerraform(struct!.eventHubId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDestinationsEventHubDirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventHubId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventHubId = this._eventHubId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinationsEventHubDirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventHubId = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventHubId = value.eventHubId;
      this._name = value.name;
    }
  }

  // event_hub_id - computed: false, optional: false, required: true
  private _eventHubId?: string; 
  public get eventHubId() {
    return this.getStringAttribute('event_hub_id');
  }
  public set eventHubId(value: string) {
    this._eventHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubIdInput() {
    return this._eventHubId;
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
}
export interface MonitorDataCollectionRuleDestinationsLogAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#workspace_resource_id MonitorDataCollectionRule#workspace_resource_id}
  */
  readonly workspaceResourceId: string;
}

export function monitorDataCollectionRuleDestinationsLogAnalyticsToTerraform(struct?: MonitorDataCollectionRuleDestinationsLogAnalytics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    workspace_resource_id: cdktf.stringToTerraform(struct!.workspaceResourceId),
  }
}


export function monitorDataCollectionRuleDestinationsLogAnalyticsToHclTerraform(struct?: MonitorDataCollectionRuleDestinationsLogAnalytics | cdktf.IResolvable): any {
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
    workspace_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDestinationsLogAnalytics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._workspaceResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceResourceId = this._workspaceResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinationsLogAnalytics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._workspaceResourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._workspaceResourceId = value.workspaceResourceId;
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

  // workspace_resource_id - computed: false, optional: false, required: true
  private _workspaceResourceId?: string; 
  public get workspaceResourceId() {
    return this.getStringAttribute('workspace_resource_id');
  }
  public set workspaceResourceId(value: string) {
    this._workspaceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceResourceIdInput() {
    return this._workspaceResourceId;
  }
}

export class MonitorDataCollectionRuleDestinationsLogAnalyticsList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDestinationsLogAnalytics[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference {
    return new MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDestinationsMonitorAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#monitor_account_id MonitorDataCollectionRule#monitor_account_id}
  */
  readonly monitorAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
}

export function monitorDataCollectionRuleDestinationsMonitorAccountToTerraform(struct?: MonitorDataCollectionRuleDestinationsMonitorAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_account_id: cdktf.stringToTerraform(struct!.monitorAccountId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function monitorDataCollectionRuleDestinationsMonitorAccountToHclTerraform(struct?: MonitorDataCollectionRuleDestinationsMonitorAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_account_id: {
      value: cdktf.stringToHclTerraform(struct!.monitorAccountId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDestinationsMonitorAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorAccountId = this._monitorAccountId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinationsMonitorAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorAccountId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorAccountId = value.monitorAccountId;
      this._name = value.name;
    }
  }

  // monitor_account_id - computed: false, optional: false, required: true
  private _monitorAccountId?: string; 
  public get monitorAccountId() {
    return this.getStringAttribute('monitor_account_id');
  }
  public set monitorAccountId(value: string) {
    this._monitorAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAccountIdInput() {
    return this._monitorAccountId;
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
}

export class MonitorDataCollectionRuleDestinationsMonitorAccountList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDestinationsMonitorAccount[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference {
    return new MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDestinationsStorageBlob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#container_name MonitorDataCollectionRule#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}
  */
  readonly storageAccountId: string;
}

export function monitorDataCollectionRuleDestinationsStorageBlobToTerraform(struct?: MonitorDataCollectionRuleDestinationsStorageBlob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}


export function monitorDataCollectionRuleDestinationsStorageBlobToHclTerraform(struct?: MonitorDataCollectionRuleDestinationsStorageBlob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
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
    storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDestinationsStorageBlobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDestinationsStorageBlob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinationsStorageBlob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._name = undefined;
      this._storageAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._name = value.name;
      this._storageAccountId = value.storageAccountId;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }
}

export class MonitorDataCollectionRuleDestinationsStorageBlobList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDestinationsStorageBlob[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDestinationsStorageBlobOutputReference {
    return new MonitorDataCollectionRuleDestinationsStorageBlobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDestinationsStorageBlobDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#container_name MonitorDataCollectionRule#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}
  */
  readonly storageAccountId: string;
}

export function monitorDataCollectionRuleDestinationsStorageBlobDirectToTerraform(struct?: MonitorDataCollectionRuleDestinationsStorageBlobDirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}


export function monitorDataCollectionRuleDestinationsStorageBlobDirectToHclTerraform(struct?: MonitorDataCollectionRuleDestinationsStorageBlobDirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
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
    storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDestinationsStorageBlobDirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinationsStorageBlobDirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._name = undefined;
      this._storageAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._name = value.name;
      this._storageAccountId = value.storageAccountId;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }
}

export class MonitorDataCollectionRuleDestinationsStorageBlobDirectList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDestinationsStorageBlobDirect[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference {
    return new MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDestinationsStorageTableDirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#table_name MonitorDataCollectionRule#table_name}
  */
  readonly tableName: string;
}

export function monitorDataCollectionRuleDestinationsStorageTableDirectToTerraform(struct?: MonitorDataCollectionRuleDestinationsStorageTableDirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function monitorDataCollectionRuleDestinationsStorageTableDirectToHclTerraform(struct?: MonitorDataCollectionRuleDestinationsStorageTableDirect | cdktf.IResolvable): any {
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
    storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDestinationsStorageTableDirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinationsStorageTableDirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._storageAccountId = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._storageAccountId = value.storageAccountId;
      this._tableName = value.tableName;
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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class MonitorDataCollectionRuleDestinationsStorageTableDirectList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDestinationsStorageTableDirect[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference {
    return new MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDestinations {
  /**
  * azure_monitor_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#azure_monitor_metrics MonitorDataCollectionRule#azure_monitor_metrics}
  */
  readonly azureMonitorMetrics?: MonitorDataCollectionRuleDestinationsAzureMonitorMetrics;
  /**
  * event_hub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#event_hub MonitorDataCollectionRule#event_hub}
  */
  readonly eventHub?: MonitorDataCollectionRuleDestinationsEventHub;
  /**
  * event_hub_direct block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#event_hub_direct MonitorDataCollectionRule#event_hub_direct}
  */
  readonly eventHubDirect?: MonitorDataCollectionRuleDestinationsEventHubDirect;
  /**
  * log_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#log_analytics MonitorDataCollectionRule#log_analytics}
  */
  readonly logAnalytics?: MonitorDataCollectionRuleDestinationsLogAnalytics[] | cdktf.IResolvable;
  /**
  * monitor_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#monitor_account MonitorDataCollectionRule#monitor_account}
  */
  readonly monitorAccount?: MonitorDataCollectionRuleDestinationsMonitorAccount[] | cdktf.IResolvable;
  /**
  * storage_blob block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#storage_blob MonitorDataCollectionRule#storage_blob}
  */
  readonly storageBlob?: MonitorDataCollectionRuleDestinationsStorageBlob[] | cdktf.IResolvable;
  /**
  * storage_blob_direct block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#storage_blob_direct MonitorDataCollectionRule#storage_blob_direct}
  */
  readonly storageBlobDirect?: MonitorDataCollectionRuleDestinationsStorageBlobDirect[] | cdktf.IResolvable;
  /**
  * storage_table_direct block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#storage_table_direct MonitorDataCollectionRule#storage_table_direct}
  */
  readonly storageTableDirect?: MonitorDataCollectionRuleDestinationsStorageTableDirect[] | cdktf.IResolvable;
}

export function monitorDataCollectionRuleDestinationsToTerraform(struct?: MonitorDataCollectionRuleDestinationsOutputReference | MonitorDataCollectionRuleDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_monitor_metrics: monitorDataCollectionRuleDestinationsAzureMonitorMetricsToTerraform(struct!.azureMonitorMetrics),
    event_hub: monitorDataCollectionRuleDestinationsEventHubToTerraform(struct!.eventHub),
    event_hub_direct: monitorDataCollectionRuleDestinationsEventHubDirectToTerraform(struct!.eventHubDirect),
    log_analytics: cdktf.listMapper(monitorDataCollectionRuleDestinationsLogAnalyticsToTerraform, true)(struct!.logAnalytics),
    monitor_account: cdktf.listMapper(monitorDataCollectionRuleDestinationsMonitorAccountToTerraform, true)(struct!.monitorAccount),
    storage_blob: cdktf.listMapper(monitorDataCollectionRuleDestinationsStorageBlobToTerraform, true)(struct!.storageBlob),
    storage_blob_direct: cdktf.listMapper(monitorDataCollectionRuleDestinationsStorageBlobDirectToTerraform, true)(struct!.storageBlobDirect),
    storage_table_direct: cdktf.listMapper(monitorDataCollectionRuleDestinationsStorageTableDirectToTerraform, true)(struct!.storageTableDirect),
  }
}


export function monitorDataCollectionRuleDestinationsToHclTerraform(struct?: MonitorDataCollectionRuleDestinationsOutputReference | MonitorDataCollectionRuleDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_monitor_metrics: {
      value: monitorDataCollectionRuleDestinationsAzureMonitorMetricsToHclTerraform(struct!.azureMonitorMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDestinationsAzureMonitorMetricsList",
    },
    event_hub: {
      value: monitorDataCollectionRuleDestinationsEventHubToHclTerraform(struct!.eventHub),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDestinationsEventHubList",
    },
    event_hub_direct: {
      value: monitorDataCollectionRuleDestinationsEventHubDirectToHclTerraform(struct!.eventHubDirect),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDestinationsEventHubDirectList",
    },
    log_analytics: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDestinationsLogAnalyticsToHclTerraform, true)(struct!.logAnalytics),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDestinationsLogAnalyticsList",
    },
    monitor_account: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDestinationsMonitorAccountToHclTerraform, true)(struct!.monitorAccount),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDestinationsMonitorAccountList",
    },
    storage_blob: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDestinationsStorageBlobToHclTerraform, true)(struct!.storageBlob),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDestinationsStorageBlobList",
    },
    storage_blob_direct: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDestinationsStorageBlobDirectToHclTerraform, true)(struct!.storageBlobDirect),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDestinationsStorageBlobDirectList",
    },
    storage_table_direct: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleDestinationsStorageTableDirectToHclTerraform, true)(struct!.storageTableDirect),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleDestinationsStorageTableDirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureMonitorMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMonitorMetrics = this._azureMonitorMetrics?.internalValue;
    }
    if (this._eventHub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventHub = this._eventHub?.internalValue;
    }
    if (this._eventHubDirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventHubDirect = this._eventHubDirect?.internalValue;
    }
    if (this._logAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalytics = this._logAnalytics?.internalValue;
    }
    if (this._monitorAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorAccount = this._monitorAccount?.internalValue;
    }
    if (this._storageBlob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBlob = this._storageBlob?.internalValue;
    }
    if (this._storageBlobDirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBlobDirect = this._storageBlobDirect?.internalValue;
    }
    if (this._storageTableDirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTableDirect = this._storageTableDirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureMonitorMetrics.internalValue = undefined;
      this._eventHub.internalValue = undefined;
      this._eventHubDirect.internalValue = undefined;
      this._logAnalytics.internalValue = undefined;
      this._monitorAccount.internalValue = undefined;
      this._storageBlob.internalValue = undefined;
      this._storageBlobDirect.internalValue = undefined;
      this._storageTableDirect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureMonitorMetrics.internalValue = value.azureMonitorMetrics;
      this._eventHub.internalValue = value.eventHub;
      this._eventHubDirect.internalValue = value.eventHubDirect;
      this._logAnalytics.internalValue = value.logAnalytics;
      this._monitorAccount.internalValue = value.monitorAccount;
      this._storageBlob.internalValue = value.storageBlob;
      this._storageBlobDirect.internalValue = value.storageBlobDirect;
      this._storageTableDirect.internalValue = value.storageTableDirect;
    }
  }

  // azure_monitor_metrics - computed: false, optional: true, required: false
  private _azureMonitorMetrics = new MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference(this, "azure_monitor_metrics");
  public get azureMonitorMetrics() {
    return this._azureMonitorMetrics;
  }
  public putAzureMonitorMetrics(value: MonitorDataCollectionRuleDestinationsAzureMonitorMetrics) {
    this._azureMonitorMetrics.internalValue = value;
  }
  public resetAzureMonitorMetrics() {
    this._azureMonitorMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMonitorMetricsInput() {
    return this._azureMonitorMetrics.internalValue;
  }

  // event_hub - computed: false, optional: true, required: false
  private _eventHub = new MonitorDataCollectionRuleDestinationsEventHubOutputReference(this, "event_hub");
  public get eventHub() {
    return this._eventHub;
  }
  public putEventHub(value: MonitorDataCollectionRuleDestinationsEventHub) {
    this._eventHub.internalValue = value;
  }
  public resetEventHub() {
    this._eventHub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubInput() {
    return this._eventHub.internalValue;
  }

  // event_hub_direct - computed: false, optional: true, required: false
  private _eventHubDirect = new MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference(this, "event_hub_direct");
  public get eventHubDirect() {
    return this._eventHubDirect;
  }
  public putEventHubDirect(value: MonitorDataCollectionRuleDestinationsEventHubDirect) {
    this._eventHubDirect.internalValue = value;
  }
  public resetEventHubDirect() {
    this._eventHubDirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubDirectInput() {
    return this._eventHubDirect.internalValue;
  }

  // log_analytics - computed: false, optional: true, required: false
  private _logAnalytics = new MonitorDataCollectionRuleDestinationsLogAnalyticsList(this, "log_analytics", false);
  public get logAnalytics() {
    return this._logAnalytics;
  }
  public putLogAnalytics(value: MonitorDataCollectionRuleDestinationsLogAnalytics[] | cdktf.IResolvable) {
    this._logAnalytics.internalValue = value;
  }
  public resetLogAnalytics() {
    this._logAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInput() {
    return this._logAnalytics.internalValue;
  }

  // monitor_account - computed: false, optional: true, required: false
  private _monitorAccount = new MonitorDataCollectionRuleDestinationsMonitorAccountList(this, "monitor_account", false);
  public get monitorAccount() {
    return this._monitorAccount;
  }
  public putMonitorAccount(value: MonitorDataCollectionRuleDestinationsMonitorAccount[] | cdktf.IResolvable) {
    this._monitorAccount.internalValue = value;
  }
  public resetMonitorAccount() {
    this._monitorAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAccountInput() {
    return this._monitorAccount.internalValue;
  }

  // storage_blob - computed: false, optional: true, required: false
  private _storageBlob = new MonitorDataCollectionRuleDestinationsStorageBlobList(this, "storage_blob", false);
  public get storageBlob() {
    return this._storageBlob;
  }
  public putStorageBlob(value: MonitorDataCollectionRuleDestinationsStorageBlob[] | cdktf.IResolvable) {
    this._storageBlob.internalValue = value;
  }
  public resetStorageBlob() {
    this._storageBlob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlobInput() {
    return this._storageBlob.internalValue;
  }

  // storage_blob_direct - computed: false, optional: true, required: false
  private _storageBlobDirect = new MonitorDataCollectionRuleDestinationsStorageBlobDirectList(this, "storage_blob_direct", false);
  public get storageBlobDirect() {
    return this._storageBlobDirect;
  }
  public putStorageBlobDirect(value: MonitorDataCollectionRuleDestinationsStorageBlobDirect[] | cdktf.IResolvable) {
    this._storageBlobDirect.internalValue = value;
  }
  public resetStorageBlobDirect() {
    this._storageBlobDirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlobDirectInput() {
    return this._storageBlobDirect.internalValue;
  }

  // storage_table_direct - computed: false, optional: true, required: false
  private _storageTableDirect = new MonitorDataCollectionRuleDestinationsStorageTableDirectList(this, "storage_table_direct", false);
  public get storageTableDirect() {
    return this._storageTableDirect;
  }
  public putStorageTableDirect(value: MonitorDataCollectionRuleDestinationsStorageTableDirect[] | cdktf.IResolvable) {
    this._storageTableDirect.internalValue = value;
  }
  public resetStorageTableDirect() {
    this._storageTableDirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTableDirectInput() {
    return this._storageTableDirect.internalValue;
  }
}
export interface MonitorDataCollectionRuleIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#identity_ids MonitorDataCollectionRule#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#type MonitorDataCollectionRule#type}
  */
  readonly type: string;
}

export function monitorDataCollectionRuleIdentityToTerraform(struct?: MonitorDataCollectionRuleIdentityOutputReference | MonitorDataCollectionRuleIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorDataCollectionRuleIdentityToHclTerraform(struct?: MonitorDataCollectionRuleIdentityOutputReference | MonitorDataCollectionRuleIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MonitorDataCollectionRuleStreamDeclarationColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#type MonitorDataCollectionRule#type}
  */
  readonly type: string;
}

export function monitorDataCollectionRuleStreamDeclarationColumnToTerraform(struct?: MonitorDataCollectionRuleStreamDeclarationColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorDataCollectionRuleStreamDeclarationColumnToHclTerraform(struct?: MonitorDataCollectionRuleStreamDeclarationColumn | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleStreamDeclarationColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleStreamDeclarationColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleStreamDeclarationColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class MonitorDataCollectionRuleStreamDeclarationColumnList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleStreamDeclarationColumn[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleStreamDeclarationColumnOutputReference {
    return new MonitorDataCollectionRuleStreamDeclarationColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleStreamDeclaration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#stream_name MonitorDataCollectionRule#stream_name}
  */
  readonly streamName: string;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#column MonitorDataCollectionRule#column}
  */
  readonly column: MonitorDataCollectionRuleStreamDeclarationColumn[] | cdktf.IResolvable;
}

export function monitorDataCollectionRuleStreamDeclarationToTerraform(struct?: MonitorDataCollectionRuleStreamDeclaration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_name: cdktf.stringToTerraform(struct!.streamName),
    column: cdktf.listMapper(monitorDataCollectionRuleStreamDeclarationColumnToTerraform, true)(struct!.column),
  }
}


export function monitorDataCollectionRuleStreamDeclarationToHclTerraform(struct?: MonitorDataCollectionRuleStreamDeclaration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column: {
      value: cdktf.listMapperHcl(monitorDataCollectionRuleStreamDeclarationColumnToHclTerraform, true)(struct!.column),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorDataCollectionRuleStreamDeclarationColumnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDataCollectionRuleStreamDeclarationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleStreamDeclaration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleStreamDeclaration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streamName = undefined;
      this._column.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streamName = value.streamName;
      this._column.internalValue = value.column;
    }
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // column - computed: false, optional: false, required: true
  private _column = new MonitorDataCollectionRuleStreamDeclarationColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: MonitorDataCollectionRuleStreamDeclarationColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}

export class MonitorDataCollectionRuleStreamDeclarationList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleStreamDeclaration[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleStreamDeclarationOutputReference {
    return new MonitorDataCollectionRuleStreamDeclarationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#create MonitorDataCollectionRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#delete MonitorDataCollectionRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#read MonitorDataCollectionRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#update MonitorDataCollectionRule#update}
  */
  readonly update?: string;
}

export function monitorDataCollectionRuleTimeoutsToTerraform(struct?: MonitorDataCollectionRuleTimeouts | cdktf.IResolvable): any {
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


export function monitorDataCollectionRuleTimeoutsToHclTerraform(struct?: MonitorDataCollectionRuleTimeouts | cdktf.IResolvable): any {
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

export class MonitorDataCollectionRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorDataCollectionRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorDataCollectionRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule azurerm_monitor_data_collection_rule}
*/
export class MonitorDataCollectionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_data_collection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorDataCollectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorDataCollectionRule to import
  * @param importFromId The id of the existing MonitorDataCollectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorDataCollectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_monitor_data_collection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_data_collection_rule azurerm_monitor_data_collection_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorDataCollectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorDataCollectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_data_collection_rule',
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
    this._dataCollectionEndpointId = config.dataCollectionEndpointId;
    this._description = config.description;
    this._id = config.id;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._dataFlow.internalValue = config.dataFlow;
    this._dataSources.internalValue = config.dataSources;
    this._destinations.internalValue = config.destinations;
    this._identity.internalValue = config.identity;
    this._streamDeclaration.internalValue = config.streamDeclaration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_collection_endpoint_id - computed: false, optional: true, required: false
  private _dataCollectionEndpointId?: string; 
  public get dataCollectionEndpointId() {
    return this.getStringAttribute('data_collection_endpoint_id');
  }
  public set dataCollectionEndpointId(value: string) {
    this._dataCollectionEndpointId = value;
  }
  public resetDataCollectionEndpointId() {
    this._dataCollectionEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionEndpointIdInput() {
    return this._dataCollectionEndpointId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // immutable_id - computed: true, optional: false, required: false
  public get immutableId() {
    return this.getStringAttribute('immutable_id');
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // data_flow - computed: false, optional: false, required: true
  private _dataFlow = new MonitorDataCollectionRuleDataFlowList(this, "data_flow", false);
  public get dataFlow() {
    return this._dataFlow;
  }
  public putDataFlow(value: MonitorDataCollectionRuleDataFlow[] | cdktf.IResolvable) {
    this._dataFlow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFlowInput() {
    return this._dataFlow.internalValue;
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources = new MonitorDataCollectionRuleDataSourcesOutputReference(this, "data_sources");
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: MonitorDataCollectionRuleDataSources) {
    this._dataSources.internalValue = value;
  }
  public resetDataSources() {
    this._dataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources.internalValue;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new MonitorDataCollectionRuleDestinationsOutputReference(this, "destinations");
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: MonitorDataCollectionRuleDestinations) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new MonitorDataCollectionRuleIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: MonitorDataCollectionRuleIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // stream_declaration - computed: false, optional: true, required: false
  private _streamDeclaration = new MonitorDataCollectionRuleStreamDeclarationList(this, "stream_declaration", true);
  public get streamDeclaration() {
    return this._streamDeclaration;
  }
  public putStreamDeclaration(value: MonitorDataCollectionRuleStreamDeclaration[] | cdktf.IResolvable) {
    this._streamDeclaration.internalValue = value;
  }
  public resetStreamDeclaration() {
    this._streamDeclaration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamDeclarationInput() {
    return this._streamDeclaration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorDataCollectionRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorDataCollectionRuleTimeouts) {
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
      data_collection_endpoint_id: cdktf.stringToTerraform(this._dataCollectionEndpointId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      data_flow: cdktf.listMapper(monitorDataCollectionRuleDataFlowToTerraform, true)(this._dataFlow.internalValue),
      data_sources: monitorDataCollectionRuleDataSourcesToTerraform(this._dataSources.internalValue),
      destinations: monitorDataCollectionRuleDestinationsToTerraform(this._destinations.internalValue),
      identity: monitorDataCollectionRuleIdentityToTerraform(this._identity.internalValue),
      stream_declaration: cdktf.listMapper(monitorDataCollectionRuleStreamDeclarationToTerraform, true)(this._streamDeclaration.internalValue),
      timeouts: monitorDataCollectionRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_collection_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._dataCollectionEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
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
      data_flow: {
        value: cdktf.listMapperHcl(monitorDataCollectionRuleDataFlowToHclTerraform, true)(this._dataFlow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorDataCollectionRuleDataFlowList",
      },
      data_sources: {
        value: monitorDataCollectionRuleDataSourcesToHclTerraform(this._dataSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorDataCollectionRuleDataSourcesList",
      },
      destinations: {
        value: monitorDataCollectionRuleDestinationsToHclTerraform(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorDataCollectionRuleDestinationsList",
      },
      identity: {
        value: monitorDataCollectionRuleIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorDataCollectionRuleIdentityList",
      },
      stream_declaration: {
        value: cdktf.listMapperHcl(monitorDataCollectionRuleStreamDeclarationToHclTerraform, true)(this._streamDeclaration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorDataCollectionRuleStreamDeclarationList",
      },
      timeouts: {
        value: monitorDataCollectionRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorDataCollectionRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
