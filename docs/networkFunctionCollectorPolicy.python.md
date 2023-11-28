# `networkFunctionCollectorPolicy` Submodule <a name="`networkFunctionCollectorPolicy` Submodule" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFunctionCollectorPolicy <a name="NetworkFunctionCollectorPolicy" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy azurerm_network_function_collector_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipfx_emission: NetworkFunctionCollectorPolicyIpfxEmission,
  ipfx_ingestion: NetworkFunctionCollectorPolicyIpfxIngestion,
  location: str,
  name: str,
  traffic_collector_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetworkFunctionCollectorPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.ipfxEmission">ipfx_emission</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | ipfx_emission block. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.ipfxIngestion">ipfx_ingestion</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | ipfx_ingestion block. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.trafficCollectorId">traffic_collector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipfx_emission`<sup>Required</sup> <a name="ipfx_emission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.ipfxEmission"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

ipfx_emission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#ipfx_emission NetworkFunctionCollectorPolicy#ipfx_emission}

---

##### `ipfx_ingestion`<sup>Required</sup> <a name="ipfx_ingestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.ipfxIngestion"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

ipfx_ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#ipfx_ingestion NetworkFunctionCollectorPolicy#ipfx_ingestion}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}.

---

##### `traffic_collector_id`<sup>Required</sup> <a name="traffic_collector_id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.trafficCollectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#timeouts NetworkFunctionCollectorPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission">put_ipfx_emission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion">put_ipfx_ingestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_ipfx_emission` <a name="put_ipfx_emission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission"></a>

```python
def put_ipfx_emission(
  destination_types: typing.List[str]
) -> None
```

###### `destination_types`<sup>Required</sup> <a name="destination_types" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission.parameter.destinationTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#destination_types NetworkFunctionCollectorPolicy#destination_types}.

---

##### `put_ipfx_ingestion` <a name="put_ipfx_ingestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion"></a>

```python
def put_ipfx_ingestion(
  source_resource_ids: typing.List[str]
) -> None
```

###### `source_resource_ids`<sup>Required</sup> <a name="source_resource_ids" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion.parameter.sourceResourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#source_resource_ids NetworkFunctionCollectorPolicy#source_resource_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#create NetworkFunctionCollectorPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#delete NetworkFunctionCollectorPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#read NetworkFunctionCollectorPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#update NetworkFunctionCollectorPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkFunctionCollectorPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkFunctionCollectorPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkFunctionCollectorPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkFunctionCollectorPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFunctionCollectorPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmission">ipfx_emission</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference">NetworkFunctionCollectorPolicyIpfxEmissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestion">ipfx_ingestion</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference">NetworkFunctionCollectorPolicyIpfxIngestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference">NetworkFunctionCollectorPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmissionInput">ipfx_emission_input</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestionInput">ipfx_ingestion_input</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorIdInput">traffic_collector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorId">traffic_collector_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipfx_emission`<sup>Required</sup> <a name="ipfx_emission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmission"></a>

```python
ipfx_emission: NetworkFunctionCollectorPolicyIpfxEmissionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference">NetworkFunctionCollectorPolicyIpfxEmissionOutputReference</a>

---

##### `ipfx_ingestion`<sup>Required</sup> <a name="ipfx_ingestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestion"></a>

```python
ipfx_ingestion: NetworkFunctionCollectorPolicyIpfxIngestionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference">NetworkFunctionCollectorPolicyIpfxIngestionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeouts"></a>

```python
timeouts: NetworkFunctionCollectorPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference">NetworkFunctionCollectorPolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipfx_emission_input`<sup>Optional</sup> <a name="ipfx_emission_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmissionInput"></a>

```python
ipfx_emission_input: NetworkFunctionCollectorPolicyIpfxEmission
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---

##### `ipfx_ingestion_input`<sup>Optional</sup> <a name="ipfx_ingestion_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestionInput"></a>

```python
ipfx_ingestion_input: NetworkFunctionCollectorPolicyIpfxIngestion
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkFunctionCollectorPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>]

---

##### `traffic_collector_id_input`<sup>Optional</sup> <a name="traffic_collector_id_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorIdInput"></a>

```python
traffic_collector_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `traffic_collector_id`<sup>Required</sup> <a name="traffic_collector_id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorId"></a>

```python
traffic_collector_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFunctionCollectorPolicyConfig <a name="NetworkFunctionCollectorPolicyConfig" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipfx_emission: NetworkFunctionCollectorPolicyIpfxEmission,
  ipfx_ingestion: NetworkFunctionCollectorPolicyIpfxIngestion,
  location: str,
  name: str,
  traffic_collector_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetworkFunctionCollectorPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxEmission">ipfx_emission</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | ipfx_emission block. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxIngestion">ipfx_ingestion</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | ipfx_ingestion block. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.trafficCollectorId">traffic_collector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipfx_emission`<sup>Required</sup> <a name="ipfx_emission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxEmission"></a>

```python
ipfx_emission: NetworkFunctionCollectorPolicyIpfxEmission
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

ipfx_emission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#ipfx_emission NetworkFunctionCollectorPolicy#ipfx_emission}

---

##### `ipfx_ingestion`<sup>Required</sup> <a name="ipfx_ingestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxIngestion"></a>

```python
ipfx_ingestion: NetworkFunctionCollectorPolicyIpfxIngestion
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

ipfx_ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#ipfx_ingestion NetworkFunctionCollectorPolicy#ipfx_ingestion}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}.

---

##### `traffic_collector_id`<sup>Required</sup> <a name="traffic_collector_id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.trafficCollectorId"></a>

```python
traffic_collector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.timeouts"></a>

```python
timeouts: NetworkFunctionCollectorPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#timeouts NetworkFunctionCollectorPolicy#timeouts}

---

### NetworkFunctionCollectorPolicyIpfxEmission <a name="NetworkFunctionCollectorPolicyIpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission(
  destination_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.property.destinationTypes">destination_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#destination_types NetworkFunctionCollectorPolicy#destination_types}. |

---

##### `destination_types`<sup>Required</sup> <a name="destination_types" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.property.destinationTypes"></a>

```python
destination_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#destination_types NetworkFunctionCollectorPolicy#destination_types}.

---

### NetworkFunctionCollectorPolicyIpfxIngestion <a name="NetworkFunctionCollectorPolicyIpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion(
  source_resource_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.property.sourceResourceIds">source_resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#source_resource_ids NetworkFunctionCollectorPolicy#source_resource_ids}. |

---

##### `source_resource_ids`<sup>Required</sup> <a name="source_resource_ids" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.property.sourceResourceIds"></a>

```python
source_resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#source_resource_ids NetworkFunctionCollectorPolicy#source_resource_ids}.

---

### NetworkFunctionCollectorPolicyTimeouts <a name="NetworkFunctionCollectorPolicyTimeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#create NetworkFunctionCollectorPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#delete NetworkFunctionCollectorPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#read NetworkFunctionCollectorPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#update NetworkFunctionCollectorPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#create NetworkFunctionCollectorPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#delete NetworkFunctionCollectorPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#read NetworkFunctionCollectorPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/network_function_collector_policy#update NetworkFunctionCollectorPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFunctionCollectorPolicyIpfxEmissionOutputReference <a name="NetworkFunctionCollectorPolicyIpfxEmissionOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypesInput">destination_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypes">destination_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_types_input`<sup>Optional</sup> <a name="destination_types_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypesInput"></a>

```python
destination_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_types`<sup>Required</sup> <a name="destination_types" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypes"></a>

```python
destination_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkFunctionCollectorPolicyIpfxEmission
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---


### NetworkFunctionCollectorPolicyIpfxIngestionOutputReference <a name="NetworkFunctionCollectorPolicyIpfxIngestionOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIdsInput">source_resource_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIds">source_resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_resource_ids_input`<sup>Optional</sup> <a name="source_resource_ids_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIdsInput"></a>

```python
source_resource_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_resource_ids`<sup>Required</sup> <a name="source_resource_ids" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIds"></a>

```python
source_resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkFunctionCollectorPolicyIpfxIngestion
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---


### NetworkFunctionCollectorPolicyTimeoutsOutputReference <a name="NetworkFunctionCollectorPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_function_collector_policy

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkFunctionCollectorPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>]

---



