# `frontdoorCustomHttpsConfiguration` Submodule <a name="`frontdoorCustomHttpsConfiguration` Submodule" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontdoorCustomHttpsConfiguration <a name="FrontdoorCustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration azurerm_frontdoor_custom_https_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_custom_https_configuration

frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_https_provisioning_enabled: typing.Union[bool, IResolvable],
  frontend_endpoint_id: str,
  custom_https_configuration: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration = None,
  id: str = None,
  timeouts: FrontdoorCustomHttpsConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.customHttpsProvisioningEnabled">custom_https_provisioning_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.frontendEndpointId">frontend_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.customHttpsConfiguration">custom_https_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | custom_https_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_https_provisioning_enabled`<sup>Required</sup> <a name="custom_https_provisioning_enabled" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.customHttpsProvisioningEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}.

---

##### `frontend_endpoint_id`<sup>Required</sup> <a name="frontend_endpoint_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.frontendEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}.

---

##### `custom_https_configuration`<sup>Optional</sup> <a name="custom_https_configuration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.customHttpsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

custom_https_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#custom_https_configuration FrontdoorCustomHttpsConfiguration#custom_https_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#timeouts FrontdoorCustomHttpsConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration">put_custom_https_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetCustomHttpsConfiguration">reset_custom_https_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_https_configuration` <a name="put_custom_https_configuration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration"></a>

```python
def put_custom_https_configuration(
  azure_key_vault_certificate_secret_name: str = None,
  azure_key_vault_certificate_secret_version: str = None,
  azure_key_vault_certificate_vault_id: str = None,
  certificate_source: str = None
) -> None
```

###### `azure_key_vault_certificate_secret_name`<sup>Optional</sup> <a name="azure_key_vault_certificate_secret_name" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration.parameter.azureKeyVaultCertificateSecretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_name FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_name}.

---

###### `azure_key_vault_certificate_secret_version`<sup>Optional</sup> <a name="azure_key_vault_certificate_secret_version" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration.parameter.azureKeyVaultCertificateSecretVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_version FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_version}.

---

###### `azure_key_vault_certificate_vault_id`<sup>Optional</sup> <a name="azure_key_vault_certificate_vault_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration.parameter.azureKeyVaultCertificateVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_vault_id FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_vault_id}.

---

###### `certificate_source`<sup>Optional</sup> <a name="certificate_source" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration.parameter.certificateSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#certificate_source FrontdoorCustomHttpsConfiguration#certificate_source}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#create FrontdoorCustomHttpsConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#delete FrontdoorCustomHttpsConfiguration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#read FrontdoorCustomHttpsConfiguration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#update FrontdoorCustomHttpsConfiguration#update}.

---

##### `reset_custom_https_configuration` <a name="reset_custom_https_configuration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetCustomHttpsConfiguration"></a>

```python
def reset_custom_https_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FrontdoorCustomHttpsConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_custom_https_configuration

frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_custom_https_configuration

frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_custom_https_configuration

frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_custom_https_configuration

frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FrontdoorCustomHttpsConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FrontdoorCustomHttpsConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FrontdoorCustomHttpsConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FrontdoorCustomHttpsConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfiguration">custom_https_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference">FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference">FrontdoorCustomHttpsConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfigurationInput">custom_https_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabledInput">custom_https_provisioning_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointIdInput">frontend_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabled">custom_https_provisioning_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointId">frontend_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_https_configuration`<sup>Required</sup> <a name="custom_https_configuration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfiguration"></a>

```python
custom_https_configuration: FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference">FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeouts"></a>

```python
timeouts: FrontdoorCustomHttpsConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference">FrontdoorCustomHttpsConfigurationTimeoutsOutputReference</a>

---

##### `custom_https_configuration_input`<sup>Optional</sup> <a name="custom_https_configuration_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfigurationInput"></a>

```python
custom_https_configuration_input: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

---

##### `custom_https_provisioning_enabled_input`<sup>Optional</sup> <a name="custom_https_provisioning_enabled_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabledInput"></a>

```python
custom_https_provisioning_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frontend_endpoint_id_input`<sup>Optional</sup> <a name="frontend_endpoint_id_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointIdInput"></a>

```python
frontend_endpoint_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FrontdoorCustomHttpsConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>]

---

##### `custom_https_provisioning_enabled`<sup>Required</sup> <a name="custom_https_provisioning_enabled" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabled"></a>

```python
custom_https_provisioning_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frontend_endpoint_id`<sup>Required</sup> <a name="frontend_endpoint_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointId"></a>

```python
frontend_endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorCustomHttpsConfigurationConfig <a name="FrontdoorCustomHttpsConfigurationConfig" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_custom_https_configuration

frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_https_provisioning_enabled: typing.Union[bool, IResolvable],
  frontend_endpoint_id: str,
  custom_https_configuration: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration = None,
  id: str = None,
  timeouts: FrontdoorCustomHttpsConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsProvisioningEnabled">custom_https_provisioning_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.frontendEndpointId">frontend_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsConfiguration">custom_https_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | custom_https_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_https_provisioning_enabled`<sup>Required</sup> <a name="custom_https_provisioning_enabled" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsProvisioningEnabled"></a>

```python
custom_https_provisioning_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}.

---

##### `frontend_endpoint_id`<sup>Required</sup> <a name="frontend_endpoint_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.frontendEndpointId"></a>

```python
frontend_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}.

---

##### `custom_https_configuration`<sup>Optional</sup> <a name="custom_https_configuration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsConfiguration"></a>

```python
custom_https_configuration: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

custom_https_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#custom_https_configuration FrontdoorCustomHttpsConfiguration#custom_https_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.timeouts"></a>

```python
timeouts: FrontdoorCustomHttpsConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#timeouts FrontdoorCustomHttpsConfiguration#timeouts}

---

### FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration <a name="FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_custom_https_configuration

frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration(
  azure_key_vault_certificate_secret_name: str = None,
  azure_key_vault_certificate_secret_version: str = None,
  azure_key_vault_certificate_vault_id: str = None,
  certificate_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretName">azure_key_vault_certificate_secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_name FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretVersion">azure_key_vault_certificate_secret_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_version FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_version}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateVaultId">azure_key_vault_certificate_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_vault_id FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.certificateSource">certificate_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#certificate_source FrontdoorCustomHttpsConfiguration#certificate_source}. |

---

##### `azure_key_vault_certificate_secret_name`<sup>Optional</sup> <a name="azure_key_vault_certificate_secret_name" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretName"></a>

```python
azure_key_vault_certificate_secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_name FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_name}.

---

##### `azure_key_vault_certificate_secret_version`<sup>Optional</sup> <a name="azure_key_vault_certificate_secret_version" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretVersion"></a>

```python
azure_key_vault_certificate_secret_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_version FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_version}.

---

##### `azure_key_vault_certificate_vault_id`<sup>Optional</sup> <a name="azure_key_vault_certificate_vault_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateVaultId"></a>

```python
azure_key_vault_certificate_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_vault_id FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_vault_id}.

---

##### `certificate_source`<sup>Optional</sup> <a name="certificate_source" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.certificateSource"></a>

```python
certificate_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#certificate_source FrontdoorCustomHttpsConfiguration#certificate_source}.

---

### FrontdoorCustomHttpsConfigurationTimeouts <a name="FrontdoorCustomHttpsConfigurationTimeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_custom_https_configuration

frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#create FrontdoorCustomHttpsConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#delete FrontdoorCustomHttpsConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#read FrontdoorCustomHttpsConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#update FrontdoorCustomHttpsConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#create FrontdoorCustomHttpsConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#delete FrontdoorCustomHttpsConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#read FrontdoorCustomHttpsConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/frontdoor_custom_https_configuration#update FrontdoorCustomHttpsConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference <a name="FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_custom_https_configuration

frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretName">reset_azure_key_vault_certificate_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretVersion">reset_azure_key_vault_certificate_secret_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateVaultId">reset_azure_key_vault_certificate_vault_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetCertificateSource">reset_certificate_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_azure_key_vault_certificate_secret_name` <a name="reset_azure_key_vault_certificate_secret_name" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretName"></a>

```python
def reset_azure_key_vault_certificate_secret_name() -> None
```

##### `reset_azure_key_vault_certificate_secret_version` <a name="reset_azure_key_vault_certificate_secret_version" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretVersion"></a>

```python
def reset_azure_key_vault_certificate_secret_version() -> None
```

##### `reset_azure_key_vault_certificate_vault_id` <a name="reset_azure_key_vault_certificate_vault_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateVaultId"></a>

```python
def reset_azure_key_vault_certificate_vault_id() -> None
```

##### `reset_certificate_source` <a name="reset_certificate_source" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetCertificateSource"></a>

```python
def reset_certificate_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningState">provisioning_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningSubstate">provisioning_substate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretNameInput">azure_key_vault_certificate_secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersionInput">azure_key_vault_certificate_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultIdInput">azure_key_vault_certificate_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSourceInput">certificate_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretName">azure_key_vault_certificate_secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersion">azure_key_vault_certificate_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultId">azure_key_vault_certificate_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSource">certificate_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_tls_version`<sup>Required</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.minimumTlsVersion"></a>

```python
minimum_tls_version: str
```

- *Type:* str

---

##### `provisioning_state`<sup>Required</sup> <a name="provisioning_state" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningState"></a>

```python
provisioning_state: str
```

- *Type:* str

---

##### `provisioning_substate`<sup>Required</sup> <a name="provisioning_substate" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningSubstate"></a>

```python
provisioning_substate: str
```

- *Type:* str

---

##### `azure_key_vault_certificate_secret_name_input`<sup>Optional</sup> <a name="azure_key_vault_certificate_secret_name_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretNameInput"></a>

```python
azure_key_vault_certificate_secret_name_input: str
```

- *Type:* str

---

##### `azure_key_vault_certificate_secret_version_input`<sup>Optional</sup> <a name="azure_key_vault_certificate_secret_version_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersionInput"></a>

```python
azure_key_vault_certificate_secret_version_input: str
```

- *Type:* str

---

##### `azure_key_vault_certificate_vault_id_input`<sup>Optional</sup> <a name="azure_key_vault_certificate_vault_id_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultIdInput"></a>

```python
azure_key_vault_certificate_vault_id_input: str
```

- *Type:* str

---

##### `certificate_source_input`<sup>Optional</sup> <a name="certificate_source_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSourceInput"></a>

```python
certificate_source_input: str
```

- *Type:* str

---

##### `azure_key_vault_certificate_secret_name`<sup>Required</sup> <a name="azure_key_vault_certificate_secret_name" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretName"></a>

```python
azure_key_vault_certificate_secret_name: str
```

- *Type:* str

---

##### `azure_key_vault_certificate_secret_version`<sup>Required</sup> <a name="azure_key_vault_certificate_secret_version" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersion"></a>

```python
azure_key_vault_certificate_secret_version: str
```

- *Type:* str

---

##### `azure_key_vault_certificate_vault_id`<sup>Required</sup> <a name="azure_key_vault_certificate_vault_id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultId"></a>

```python
azure_key_vault_certificate_vault_id: str
```

- *Type:* str

---

##### `certificate_source`<sup>Required</sup> <a name="certificate_source" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSource"></a>

```python
certificate_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

---


### FrontdoorCustomHttpsConfigurationTimeoutsOutputReference <a name="FrontdoorCustomHttpsConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_custom_https_configuration

frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FrontdoorCustomHttpsConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>]

---



