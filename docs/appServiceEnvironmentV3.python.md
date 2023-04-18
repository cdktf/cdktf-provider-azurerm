# `azurerm_app_service_environment_v3`

Refer to the Terraform Registory for docs: [`azurerm_app_service_environment_v3`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3).

# `appServiceEnvironmentV3` Submodule <a name="`appServiceEnvironmentV3` Submodule" id="@cdktf/provider-azurerm.appServiceEnvironmentV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceEnvironmentV3 <a name="AppServiceEnvironmentV3" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3 azurerm_app_service_environment_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  subnet_id: str,
  allow_new_private_endpoint_connections: typing.Union[bool, IResolvable] = None,
  cluster_setting: typing.Union[IResolvable, typing.List[AppServiceEnvironmentV3ClusterSetting]] = None,
  dedicated_host_count: typing.Union[int, float] = None,
  id: str = None,
  internal_load_balancing_mode: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: AppServiceEnvironmentV3Timeouts = None,
  zone_redundant: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#resource_group_name AppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#subnet_id AppServiceEnvironmentV3#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.allowNewPrivateEndpointConnections">allow_new_private_endpoint_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#allow_new_private_endpoint_connections AppServiceEnvironmentV3#allow_new_private_endpoint_connections}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.clusterSetting">cluster_setting</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>]]</code> | cluster_setting block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.dedicatedHostCount">dedicated_host_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#dedicated_host_count AppServiceEnvironmentV3#dedicated_host_count}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#id AppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.internalLoadBalancingMode">internal_load_balancing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#internal_load_balancing_mode AppServiceEnvironmentV3#internal_load_balancing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#tags AppServiceEnvironmentV3#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.zoneRedundant">zone_redundant</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#zone_redundant AppServiceEnvironmentV3#zone_redundant}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#resource_group_name AppServiceEnvironmentV3#resource_group_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#subnet_id AppServiceEnvironmentV3#subnet_id}.

---

##### `allow_new_private_endpoint_connections`<sup>Optional</sup> <a name="allow_new_private_endpoint_connections" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.allowNewPrivateEndpointConnections"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#allow_new_private_endpoint_connections AppServiceEnvironmentV3#allow_new_private_endpoint_connections}.

---

##### `cluster_setting`<sup>Optional</sup> <a name="cluster_setting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.clusterSetting"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>]]

cluster_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#cluster_setting AppServiceEnvironmentV3#cluster_setting}

---

##### `dedicated_host_count`<sup>Optional</sup> <a name="dedicated_host_count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.dedicatedHostCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#dedicated_host_count AppServiceEnvironmentV3#dedicated_host_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#id AppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_load_balancing_mode`<sup>Optional</sup> <a name="internal_load_balancing_mode" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.internalLoadBalancingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#internal_load_balancing_mode AppServiceEnvironmentV3#internal_load_balancing_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#tags AppServiceEnvironmentV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#timeouts AppServiceEnvironmentV3#timeouts}

---

##### `zone_redundant`<sup>Optional</sup> <a name="zone_redundant" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.Initializer.parameter.zoneRedundant"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#zone_redundant AppServiceEnvironmentV3#zone_redundant}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putClusterSetting">put_cluster_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetAllowNewPrivateEndpointConnections">reset_allow_new_private_endpoint_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetClusterSetting">reset_cluster_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetDedicatedHostCount">reset_dedicated_host_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetInternalLoadBalancingMode">reset_internal_load_balancing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetZoneRedundant">reset_zone_redundant</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cluster_setting` <a name="put_cluster_setting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putClusterSetting"></a>

```python
def put_cluster_setting(
  value: typing.Union[IResolvable, typing.List[AppServiceEnvironmentV3ClusterSetting]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putClusterSetting.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#create AppServiceEnvironmentV3#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#delete AppServiceEnvironmentV3#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#read AppServiceEnvironmentV3#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#update AppServiceEnvironmentV3#update}.

---

##### `reset_allow_new_private_endpoint_connections` <a name="reset_allow_new_private_endpoint_connections" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetAllowNewPrivateEndpointConnections"></a>

```python
def reset_allow_new_private_endpoint_connections() -> None
```

##### `reset_cluster_setting` <a name="reset_cluster_setting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetClusterSetting"></a>

```python
def reset_cluster_setting() -> None
```

##### `reset_dedicated_host_count` <a name="reset_dedicated_host_count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetDedicatedHostCount"></a>

```python
def reset_dedicated_host_count() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internal_load_balancing_mode` <a name="reset_internal_load_balancing_mode" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetInternalLoadBalancingMode"></a>

```python
def reset_internal_load_balancing_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone_redundant` <a name="reset_zone_redundant" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.resetZoneRedundant"></a>

```python
def reset_zone_redundant() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.clusterSetting">cluster_setting</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList">AppServiceEnvironmentV3ClusterSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dnsSuffix">dns_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.externalInboundIpAddresses">external_inbound_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.inboundNetworkDependencies">inbound_network_dependencies</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList">AppServiceEnvironmentV3InboundNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalInboundIpAddresses">internal_inbound_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.ipSslAddressCount">ip_ssl_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.linuxOutboundIpAddresses">linux_outbound_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.pricingTier">pricing_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference">AppServiceEnvironmentV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.windowsOutboundIpAddresses">windows_outbound_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.allowNewPrivateEndpointConnectionsInput">allow_new_private_endpoint_connections_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.clusterSettingInput">cluster_setting_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dedicatedHostCountInput">dedicated_host_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalLoadBalancingModeInput">internal_load_balancing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.zoneRedundantInput">zone_redundant_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections">allow_new_private_endpoint_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dedicatedHostCount">dedicated_host_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalLoadBalancingMode">internal_load_balancing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.zoneRedundant">zone_redundant</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_setting`<sup>Required</sup> <a name="cluster_setting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.clusterSetting"></a>

```python
cluster_setting: AppServiceEnvironmentV3ClusterSettingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList">AppServiceEnvironmentV3ClusterSettingList</a>

---

##### `dns_suffix`<sup>Required</sup> <a name="dns_suffix" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dnsSuffix"></a>

```python
dns_suffix: str
```

- *Type:* str

---

##### `external_inbound_ip_addresses`<sup>Required</sup> <a name="external_inbound_ip_addresses" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.externalInboundIpAddresses"></a>

```python
external_inbound_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inbound_network_dependencies`<sup>Required</sup> <a name="inbound_network_dependencies" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.inboundNetworkDependencies"></a>

```python
inbound_network_dependencies: AppServiceEnvironmentV3InboundNetworkDependenciesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList">AppServiceEnvironmentV3InboundNetworkDependenciesList</a>

---

##### `internal_inbound_ip_addresses`<sup>Required</sup> <a name="internal_inbound_ip_addresses" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalInboundIpAddresses"></a>

```python
internal_inbound_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_ssl_address_count`<sup>Required</sup> <a name="ip_ssl_address_count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.ipSslAddressCount"></a>

```python
ip_ssl_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `linux_outbound_ip_addresses`<sup>Required</sup> <a name="linux_outbound_ip_addresses" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.linuxOutboundIpAddresses"></a>

```python
linux_outbound_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `pricing_tier`<sup>Required</sup> <a name="pricing_tier" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.pricingTier"></a>

```python
pricing_tier: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.timeouts"></a>

```python
timeouts: AppServiceEnvironmentV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference">AppServiceEnvironmentV3TimeoutsOutputReference</a>

---

##### `windows_outbound_ip_addresses`<sup>Required</sup> <a name="windows_outbound_ip_addresses" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.windowsOutboundIpAddresses"></a>

```python
windows_outbound_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_new_private_endpoint_connections_input`<sup>Optional</sup> <a name="allow_new_private_endpoint_connections_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.allowNewPrivateEndpointConnectionsInput"></a>

```python
allow_new_private_endpoint_connections_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_setting_input`<sup>Optional</sup> <a name="cluster_setting_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.clusterSettingInput"></a>

```python
cluster_setting_input: typing.Union[IResolvable, typing.List[AppServiceEnvironmentV3ClusterSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>]]

---

##### `dedicated_host_count_input`<sup>Optional</sup> <a name="dedicated_host_count_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dedicatedHostCountInput"></a>

```python
dedicated_host_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internal_load_balancing_mode_input`<sup>Optional</sup> <a name="internal_load_balancing_mode_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalLoadBalancingModeInput"></a>

```python
internal_load_balancing_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AppServiceEnvironmentV3Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>, cdktf.IResolvable]

---

##### `zone_redundant_input`<sup>Optional</sup> <a name="zone_redundant_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.zoneRedundantInput"></a>

```python
zone_redundant_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_new_private_endpoint_connections`<sup>Required</sup> <a name="allow_new_private_endpoint_connections" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections"></a>

```python
allow_new_private_endpoint_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dedicated_host_count`<sup>Required</sup> <a name="dedicated_host_count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.dedicatedHostCount"></a>

```python
dedicated_host_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_load_balancing_mode`<sup>Required</sup> <a name="internal_load_balancing_mode" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.internalLoadBalancingMode"></a>

```python
internal_load_balancing_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zone_redundant`<sup>Required</sup> <a name="zone_redundant" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.zoneRedundant"></a>

```python
zone_redundant: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceEnvironmentV3ClusterSetting <a name="AppServiceEnvironmentV3ClusterSetting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#value AppServiceEnvironmentV3#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#value AppServiceEnvironmentV3#value}.

---

### AppServiceEnvironmentV3Config <a name="AppServiceEnvironmentV3Config" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  subnet_id: str,
  allow_new_private_endpoint_connections: typing.Union[bool, IResolvable] = None,
  cluster_setting: typing.Union[IResolvable, typing.List[AppServiceEnvironmentV3ClusterSetting]] = None,
  dedicated_host_count: typing.Union[int, float] = None,
  id: str = None,
  internal_load_balancing_mode: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: AppServiceEnvironmentV3Timeouts = None,
  zone_redundant: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#resource_group_name AppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#subnet_id AppServiceEnvironmentV3#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.allowNewPrivateEndpointConnections">allow_new_private_endpoint_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#allow_new_private_endpoint_connections AppServiceEnvironmentV3#allow_new_private_endpoint_connections}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.clusterSetting">cluster_setting</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>]]</code> | cluster_setting block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.dedicatedHostCount">dedicated_host_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#dedicated_host_count AppServiceEnvironmentV3#dedicated_host_count}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#id AppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.internalLoadBalancingMode">internal_load_balancing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#internal_load_balancing_mode AppServiceEnvironmentV3#internal_load_balancing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#tags AppServiceEnvironmentV3#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.zoneRedundant">zone_redundant</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#zone_redundant AppServiceEnvironmentV3#zone_redundant}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#name AppServiceEnvironmentV3#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#resource_group_name AppServiceEnvironmentV3#resource_group_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#subnet_id AppServiceEnvironmentV3#subnet_id}.

---

##### `allow_new_private_endpoint_connections`<sup>Optional</sup> <a name="allow_new_private_endpoint_connections" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.allowNewPrivateEndpointConnections"></a>

```python
allow_new_private_endpoint_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#allow_new_private_endpoint_connections AppServiceEnvironmentV3#allow_new_private_endpoint_connections}.

---

##### `cluster_setting`<sup>Optional</sup> <a name="cluster_setting" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.clusterSetting"></a>

```python
cluster_setting: typing.Union[IResolvable, typing.List[AppServiceEnvironmentV3ClusterSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>]]

cluster_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#cluster_setting AppServiceEnvironmentV3#cluster_setting}

---

##### `dedicated_host_count`<sup>Optional</sup> <a name="dedicated_host_count" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.dedicatedHostCount"></a>

```python
dedicated_host_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#dedicated_host_count AppServiceEnvironmentV3#dedicated_host_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#id AppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_load_balancing_mode`<sup>Optional</sup> <a name="internal_load_balancing_mode" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.internalLoadBalancingMode"></a>

```python
internal_load_balancing_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#internal_load_balancing_mode AppServiceEnvironmentV3#internal_load_balancing_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#tags AppServiceEnvironmentV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.timeouts"></a>

```python
timeouts: AppServiceEnvironmentV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#timeouts AppServiceEnvironmentV3#timeouts}

---

##### `zone_redundant`<sup>Optional</sup> <a name="zone_redundant" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Config.property.zoneRedundant"></a>

```python
zone_redundant: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#zone_redundant AppServiceEnvironmentV3#zone_redundant}.

---

### AppServiceEnvironmentV3InboundNetworkDependencies <a name="AppServiceEnvironmentV3InboundNetworkDependencies" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependencies.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependencies()
```


### AppServiceEnvironmentV3Timeouts <a name="AppServiceEnvironmentV3Timeouts" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#create AppServiceEnvironmentV3#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#delete AppServiceEnvironmentV3#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#read AppServiceEnvironmentV3#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#update AppServiceEnvironmentV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#create AppServiceEnvironmentV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#delete AppServiceEnvironmentV3#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#read AppServiceEnvironmentV3#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/app_service_environment_v3#update AppServiceEnvironmentV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceEnvironmentV3ClusterSettingList <a name="AppServiceEnvironmentV3ClusterSettingList" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceEnvironmentV3ClusterSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceEnvironmentV3ClusterSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>]]

---


### AppServiceEnvironmentV3ClusterSettingOutputReference <a name="AppServiceEnvironmentV3ClusterSettingOutputReference" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppServiceEnvironmentV3ClusterSetting, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3ClusterSetting">AppServiceEnvironmentV3ClusterSetting</a>, cdktf.IResolvable]

---


### AppServiceEnvironmentV3InboundNetworkDependenciesList <a name="AppServiceEnvironmentV3InboundNetworkDependenciesList" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference <a name="AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependencies">AppServiceEnvironmentV3InboundNetworkDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceEnvironmentV3InboundNetworkDependencies
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3InboundNetworkDependencies">AppServiceEnvironmentV3InboundNetworkDependencies</a>

---


### AppServiceEnvironmentV3TimeoutsOutputReference <a name="AppServiceEnvironmentV3TimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_environment_v3

appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppServiceEnvironmentV3Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.appServiceEnvironmentV3.AppServiceEnvironmentV3Timeouts">AppServiceEnvironmentV3Timeouts</a>, cdktf.IResolvable]

---



