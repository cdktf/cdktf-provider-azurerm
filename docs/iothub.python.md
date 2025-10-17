# `iothub` Submodule <a name="`iothub` Submodule" id="@cdktf/provider-azurerm.iothub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Iothub <a name="Iothub" id="@cdktf/provider-azurerm.iothub.Iothub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub azurerm_iothub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.Iothub(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  resource_group_name: str,
  sku: IothubSku,
  cloud_to_device: IothubCloudToDevice = None,
  endpoint: IResolvable | typing.List[IothubEndpoint] = None,
  enrichment: IResolvable | typing.List[IothubEnrichment] = None,
  event_hub_partition_count: typing.Union[int, float] = None,
  event_hub_retention_in_days: typing.Union[int, float] = None,
  fallback_route: IothubFallbackRoute = None,
  file_upload: IothubFileUpload = None,
  id: str = None,
  identity: IothubIdentity = None,
  local_authentication_enabled: bool | IResolvable = None,
  min_tls_version: str = None,
  network_rule_set: IResolvable | typing.List[IothubNetworkRuleSet] = None,
  public_network_access_enabled: bool | IResolvable = None,
  route: IResolvable | typing.List[IothubRoute] = None,
  tags: typing.Mapping[str] = None,
  timeouts: IothubTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#location Iothub#location}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#resource_group_name Iothub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubSku">IothubSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.cloudToDevice">cloud_to_device</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice">IothubCloudToDevice</a></code> | cloud_to_device block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.endpoint">endpoint</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint Iothub#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.enrichment">enrichment</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#enrichment Iothub#enrichment}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.eventHubPartitionCount">event_hub_partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#event_hub_partition_count Iothub#event_hub_partition_count}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.eventHubRetentionInDays">event_hub_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#event_hub_retention_in_days Iothub#event_hub_retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.fallbackRoute">fallback_route</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute">IothubFallbackRoute</a></code> | fallback_route block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.fileUpload">file_upload</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload">IothubFileUpload</a></code> | file_upload block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#id Iothub#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentity">IothubIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#local_authentication_enabled Iothub#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.minTlsVersion">min_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#min_tls_version Iothub#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.networkRuleSet">network_rule_set</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a>]</code> | network_rule_set block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#public_network_access_enabled Iothub#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.route">route</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#route Iothub#route}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#tags Iothub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts">IothubTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#location Iothub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#resource_group_name Iothub#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.sku"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubSku">IothubSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#sku Iothub#sku}

---

##### `cloud_to_device`<sup>Optional</sup> <a name="cloud_to_device" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.cloudToDevice"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice">IothubCloudToDevice</a>

cloud_to_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#cloud_to_device Iothub#cloud_to_device}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.endpoint"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint Iothub#endpoint}.

---

##### `enrichment`<sup>Optional</sup> <a name="enrichment" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.enrichment"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#enrichment Iothub#enrichment}.

---

##### `event_hub_partition_count`<sup>Optional</sup> <a name="event_hub_partition_count" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.eventHubPartitionCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#event_hub_partition_count Iothub#event_hub_partition_count}.

---

##### `event_hub_retention_in_days`<sup>Optional</sup> <a name="event_hub_retention_in_days" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.eventHubRetentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#event_hub_retention_in_days Iothub#event_hub_retention_in_days}.

---

##### `fallback_route`<sup>Optional</sup> <a name="fallback_route" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.fallbackRoute"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute">IothubFallbackRoute</a>

fallback_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#fallback_route Iothub#fallback_route}

---

##### `file_upload`<sup>Optional</sup> <a name="file_upload" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.fileUpload"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload">IothubFileUpload</a>

file_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#file_upload Iothub#file_upload}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#id Iothub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubIdentity">IothubIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#identity Iothub#identity}

---

##### `local_authentication_enabled`<sup>Optional</sup> <a name="local_authentication_enabled" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.localAuthenticationEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#local_authentication_enabled Iothub#local_authentication_enabled}.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.minTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#min_tls_version Iothub#min_tls_version}.

---

##### `network_rule_set`<sup>Optional</sup> <a name="network_rule_set" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.networkRuleSet"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a>]

network_rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#network_rule_set Iothub#network_rule_set}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#public_network_access_enabled Iothub#public_network_access_enabled}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.route"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#route Iothub#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#tags Iothub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothub.Iothub.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts">IothubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#timeouts Iothub#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.putCloudToDevice">put_cloud_to_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.putEndpoint">put_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.putEnrichment">put_enrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.putFallbackRoute">put_fallback_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.putFileUpload">put_file_upload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.putNetworkRuleSet">put_network_rule_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.putRoute">put_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.putSku">put_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetCloudToDevice">reset_cloud_to_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetEnrichment">reset_enrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetEventHubPartitionCount">reset_event_hub_partition_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetEventHubRetentionInDays">reset_event_hub_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetFallbackRoute">reset_fallback_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetFileUpload">reset_file_upload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetLocalAuthenticationEnabled">reset_local_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetMinTlsVersion">reset_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetNetworkRuleSet">reset_network_rule_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetRoute">reset_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.Iothub.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iothub.Iothub.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothub.Iothub.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothub.Iothub.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iothub.Iothub.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iothub.Iothub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iothub.Iothub.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.iothub.Iothub.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iothub.Iothub.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iothub.Iothub.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.iothub.Iothub.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iothub.Iothub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.iothub.Iothub.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.iothub.Iothub.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothub.Iothub.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothub.Iothub.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.Iothub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.iothub.Iothub.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothub.Iothub.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.iothub.Iothub.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iothub.Iothub.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothub.Iothub.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.iothub.Iothub.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothub.Iothub.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_to_device` <a name="put_cloud_to_device" id="@cdktf/provider-azurerm.iothub.Iothub.putCloudToDevice"></a>

```python
def put_cloud_to_device(
  default_ttl: str = None,
  feedback: IResolvable | typing.List[IothubCloudToDeviceFeedback] = None,
  max_delivery_count: typing.Union[int, float] = None
) -> None
```

###### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-azurerm.iothub.Iothub.putCloudToDevice.parameter.defaultTtl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#default_ttl Iothub#default_ttl}.

---

###### `feedback`<sup>Optional</sup> <a name="feedback" id="@cdktf/provider-azurerm.iothub.Iothub.putCloudToDevice.parameter.feedback"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback">IothubCloudToDeviceFeedback</a>]

feedback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#feedback Iothub#feedback}

---

###### `max_delivery_count`<sup>Optional</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothub.Iothub.putCloudToDevice.parameter.maxDeliveryCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}.

---

##### `put_endpoint` <a name="put_endpoint" id="@cdktf/provider-azurerm.iothub.Iothub.putEndpoint"></a>

```python
def put_endpoint(
  value: IResolvable | typing.List[IothubEndpoint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothub.Iothub.putEndpoint.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a>]

---

##### `put_enrichment` <a name="put_enrichment" id="@cdktf/provider-azurerm.iothub.Iothub.putEnrichment"></a>

```python
def put_enrichment(
  value: IResolvable | typing.List[IothubEnrichment]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothub.Iothub.putEnrichment.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a>]

---

##### `put_fallback_route` <a name="put_fallback_route" id="@cdktf/provider-azurerm.iothub.Iothub.putFallbackRoute"></a>

```python
def put_fallback_route(
  condition: str = None,
  enabled: bool | IResolvable = None,
  endpoint_names: typing.List[str] = None,
  source: str = None
) -> None
```

###### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.iothub.Iothub.putFallbackRoute.parameter.condition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#condition Iothub#condition}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothub.Iothub.putFallbackRoute.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#enabled Iothub#enabled}.

---

###### `endpoint_names`<sup>Optional</sup> <a name="endpoint_names" id="@cdktf/provider-azurerm.iothub.Iothub.putFallbackRoute.parameter.endpointNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint_names Iothub#endpoint_names}.

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.iothub.Iothub.putFallbackRoute.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#source Iothub#source}.

---

##### `put_file_upload` <a name="put_file_upload" id="@cdktf/provider-azurerm.iothub.Iothub.putFileUpload"></a>

```python
def put_file_upload(
  connection_string: str,
  container_name: str,
  authentication_type: str = None,
  default_ttl: str = None,
  identity_id: str = None,
  lock_duration: str = None,
  max_delivery_count: typing.Union[int, float] = None,
  notifications: bool | IResolvable = None,
  sas_ttl: str = None
) -> None
```

###### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothub.Iothub.putFileUpload.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#connection_string Iothub#connection_string}.

---

###### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothub.Iothub.putFileUpload.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#container_name Iothub#container_name}.

---

###### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothub.Iothub.putFileUpload.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#authentication_type Iothub#authentication_type}.

---

###### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-azurerm.iothub.Iothub.putFileUpload.parameter.defaultTtl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#default_ttl Iothub#default_ttl}.

---

###### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothub.Iothub.putFileUpload.parameter.identityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#identity_id Iothub#identity_id}.

---

###### `lock_duration`<sup>Optional</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.iothub.Iothub.putFileUpload.parameter.lockDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#lock_duration Iothub#lock_duration}.

---

###### `max_delivery_count`<sup>Optional</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothub.Iothub.putFileUpload.parameter.maxDeliveryCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}.

---

###### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-azurerm.iothub.Iothub.putFileUpload.parameter.notifications"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#notifications Iothub#notifications}.

---

###### `sas_ttl`<sup>Optional</sup> <a name="sas_ttl" id="@cdktf/provider-azurerm.iothub.Iothub.putFileUpload.parameter.sasTtl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#sas_ttl Iothub#sas_ttl}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.iothub.Iothub.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iothub.Iothub.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#type Iothub#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.iothub.Iothub.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#identity_ids Iothub#identity_ids}.

---

##### `put_network_rule_set` <a name="put_network_rule_set" id="@cdktf/provider-azurerm.iothub.Iothub.putNetworkRuleSet"></a>

```python
def put_network_rule_set(
  value: IResolvable | typing.List[IothubNetworkRuleSet]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothub.Iothub.putNetworkRuleSet.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a>]

---

##### `put_route` <a name="put_route" id="@cdktf/provider-azurerm.iothub.Iothub.putRoute"></a>

```python
def put_route(
  value: IResolvable | typing.List[IothubRoute]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothub.Iothub.putRoute.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a>]

---

##### `put_sku` <a name="put_sku" id="@cdktf/provider-azurerm.iothub.Iothub.putSku"></a>

```python
def put_sku(
  capacity: typing.Union[int, float],
  name: str
) -> None
```

###### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.iothub.Iothub.putSku.parameter.capacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#capacity Iothub#capacity}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.Iothub.putSku.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iothub.Iothub.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothub.Iothub.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#create Iothub#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothub.Iothub.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#delete Iothub#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothub.Iothub.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#read Iothub#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothub.Iothub.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#update Iothub#update}.

---

##### `reset_cloud_to_device` <a name="reset_cloud_to_device" id="@cdktf/provider-azurerm.iothub.Iothub.resetCloudToDevice"></a>

```python
def reset_cloud_to_device() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-azurerm.iothub.Iothub.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_enrichment` <a name="reset_enrichment" id="@cdktf/provider-azurerm.iothub.Iothub.resetEnrichment"></a>

```python
def reset_enrichment() -> None
```

##### `reset_event_hub_partition_count` <a name="reset_event_hub_partition_count" id="@cdktf/provider-azurerm.iothub.Iothub.resetEventHubPartitionCount"></a>

```python
def reset_event_hub_partition_count() -> None
```

##### `reset_event_hub_retention_in_days` <a name="reset_event_hub_retention_in_days" id="@cdktf/provider-azurerm.iothub.Iothub.resetEventHubRetentionInDays"></a>

```python
def reset_event_hub_retention_in_days() -> None
```

##### `reset_fallback_route` <a name="reset_fallback_route" id="@cdktf/provider-azurerm.iothub.Iothub.resetFallbackRoute"></a>

```python
def reset_fallback_route() -> None
```

##### `reset_file_upload` <a name="reset_file_upload" id="@cdktf/provider-azurerm.iothub.Iothub.resetFileUpload"></a>

```python
def reset_file_upload() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iothub.Iothub.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.iothub.Iothub.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_local_authentication_enabled` <a name="reset_local_authentication_enabled" id="@cdktf/provider-azurerm.iothub.Iothub.resetLocalAuthenticationEnabled"></a>

```python
def reset_local_authentication_enabled() -> None
```

##### `reset_min_tls_version` <a name="reset_min_tls_version" id="@cdktf/provider-azurerm.iothub.Iothub.resetMinTlsVersion"></a>

```python
def reset_min_tls_version() -> None
```

##### `reset_network_rule_set` <a name="reset_network_rule_set" id="@cdktf/provider-azurerm.iothub.Iothub.resetNetworkRuleSet"></a>

```python
def reset_network_rule_set() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.iothub.Iothub.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_route` <a name="reset_route" id="@cdktf/provider-azurerm.iothub.Iothub.resetRoute"></a>

```python
def reset_route() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.iothub.Iothub.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iothub.Iothub.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Iothub resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iothub.Iothub.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.Iothub.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothub.Iothub.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iothub.Iothub.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.Iothub.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothub.Iothub.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iothub.Iothub.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.Iothub.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothub.Iothub.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.iothub.Iothub.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.Iothub.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Iothub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothub.Iothub.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.iothub.Iothub.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Iothub to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.iothub.Iothub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Iothub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothub.Iothub.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Iothub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.cloudToDevice">cloud_to_device</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference">IothubCloudToDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList">IothubEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.enrichment">enrichment</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList">IothubEnrichmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.eventHubEventsEndpoint">event_hub_events_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.eventHubEventsNamespace">event_hub_events_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.eventHubEventsPath">event_hub_events_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.eventHubOperationsEndpoint">event_hub_operations_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.eventHubOperationsPath">event_hub_operations_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.fallbackRoute">fallback_route</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference">IothubFallbackRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.fileUpload">file_upload</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference">IothubFileUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference">IothubIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.networkRuleSet">network_rule_set</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList">IothubNetworkRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList">IothubRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.sharedAccessPolicy">shared_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList">IothubSharedAccessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference">IothubSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference">IothubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.cloudToDeviceInput">cloud_to_device_input</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice">IothubCloudToDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.endpointInput">endpoint_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.enrichmentInput">enrichment_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.eventHubPartitionCountInput">event_hub_partition_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.eventHubRetentionInDaysInput">event_hub_retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.fallbackRouteInput">fallback_route_input</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute">IothubFallbackRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.fileUploadInput">file_upload_input</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload">IothubFileUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentity">IothubIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.localAuthenticationEnabledInput">local_authentication_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.minTlsVersionInput">min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.networkRuleSetInput">network_rule_set_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.routeInput">route_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.skuInput">sku_input</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubSku">IothubSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts">IothubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.eventHubPartitionCount">event_hub_partition_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.eventHubRetentionInDays">event_hub_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothub.Iothub.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iothub.Iothub.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.Iothub.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iothub.Iothub.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iothub.Iothub.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iothub.Iothub.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iothub.Iothub.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothub.Iothub.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothub.Iothub.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothub.Iothub.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothub.Iothub.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothub.Iothub.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothub.Iothub.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothub.Iothub.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cloud_to_device`<sup>Required</sup> <a name="cloud_to_device" id="@cdktf/provider-azurerm.iothub.Iothub.property.cloudToDevice"></a>

```python
cloud_to_device: IothubCloudToDeviceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference">IothubCloudToDeviceOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.iothub.Iothub.property.endpoint"></a>

```python
endpoint: IothubEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList">IothubEndpointList</a>

---

##### `enrichment`<sup>Required</sup> <a name="enrichment" id="@cdktf/provider-azurerm.iothub.Iothub.property.enrichment"></a>

```python
enrichment: IothubEnrichmentList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList">IothubEnrichmentList</a>

---

##### `event_hub_events_endpoint`<sup>Required</sup> <a name="event_hub_events_endpoint" id="@cdktf/provider-azurerm.iothub.Iothub.property.eventHubEventsEndpoint"></a>

```python
event_hub_events_endpoint: str
```

- *Type:* str

---

##### `event_hub_events_namespace`<sup>Required</sup> <a name="event_hub_events_namespace" id="@cdktf/provider-azurerm.iothub.Iothub.property.eventHubEventsNamespace"></a>

```python
event_hub_events_namespace: str
```

- *Type:* str

---

##### `event_hub_events_path`<sup>Required</sup> <a name="event_hub_events_path" id="@cdktf/provider-azurerm.iothub.Iothub.property.eventHubEventsPath"></a>

```python
event_hub_events_path: str
```

- *Type:* str

---

##### `event_hub_operations_endpoint`<sup>Required</sup> <a name="event_hub_operations_endpoint" id="@cdktf/provider-azurerm.iothub.Iothub.property.eventHubOperationsEndpoint"></a>

```python
event_hub_operations_endpoint: str
```

- *Type:* str

---

##### `event_hub_operations_path`<sup>Required</sup> <a name="event_hub_operations_path" id="@cdktf/provider-azurerm.iothub.Iothub.property.eventHubOperationsPath"></a>

```python
event_hub_operations_path: str
```

- *Type:* str

---

##### `fallback_route`<sup>Required</sup> <a name="fallback_route" id="@cdktf/provider-azurerm.iothub.Iothub.property.fallbackRoute"></a>

```python
fallback_route: IothubFallbackRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference">IothubFallbackRouteOutputReference</a>

---

##### `file_upload`<sup>Required</sup> <a name="file_upload" id="@cdktf/provider-azurerm.iothub.Iothub.property.fileUpload"></a>

```python
file_upload: IothubFileUploadOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference">IothubFileUploadOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.iothub.Iothub.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.iothub.Iothub.property.identity"></a>

```python
identity: IothubIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference">IothubIdentityOutputReference</a>

---

##### `network_rule_set`<sup>Required</sup> <a name="network_rule_set" id="@cdktf/provider-azurerm.iothub.Iothub.property.networkRuleSet"></a>

```python
network_rule_set: IothubNetworkRuleSetList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList">IothubNetworkRuleSetList</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurerm.iothub.Iothub.property.route"></a>

```python
route: IothubRouteList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubRouteList">IothubRouteList</a>

---

##### `shared_access_policy`<sup>Required</sup> <a name="shared_access_policy" id="@cdktf/provider-azurerm.iothub.Iothub.property.sharedAccessPolicy"></a>

```python
shared_access_policy: IothubSharedAccessPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList">IothubSharedAccessPolicyList</a>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.iothub.Iothub.property.sku"></a>

```python
sku: IothubSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference">IothubSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothub.Iothub.property.timeouts"></a>

```python
timeouts: IothubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference">IothubTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iothub.Iothub.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `cloud_to_device_input`<sup>Optional</sup> <a name="cloud_to_device_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.cloudToDeviceInput"></a>

```python
cloud_to_device_input: IothubCloudToDevice
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice">IothubCloudToDevice</a>

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.endpointInput"></a>

```python
endpoint_input: IResolvable | typing.List[IothubEndpoint]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a>]

---

##### `enrichment_input`<sup>Optional</sup> <a name="enrichment_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.enrichmentInput"></a>

```python
enrichment_input: IResolvable | typing.List[IothubEnrichment]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a>]

---

##### `event_hub_partition_count_input`<sup>Optional</sup> <a name="event_hub_partition_count_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.eventHubPartitionCountInput"></a>

```python
event_hub_partition_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `event_hub_retention_in_days_input`<sup>Optional</sup> <a name="event_hub_retention_in_days_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.eventHubRetentionInDaysInput"></a>

```python
event_hub_retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_route_input`<sup>Optional</sup> <a name="fallback_route_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.fallbackRouteInput"></a>

```python
fallback_route_input: IothubFallbackRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute">IothubFallbackRoute</a>

---

##### `file_upload_input`<sup>Optional</sup> <a name="file_upload_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.fileUploadInput"></a>

```python
file_upload_input: IothubFileUpload
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload">IothubFileUpload</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.identityInput"></a>

```python
identity_input: IothubIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubIdentity">IothubIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_authentication_enabled_input`<sup>Optional</sup> <a name="local_authentication_enabled_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.localAuthenticationEnabledInput"></a>

```python
local_authentication_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `min_tls_version_input`<sup>Optional</sup> <a name="min_tls_version_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.minTlsVersionInput"></a>

```python
min_tls_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_rule_set_input`<sup>Optional</sup> <a name="network_rule_set_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.networkRuleSetInput"></a>

```python
network_rule_set_input: IResolvable | typing.List[IothubNetworkRuleSet]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a>]

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `route_input`<sup>Optional</sup> <a name="route_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.routeInput"></a>

```python
route_input: IResolvable | typing.List[IothubRoute]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a>]

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.skuInput"></a>

```python
sku_input: IothubSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubSku">IothubSku</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iothub.Iothub.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IothubTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts">IothubTimeouts</a>

---

##### `event_hub_partition_count`<sup>Required</sup> <a name="event_hub_partition_count" id="@cdktf/provider-azurerm.iothub.Iothub.property.eventHubPartitionCount"></a>

```python
event_hub_partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `event_hub_retention_in_days`<sup>Required</sup> <a name="event_hub_retention_in_days" id="@cdktf/provider-azurerm.iothub.Iothub.property.eventHubRetentionInDays"></a>

```python
event_hub_retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothub.Iothub.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_authentication_enabled`<sup>Required</sup> <a name="local_authentication_enabled" id="@cdktf/provider-azurerm.iothub.Iothub.property.localAuthenticationEnabled"></a>

```python
local_authentication_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iothub.Iothub.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.iothub.Iothub.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.Iothub.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.iothub.Iothub.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothub.Iothub.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.iothub.Iothub.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.Iothub.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothub.Iothub.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IothubCloudToDevice <a name="IothubCloudToDevice" id="@cdktf/provider-azurerm.iothub.IothubCloudToDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubCloudToDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubCloudToDevice(
  default_ttl: str = None,
  feedback: IResolvable | typing.List[IothubCloudToDeviceFeedback] = None,
  max_delivery_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice.property.defaultTtl">default_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#default_ttl Iothub#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice.property.feedback">feedback</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback">IothubCloudToDeviceFeedback</a>]</code> | feedback block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}. |

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-azurerm.iothub.IothubCloudToDevice.property.defaultTtl"></a>

```python
default_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#default_ttl Iothub#default_ttl}.

---

##### `feedback`<sup>Optional</sup> <a name="feedback" id="@cdktf/provider-azurerm.iothub.IothubCloudToDevice.property.feedback"></a>

```python
feedback: IResolvable | typing.List[IothubCloudToDeviceFeedback]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback">IothubCloudToDeviceFeedback</a>]

feedback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#feedback Iothub#feedback}

---

##### `max_delivery_count`<sup>Optional</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothub.IothubCloudToDevice.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}.

---

### IothubCloudToDeviceFeedback <a name="IothubCloudToDeviceFeedback" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubCloudToDeviceFeedback(
  lock_duration: str = None,
  max_delivery_count: typing.Union[int, float] = None,
  time_to_live: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback.property.lockDuration">lock_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#lock_duration Iothub#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback.property.timeToLive">time_to_live</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#time_to_live Iothub#time_to_live}. |

---

##### `lock_duration`<sup>Optional</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback.property.lockDuration"></a>

```python
lock_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#lock_duration Iothub#lock_duration}.

---

##### `max_delivery_count`<sup>Optional</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}.

---

##### `time_to_live`<sup>Optional</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback.property.timeToLive"></a>

```python
time_to_live: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#time_to_live Iothub#time_to_live}.

---

### IothubConfig <a name="IothubConfig" id="@cdktf/provider-azurerm.iothub.IothubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  resource_group_name: str,
  sku: IothubSku,
  cloud_to_device: IothubCloudToDevice = None,
  endpoint: IResolvable | typing.List[IothubEndpoint] = None,
  enrichment: IResolvable | typing.List[IothubEnrichment] = None,
  event_hub_partition_count: typing.Union[int, float] = None,
  event_hub_retention_in_days: typing.Union[int, float] = None,
  fallback_route: IothubFallbackRoute = None,
  file_upload: IothubFileUpload = None,
  id: str = None,
  identity: IothubIdentity = None,
  local_authentication_enabled: bool | IResolvable = None,
  min_tls_version: str = None,
  network_rule_set: IResolvable | typing.List[IothubNetworkRuleSet] = None,
  public_network_access_enabled: bool | IResolvable = None,
  route: IResolvable | typing.List[IothubRoute] = None,
  tags: typing.Mapping[str] = None,
  timeouts: IothubTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#location Iothub#location}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#resource_group_name Iothub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubSku">IothubSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.cloudToDevice">cloud_to_device</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice">IothubCloudToDevice</a></code> | cloud_to_device block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.endpoint">endpoint</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint Iothub#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.enrichment">enrichment</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#enrichment Iothub#enrichment}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.eventHubPartitionCount">event_hub_partition_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#event_hub_partition_count Iothub#event_hub_partition_count}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.eventHubRetentionInDays">event_hub_retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#event_hub_retention_in_days Iothub#event_hub_retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.fallbackRoute">fallback_route</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute">IothubFallbackRoute</a></code> | fallback_route block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.fileUpload">file_upload</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload">IothubFileUpload</a></code> | file_upload block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#id Iothub#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentity">IothubIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#local_authentication_enabled Iothub#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#min_tls_version Iothub#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.networkRuleSet">network_rule_set</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a>]</code> | network_rule_set block. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#public_network_access_enabled Iothub#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.route">route</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#route Iothub#route}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#tags Iothub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts">IothubTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#location Iothub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#resource_group_name Iothub#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.sku"></a>

```python
sku: IothubSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubSku">IothubSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#sku Iothub#sku}

---

##### `cloud_to_device`<sup>Optional</sup> <a name="cloud_to_device" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.cloudToDevice"></a>

```python
cloud_to_device: IothubCloudToDevice
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice">IothubCloudToDevice</a>

cloud_to_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#cloud_to_device Iothub#cloud_to_device}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.endpoint"></a>

```python
endpoint: IResolvable | typing.List[IothubEndpoint]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint Iothub#endpoint}.

---

##### `enrichment`<sup>Optional</sup> <a name="enrichment" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.enrichment"></a>

```python
enrichment: IResolvable | typing.List[IothubEnrichment]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#enrichment Iothub#enrichment}.

---

##### `event_hub_partition_count`<sup>Optional</sup> <a name="event_hub_partition_count" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.eventHubPartitionCount"></a>

```python
event_hub_partition_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#event_hub_partition_count Iothub#event_hub_partition_count}.

---

##### `event_hub_retention_in_days`<sup>Optional</sup> <a name="event_hub_retention_in_days" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.eventHubRetentionInDays"></a>

```python
event_hub_retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#event_hub_retention_in_days Iothub#event_hub_retention_in_days}.

---

##### `fallback_route`<sup>Optional</sup> <a name="fallback_route" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.fallbackRoute"></a>

```python
fallback_route: IothubFallbackRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute">IothubFallbackRoute</a>

fallback_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#fallback_route Iothub#fallback_route}

---

##### `file_upload`<sup>Optional</sup> <a name="file_upload" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.fileUpload"></a>

```python
file_upload: IothubFileUpload
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload">IothubFileUpload</a>

file_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#file_upload Iothub#file_upload}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#id Iothub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.identity"></a>

```python
identity: IothubIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubIdentity">IothubIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#identity Iothub#identity}

---

##### `local_authentication_enabled`<sup>Optional</sup> <a name="local_authentication_enabled" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.localAuthenticationEnabled"></a>

```python
local_authentication_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#local_authentication_enabled Iothub#local_authentication_enabled}.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#min_tls_version Iothub#min_tls_version}.

---

##### `network_rule_set`<sup>Optional</sup> <a name="network_rule_set" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.networkRuleSet"></a>

```python
network_rule_set: IResolvable | typing.List[IothubNetworkRuleSet]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a>]

network_rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#network_rule_set Iothub#network_rule_set}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#public_network_access_enabled Iothub#public_network_access_enabled}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.route"></a>

```python
route: IResolvable | typing.List[IothubRoute]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#route Iothub#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#tags Iothub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothub.IothubConfig.property.timeouts"></a>

```python
timeouts: IothubTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts">IothubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#timeouts Iothub#timeouts}

---

### IothubEndpoint <a name="IothubEndpoint" id="@cdktf/provider-azurerm.iothub.IothubEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubEndpoint(
  authentication_type: str = None,
  batch_frequency_in_seconds: typing.Union[int, float] = None,
  connection_string: str = None,
  container_name: str = None,
  encoding: str = None,
  endpoint_uri: str = None,
  entity_path: str = None,
  file_name_format: str = None,
  identity_id: str = None,
  max_chunk_size_in_bytes: typing.Union[int, float] = None,
  name: str = None,
  resource_group_name: str = None,
  subscription_id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#authentication_type Iothub#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.batchFrequencyInSeconds">batch_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#batch_frequency_in_seconds Iothub#batch_frequency_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#connection_string Iothub#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#container_name Iothub#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#encoding Iothub#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint_uri Iothub#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.entityPath">entity_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#entity_path Iothub#entity_path}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.fileNameFormat">file_name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#file_name_format Iothub#file_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#identity_id Iothub#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.maxChunkSizeInBytes">max_chunk_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#max_chunk_size_in_bytes Iothub#max_chunk_size_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#resource_group_name Iothub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#subscription_id Iothub#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#type Iothub#type}. |

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#authentication_type Iothub#authentication_type}.

---

##### `batch_frequency_in_seconds`<sup>Optional</sup> <a name="batch_frequency_in_seconds" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.batchFrequencyInSeconds"></a>

```python
batch_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#batch_frequency_in_seconds Iothub#batch_frequency_in_seconds}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#connection_string Iothub#connection_string}.

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#container_name Iothub#container_name}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#encoding Iothub#encoding}.

---

##### `endpoint_uri`<sup>Optional</sup> <a name="endpoint_uri" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint_uri Iothub#endpoint_uri}.

---

##### `entity_path`<sup>Optional</sup> <a name="entity_path" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.entityPath"></a>

```python
entity_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#entity_path Iothub#entity_path}.

---

##### `file_name_format`<sup>Optional</sup> <a name="file_name_format" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.fileNameFormat"></a>

```python
file_name_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#file_name_format Iothub#file_name_format}.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#identity_id Iothub#identity_id}.

---

##### `max_chunk_size_in_bytes`<sup>Optional</sup> <a name="max_chunk_size_in_bytes" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.maxChunkSizeInBytes"></a>

```python
max_chunk_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#max_chunk_size_in_bytes Iothub#max_chunk_size_in_bytes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#resource_group_name Iothub#resource_group_name}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#subscription_id Iothub#subscription_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.iothub.IothubEndpoint.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#type Iothub#type}.

---

### IothubEnrichment <a name="IothubEnrichment" id="@cdktf/provider-azurerm.iothub.IothubEnrichment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubEnrichment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubEnrichment(
  endpoint_names: typing.List[str] = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment.property.endpointNames">endpoint_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint_names Iothub#endpoint_names}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#key Iothub#key}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#value Iothub#value}. |

---

##### `endpoint_names`<sup>Optional</sup> <a name="endpoint_names" id="@cdktf/provider-azurerm.iothub.IothubEnrichment.property.endpointNames"></a>

```python
endpoint_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint_names Iothub#endpoint_names}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.iothub.IothubEnrichment.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#key Iothub#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.iothub.IothubEnrichment.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#value Iothub#value}.

---

### IothubFallbackRoute <a name="IothubFallbackRoute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubFallbackRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubFallbackRoute(
  condition: str = None,
  enabled: bool | IResolvable = None,
  endpoint_names: typing.List[str] = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#condition Iothub#condition}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#enabled Iothub#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute.property.endpointNames">endpoint_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint_names Iothub#endpoint_names}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#source Iothub#source}. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.iothub.IothubFallbackRoute.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#condition Iothub#condition}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothub.IothubFallbackRoute.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#enabled Iothub#enabled}.

---

##### `endpoint_names`<sup>Optional</sup> <a name="endpoint_names" id="@cdktf/provider-azurerm.iothub.IothubFallbackRoute.property.endpointNames"></a>

```python
endpoint_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint_names Iothub#endpoint_names}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.iothub.IothubFallbackRoute.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#source Iothub#source}.

---

### IothubFileUpload <a name="IothubFileUpload" id="@cdktf/provider-azurerm.iothub.IothubFileUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubFileUpload.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubFileUpload(
  connection_string: str,
  container_name: str,
  authentication_type: str = None,
  default_ttl: str = None,
  identity_id: str = None,
  lock_duration: str = None,
  max_delivery_count: typing.Union[int, float] = None,
  notifications: bool | IResolvable = None,
  sas_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#connection_string Iothub#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#container_name Iothub#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#authentication_type Iothub#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload.property.defaultTtl">default_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#default_ttl Iothub#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload.property.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#identity_id Iothub#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload.property.lockDuration">lock_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#lock_duration Iothub#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload.property.notifications">notifications</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#notifications Iothub#notifications}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload.property.sasTtl">sas_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#sas_ttl Iothub#sas_ttl}. |

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothub.IothubFileUpload.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#connection_string Iothub#connection_string}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothub.IothubFileUpload.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#container_name Iothub#container_name}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothub.IothubFileUpload.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#authentication_type Iothub#authentication_type}.

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-azurerm.iothub.IothubFileUpload.property.defaultTtl"></a>

```python
default_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#default_ttl Iothub#default_ttl}.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothub.IothubFileUpload.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#identity_id Iothub#identity_id}.

---

##### `lock_duration`<sup>Optional</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.iothub.IothubFileUpload.property.lockDuration"></a>

```python
lock_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#lock_duration Iothub#lock_duration}.

---

##### `max_delivery_count`<sup>Optional</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothub.IothubFileUpload.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-azurerm.iothub.IothubFileUpload.property.notifications"></a>

```python
notifications: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#notifications Iothub#notifications}.

---

##### `sas_ttl`<sup>Optional</sup> <a name="sas_ttl" id="@cdktf/provider-azurerm.iothub.IothubFileUpload.property.sasTtl"></a>

```python
sas_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#sas_ttl Iothub#sas_ttl}.

---

### IothubIdentity <a name="IothubIdentity" id="@cdktf/provider-azurerm.iothub.IothubIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#type Iothub#type}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#identity_ids Iothub#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iothub.IothubIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#type Iothub#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.iothub.IothubIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#identity_ids Iothub#identity_ids}.

---

### IothubNetworkRuleSet <a name="IothubNetworkRuleSet" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubNetworkRuleSet(
  apply_to_builtin_eventhub_endpoint: bool | IResolvable = None,
  default_action: str = None,
  ip_rule: IResolvable | typing.List[IothubNetworkRuleSetIpRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet.property.applyToBuiltinEventhubEndpoint">apply_to_builtin_eventhub_endpoint</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#apply_to_builtin_eventhub_endpoint Iothub#apply_to_builtin_eventhub_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#default_action Iothub#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet.property.ipRule">ip_rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule">IothubNetworkRuleSetIpRule</a>]</code> | ip_rule block. |

---

##### `apply_to_builtin_eventhub_endpoint`<sup>Optional</sup> <a name="apply_to_builtin_eventhub_endpoint" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet.property.applyToBuiltinEventhubEndpoint"></a>

```python
apply_to_builtin_eventhub_endpoint: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#apply_to_builtin_eventhub_endpoint Iothub#apply_to_builtin_eventhub_endpoint}.

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#default_action Iothub#default_action}.

---

##### `ip_rule`<sup>Optional</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet.property.ipRule"></a>

```python
ip_rule: IResolvable | typing.List[IothubNetworkRuleSetIpRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule">IothubNetworkRuleSetIpRule</a>]

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#ip_rule Iothub#ip_rule}

---

### IothubNetworkRuleSetIpRule <a name="IothubNetworkRuleSetIpRule" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubNetworkRuleSetIpRule(
  ip_mask: str,
  name: str,
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule.property.ipMask">ip_mask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#ip_mask Iothub#ip_mask}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#action Iothub#action}. |

---

##### `ip_mask`<sup>Required</sup> <a name="ip_mask" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule.property.ipMask"></a>

```python
ip_mask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#ip_mask Iothub#ip_mask}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#action Iothub#action}.

---

### IothubRoute <a name="IothubRoute" id="@cdktf/provider-azurerm.iothub.IothubRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubRoute(
  condition: str = None,
  enabled: bool | IResolvable = None,
  endpoint_names: typing.List[str] = None,
  name: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRoute.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#condition Iothub#condition}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRoute.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#enabled Iothub#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRoute.property.endpointNames">endpoint_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint_names Iothub#endpoint_names}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRoute.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRoute.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#source Iothub#source}. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.iothub.IothubRoute.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#condition Iothub#condition}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothub.IothubRoute.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#enabled Iothub#enabled}.

---

##### `endpoint_names`<sup>Optional</sup> <a name="endpoint_names" id="@cdktf/provider-azurerm.iothub.IothubRoute.property.endpointNames"></a>

```python
endpoint_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#endpoint_names Iothub#endpoint_names}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.IothubRoute.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.iothub.IothubRoute.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#source Iothub#source}.

---

### IothubSharedAccessPolicy <a name="IothubSharedAccessPolicy" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubSharedAccessPolicy()
```


### IothubSku <a name="IothubSku" id="@cdktf/provider-azurerm.iothub.IothubSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubSku.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubSku(
  capacity: typing.Union[int, float],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSku.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#capacity Iothub#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSku.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.iothub.IothubSku.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#capacity Iothub#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.IothubSku.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#name Iothub#name}.

---

### IothubTimeouts <a name="IothubTimeouts" id="@cdktf/provider-azurerm.iothub.IothubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothub.IothubTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#create Iothub#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#delete Iothub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#read Iothub#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#update Iothub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothub.IothubTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#create Iothub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothub.IothubTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#delete Iothub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothub.IothubTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#read Iothub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothub.IothubTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/iothub#update Iothub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubCloudToDeviceFeedbackList <a name="IothubCloudToDeviceFeedbackList" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubCloudToDeviceFeedbackList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IothubCloudToDeviceFeedbackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback">IothubCloudToDeviceFeedback</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IothubCloudToDeviceFeedback]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback">IothubCloudToDeviceFeedback</a>]

---


### IothubCloudToDeviceFeedbackOutputReference <a name="IothubCloudToDeviceFeedbackOutputReference" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubCloudToDeviceFeedbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.resetLockDuration">reset_lock_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.resetMaxDeliveryCount">reset_max_delivery_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.resetTimeToLive">reset_time_to_live</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lock_duration` <a name="reset_lock_duration" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.resetLockDuration"></a>

```python
def reset_lock_duration() -> None
```

##### `reset_max_delivery_count` <a name="reset_max_delivery_count" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.resetMaxDeliveryCount"></a>

```python
def reset_max_delivery_count() -> None
```

##### `reset_time_to_live` <a name="reset_time_to_live" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.resetTimeToLive"></a>

```python
def reset_time_to_live() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.lockDurationInput">lock_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.maxDeliveryCountInput">max_delivery_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.timeToLiveInput">time_to_live_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.lockDuration">lock_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.timeToLive">time_to_live</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback">IothubCloudToDeviceFeedback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lock_duration_input`<sup>Optional</sup> <a name="lock_duration_input" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.lockDurationInput"></a>

```python
lock_duration_input: str
```

- *Type:* str

---

##### `max_delivery_count_input`<sup>Optional</sup> <a name="max_delivery_count_input" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.maxDeliveryCountInput"></a>

```python
max_delivery_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_to_live_input`<sup>Optional</sup> <a name="time_to_live_input" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.timeToLiveInput"></a>

```python
time_to_live_input: str
```

- *Type:* str

---

##### `lock_duration`<sup>Required</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.lockDuration"></a>

```python
lock_duration: str
```

- *Type:* str

---

##### `max_delivery_count`<sup>Required</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_to_live`<sup>Required</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.timeToLive"></a>

```python
time_to_live: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IothubCloudToDeviceFeedback
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback">IothubCloudToDeviceFeedback</a>

---


### IothubCloudToDeviceOutputReference <a name="IothubCloudToDeviceOutputReference" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubCloudToDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.putFeedback">put_feedback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.resetFeedback">reset_feedback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.resetMaxDeliveryCount">reset_max_delivery_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_feedback` <a name="put_feedback" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.putFeedback"></a>

```python
def put_feedback(
  value: IResolvable | typing.List[IothubCloudToDeviceFeedback]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.putFeedback.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback">IothubCloudToDeviceFeedback</a>]

---

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_feedback` <a name="reset_feedback" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.resetFeedback"></a>

```python
def reset_feedback() -> None
```

##### `reset_max_delivery_count` <a name="reset_max_delivery_count" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.resetMaxDeliveryCount"></a>

```python
def reset_max_delivery_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.feedback">feedback</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList">IothubCloudToDeviceFeedbackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.defaultTtlInput">default_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.feedbackInput">feedback_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback">IothubCloudToDeviceFeedback</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.maxDeliveryCountInput">max_delivery_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.defaultTtl">default_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice">IothubCloudToDevice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feedback`<sup>Required</sup> <a name="feedback" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.feedback"></a>

```python
feedback: IothubCloudToDeviceFeedbackList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedbackList">IothubCloudToDeviceFeedbackList</a>

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.defaultTtlInput"></a>

```python
default_ttl_input: str
```

- *Type:* str

---

##### `feedback_input`<sup>Optional</sup> <a name="feedback_input" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.feedbackInput"></a>

```python
feedback_input: IResolvable | typing.List[IothubCloudToDeviceFeedback]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDeviceFeedback">IothubCloudToDeviceFeedback</a>]

---

##### `max_delivery_count_input`<sup>Optional</sup> <a name="max_delivery_count_input" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.maxDeliveryCountInput"></a>

```python
max_delivery_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.defaultTtl"></a>

```python
default_ttl: str
```

- *Type:* str

---

##### `max_delivery_count`<sup>Required</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubCloudToDeviceOutputReference.property.internalValue"></a>

```python
internal_value: IothubCloudToDevice
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubCloudToDevice">IothubCloudToDevice</a>

---


### IothubEndpointList <a name="IothubEndpointList" id="@cdktf/provider-azurerm.iothub.IothubEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IothubEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubEndpointList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IothubEndpoint]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a>]

---


### IothubEndpointOutputReference <a name="IothubEndpointOutputReference" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetBatchFrequencyInSeconds">reset_batch_frequency_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetContainerName">reset_container_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetEndpointUri">reset_endpoint_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetEntityPath">reset_entity_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetFileNameFormat">reset_file_name_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetIdentityId">reset_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetMaxChunkSizeInBytes">reset_max_chunk_size_in_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetResourceGroupName">reset_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_batch_frequency_in_seconds` <a name="reset_batch_frequency_in_seconds" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetBatchFrequencyInSeconds"></a>

```python
def reset_batch_frequency_in_seconds() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_container_name` <a name="reset_container_name" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetContainerName"></a>

```python
def reset_container_name() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_endpoint_uri` <a name="reset_endpoint_uri" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetEndpointUri"></a>

```python
def reset_endpoint_uri() -> None
```

##### `reset_entity_path` <a name="reset_entity_path" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetEntityPath"></a>

```python
def reset_entity_path() -> None
```

##### `reset_file_name_format` <a name="reset_file_name_format" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetFileNameFormat"></a>

```python
def reset_file_name_format() -> None
```

##### `reset_identity_id` <a name="reset_identity_id" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetIdentityId"></a>

```python
def reset_identity_id() -> None
```

##### `reset_max_chunk_size_in_bytes` <a name="reset_max_chunk_size_in_bytes" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetMaxChunkSizeInBytes"></a>

```python
def reset_max_chunk_size_in_bytes() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_resource_group_name` <a name="reset_resource_group_name" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetResourceGroupName"></a>

```python
def reset_resource_group_name() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.batchFrequencyInSecondsInput">batch_frequency_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.endpointUriInput">endpoint_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.entityPathInput">entity_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.fileNameFormatInput">file_name_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.identityIdInput">identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.maxChunkSizeInBytesInput">max_chunk_size_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.batchFrequencyInSeconds">batch_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.entityPath">entity_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.fileNameFormat">file_name_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.identityId">identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.maxChunkSizeInBytes">max_chunk_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `batch_frequency_in_seconds_input`<sup>Optional</sup> <a name="batch_frequency_in_seconds_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.batchFrequencyInSecondsInput"></a>

```python
batch_frequency_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `endpoint_uri_input`<sup>Optional</sup> <a name="endpoint_uri_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.endpointUriInput"></a>

```python
endpoint_uri_input: str
```

- *Type:* str

---

##### `entity_path_input`<sup>Optional</sup> <a name="entity_path_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.entityPathInput"></a>

```python
entity_path_input: str
```

- *Type:* str

---

##### `file_name_format_input`<sup>Optional</sup> <a name="file_name_format_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.fileNameFormatInput"></a>

```python
file_name_format_input: str
```

- *Type:* str

---

##### `identity_id_input`<sup>Optional</sup> <a name="identity_id_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.identityIdInput"></a>

```python
identity_id_input: str
```

- *Type:* str

---

##### `max_chunk_size_in_bytes_input`<sup>Optional</sup> <a name="max_chunk_size_in_bytes_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.maxChunkSizeInBytesInput"></a>

```python
max_chunk_size_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `batch_frequency_in_seconds`<sup>Required</sup> <a name="batch_frequency_in_seconds" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.batchFrequencyInSeconds"></a>

```python
batch_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `endpoint_uri`<sup>Required</sup> <a name="endpoint_uri" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

---

##### `entity_path`<sup>Required</sup> <a name="entity_path" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.entityPath"></a>

```python
entity_path: str
```

- *Type:* str

---

##### `file_name_format`<sup>Required</sup> <a name="file_name_format" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.fileNameFormat"></a>

```python
file_name_format: str
```

- *Type:* str

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

---

##### `max_chunk_size_in_bytes`<sup>Required</sup> <a name="max_chunk_size_in_bytes" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.maxChunkSizeInBytes"></a>

```python
max_chunk_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IothubEndpoint
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothub.IothubEndpoint">IothubEndpoint</a>

---


### IothubEnrichmentList <a name="IothubEnrichmentList" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubEnrichmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IothubEnrichmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IothubEnrichment]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a>]

---


### IothubEnrichmentOutputReference <a name="IothubEnrichmentOutputReference" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubEnrichmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.resetEndpointNames">reset_endpoint_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint_names` <a name="reset_endpoint_names" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.resetEndpointNames"></a>

```python
def reset_endpoint_names() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.endpointNamesInput">endpoint_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.endpointNames">endpoint_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_names_input`<sup>Optional</sup> <a name="endpoint_names_input" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.endpointNamesInput"></a>

```python
endpoint_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `endpoint_names`<sup>Required</sup> <a name="endpoint_names" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.endpointNames"></a>

```python
endpoint_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubEnrichmentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IothubEnrichment
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothub.IothubEnrichment">IothubEnrichment</a>

---


### IothubFallbackRouteOutputReference <a name="IothubFallbackRouteOutputReference" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubFallbackRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resetEndpointNames">reset_endpoint_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_endpoint_names` <a name="reset_endpoint_names" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resetEndpointNames"></a>

```python
def reset_endpoint_names() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.endpointNamesInput">endpoint_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.endpointNames">endpoint_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute">IothubFallbackRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `endpoint_names_input`<sup>Optional</sup> <a name="endpoint_names_input" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.endpointNamesInput"></a>

```python
endpoint_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `endpoint_names`<sup>Required</sup> <a name="endpoint_names" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.endpointNames"></a>

```python
endpoint_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubFallbackRouteOutputReference.property.internalValue"></a>

```python
internal_value: IothubFallbackRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubFallbackRoute">IothubFallbackRoute</a>

---


### IothubFileUploadOutputReference <a name="IothubFileUploadOutputReference" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubFileUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetIdentityId">reset_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetLockDuration">reset_lock_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetMaxDeliveryCount">reset_max_delivery_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetNotifications">reset_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetSasTtl">reset_sas_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_identity_id` <a name="reset_identity_id" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetIdentityId"></a>

```python
def reset_identity_id() -> None
```

##### `reset_lock_duration` <a name="reset_lock_duration" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetLockDuration"></a>

```python
def reset_lock_duration() -> None
```

##### `reset_max_delivery_count` <a name="reset_max_delivery_count" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetMaxDeliveryCount"></a>

```python
def reset_max_delivery_count() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetNotifications"></a>

```python
def reset_notifications() -> None
```

##### `reset_sas_ttl` <a name="reset_sas_ttl" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.resetSasTtl"></a>

```python
def reset_sas_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.defaultTtlInput">default_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.identityIdInput">identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.lockDurationInput">lock_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.maxDeliveryCountInput">max_delivery_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.notificationsInput">notifications_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.sasTtlInput">sas_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.defaultTtl">default_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.identityId">identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.lockDuration">lock_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.notifications">notifications</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.sasTtl">sas_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload">IothubFileUpload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.defaultTtlInput"></a>

```python
default_ttl_input: str
```

- *Type:* str

---

##### `identity_id_input`<sup>Optional</sup> <a name="identity_id_input" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.identityIdInput"></a>

```python
identity_id_input: str
```

- *Type:* str

---

##### `lock_duration_input`<sup>Optional</sup> <a name="lock_duration_input" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.lockDurationInput"></a>

```python
lock_duration_input: str
```

- *Type:* str

---

##### `max_delivery_count_input`<sup>Optional</sup> <a name="max_delivery_count_input" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.maxDeliveryCountInput"></a>

```python
max_delivery_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.notificationsInput"></a>

```python
notifications_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `sas_ttl_input`<sup>Optional</sup> <a name="sas_ttl_input" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.sasTtlInput"></a>

```python
sas_ttl_input: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.defaultTtl"></a>

```python
default_ttl: str
```

- *Type:* str

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

---

##### `lock_duration`<sup>Required</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.lockDuration"></a>

```python
lock_duration: str
```

- *Type:* str

---

##### `max_delivery_count`<sup>Required</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.notifications"></a>

```python
notifications: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `sas_ttl`<sup>Required</sup> <a name="sas_ttl" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.sasTtl"></a>

```python
sas_ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubFileUploadOutputReference.property.internalValue"></a>

```python
internal_value: IothubFileUpload
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubFileUpload">IothubFileUpload</a>

---


### IothubIdentityOutputReference <a name="IothubIdentityOutputReference" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubIdentity">IothubIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubIdentityOutputReference.property.internalValue"></a>

```python
internal_value: IothubIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubIdentity">IothubIdentity</a>

---


### IothubNetworkRuleSetIpRuleList <a name="IothubNetworkRuleSetIpRuleList" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubNetworkRuleSetIpRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IothubNetworkRuleSetIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule">IothubNetworkRuleSetIpRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IothubNetworkRuleSetIpRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule">IothubNetworkRuleSetIpRule</a>]

---


### IothubNetworkRuleSetIpRuleOutputReference <a name="IothubNetworkRuleSetIpRuleOutputReference" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubNetworkRuleSetIpRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.ipMaskInput">ip_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.ipMask">ip_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule">IothubNetworkRuleSetIpRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `ip_mask_input`<sup>Optional</sup> <a name="ip_mask_input" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.ipMaskInput"></a>

```python
ip_mask_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_mask`<sup>Required</sup> <a name="ip_mask" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.ipMask"></a>

```python
ip_mask: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IothubNetworkRuleSetIpRule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule">IothubNetworkRuleSetIpRule</a>

---


### IothubNetworkRuleSetList <a name="IothubNetworkRuleSetList" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubNetworkRuleSetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IothubNetworkRuleSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IothubNetworkRuleSet]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a>]

---


### IothubNetworkRuleSetOutputReference <a name="IothubNetworkRuleSetOutputReference" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubNetworkRuleSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.putIpRule">put_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.resetApplyToBuiltinEventhubEndpoint">reset_apply_to_builtin_eventhub_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.resetDefaultAction">reset_default_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.resetIpRule">reset_ip_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_rule` <a name="put_ip_rule" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.putIpRule"></a>

```python
def put_ip_rule(
  value: IResolvable | typing.List[IothubNetworkRuleSetIpRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.putIpRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule">IothubNetworkRuleSetIpRule</a>]

---

##### `reset_apply_to_builtin_eventhub_endpoint` <a name="reset_apply_to_builtin_eventhub_endpoint" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.resetApplyToBuiltinEventhubEndpoint"></a>

```python
def reset_apply_to_builtin_eventhub_endpoint() -> None
```

##### `reset_default_action` <a name="reset_default_action" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.resetDefaultAction"></a>

```python
def reset_default_action() -> None
```

##### `reset_ip_rule` <a name="reset_ip_rule" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.resetIpRule"></a>

```python
def reset_ip_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.ipRule">ip_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList">IothubNetworkRuleSetIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.applyToBuiltinEventhubEndpointInput">apply_to_builtin_eventhub_endpoint_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.ipRuleInput">ip_rule_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule">IothubNetworkRuleSetIpRule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.applyToBuiltinEventhubEndpoint">apply_to_builtin_eventhub_endpoint</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_rule`<sup>Required</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.ipRule"></a>

```python
ip_rule: IothubNetworkRuleSetIpRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRuleList">IothubNetworkRuleSetIpRuleList</a>

---

##### `apply_to_builtin_eventhub_endpoint_input`<sup>Optional</sup> <a name="apply_to_builtin_eventhub_endpoint_input" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.applyToBuiltinEventhubEndpointInput"></a>

```python
apply_to_builtin_eventhub_endpoint_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `ip_rule_input`<sup>Optional</sup> <a name="ip_rule_input" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.ipRuleInput"></a>

```python
ip_rule_input: IResolvable | typing.List[IothubNetworkRuleSetIpRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetIpRule">IothubNetworkRuleSetIpRule</a>]

---

##### `apply_to_builtin_eventhub_endpoint`<sup>Required</sup> <a name="apply_to_builtin_eventhub_endpoint" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.applyToBuiltinEventhubEndpoint"></a>

```python
apply_to_builtin_eventhub_endpoint: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubNetworkRuleSetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IothubNetworkRuleSet
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothub.IothubNetworkRuleSet">IothubNetworkRuleSet</a>

---


### IothubRouteList <a name="IothubRouteList" id="@cdktf/provider-azurerm.iothub.IothubRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubRouteList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.iothub.IothubRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.iothub.IothubRouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.iothub.IothubRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iothub.IothubRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IothubRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iothub.IothubRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubRouteList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IothubRoute]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a>]

---


### IothubRouteOutputReference <a name="IothubRouteOutputReference" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resetEndpointNames">reset_endpoint_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_endpoint_names` <a name="reset_endpoint_names" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resetEndpointNames"></a>

```python
def reset_endpoint_names() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.endpointNamesInput">endpoint_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.endpointNames">endpoint_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `endpoint_names_input`<sup>Optional</sup> <a name="endpoint_names_input" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.endpointNamesInput"></a>

```python
endpoint_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `endpoint_names`<sup>Required</sup> <a name="endpoint_names" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.endpointNames"></a>

```python
endpoint_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubRouteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IothubRoute
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothub.IothubRoute">IothubRoute</a>

---


### IothubSharedAccessPolicyList <a name="IothubSharedAccessPolicyList" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubSharedAccessPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IothubSharedAccessPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IothubSharedAccessPolicyOutputReference <a name="IothubSharedAccessPolicyOutputReference" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubSharedAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.secondaryKey">secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicy">IothubSharedAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `secondary_key`<sup>Required</sup> <a name="secondary_key" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IothubSharedAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubSharedAccessPolicy">IothubSharedAccessPolicy</a>

---


### IothubSkuOutputReference <a name="IothubSkuOutputReference" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubSkuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.iothub.IothubSku">IothubSku</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubSkuOutputReference.property.internalValue"></a>

```python
internal_value: IothubSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothub.IothubSku">IothubSku</a>

---


### IothubTimeoutsOutputReference <a name="IothubTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub

iothub.IothubTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts">IothubTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothub.IothubTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IothubTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothub.IothubTimeouts">IothubTimeouts</a>

---



