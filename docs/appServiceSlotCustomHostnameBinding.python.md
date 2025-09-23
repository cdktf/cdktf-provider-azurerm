# `appServiceSlotCustomHostnameBinding` Submodule <a name="`appServiceSlotCustomHostnameBinding` Submodule" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSlotCustomHostnameBinding <a name="AppServiceSlotCustomHostnameBinding" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding azurerm_app_service_slot_custom_hostname_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot_custom_hostname_binding

appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_slot_id: str,
  hostname: str,
  id: str = None,
  ssl_state: str = None,
  thumbprint: str = None,
  timeouts: AppServiceSlotCustomHostnameBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.appServiceSlotId">app_service_slot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#app_service_slot_id AppServiceSlotCustomHostnameBinding#app_service_slot_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#hostname AppServiceSlotCustomHostnameBinding#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#id AppServiceSlotCustomHostnameBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.sslState">ssl_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#ssl_state AppServiceSlotCustomHostnameBinding#ssl_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.thumbprint">thumbprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#thumbprint AppServiceSlotCustomHostnameBinding#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_slot_id`<sup>Required</sup> <a name="app_service_slot_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.appServiceSlotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#app_service_slot_id AppServiceSlotCustomHostnameBinding#app_service_slot_id}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#hostname AppServiceSlotCustomHostnameBinding#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#id AppServiceSlotCustomHostnameBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ssl_state`<sup>Optional</sup> <a name="ssl_state" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.sslState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#ssl_state AppServiceSlotCustomHostnameBinding#ssl_state}.

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.thumbprint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#thumbprint AppServiceSlotCustomHostnameBinding#thumbprint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#timeouts AppServiceSlotCustomHostnameBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetSslState">reset_ssl_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetThumbprint">reset_thumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#create AppServiceSlotCustomHostnameBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#delete AppServiceSlotCustomHostnameBinding#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#read AppServiceSlotCustomHostnameBinding#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ssl_state` <a name="reset_ssl_state" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetSslState"></a>

```python
def reset_ssl_state() -> None
```

##### `reset_thumbprint` <a name="reset_thumbprint" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetThumbprint"></a>

```python
def reset_thumbprint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppServiceSlotCustomHostnameBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot_custom_hostname_binding

appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot_custom_hostname_binding

appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot_custom_hostname_binding

appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot_custom_hostname_binding

appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppServiceSlotCustomHostnameBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppServiceSlotCustomHostnameBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppServiceSlotCustomHostnameBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceSlotCustomHostnameBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference">AppServiceSlotCustomHostnameBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.virtualIp">virtual_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.appServiceSlotIdInput">app_service_slot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.sslStateInput">ssl_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.thumbprintInput">thumbprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.appServiceSlotId">app_service_slot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.sslState">ssl_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.timeouts"></a>

```python
timeouts: AppServiceSlotCustomHostnameBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference">AppServiceSlotCustomHostnameBindingTimeoutsOutputReference</a>

---

##### `virtual_ip`<sup>Required</sup> <a name="virtual_ip" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.virtualIp"></a>

```python
virtual_ip: str
```

- *Type:* str

---

##### `app_service_slot_id_input`<sup>Optional</sup> <a name="app_service_slot_id_input" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.appServiceSlotIdInput"></a>

```python
app_service_slot_id_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ssl_state_input`<sup>Optional</sup> <a name="ssl_state_input" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.sslStateInput"></a>

```python
ssl_state_input: str
```

- *Type:* str

---

##### `thumbprint_input`<sup>Optional</sup> <a name="thumbprint_input" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.thumbprintInput"></a>

```python
thumbprint_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppServiceSlotCustomHostnameBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a>]

---

##### `app_service_slot_id`<sup>Required</sup> <a name="app_service_slot_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.appServiceSlotId"></a>

```python
app_service_slot_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ssl_state`<sup>Required</sup> <a name="ssl_state" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.sslState"></a>

```python
ssl_state: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSlotCustomHostnameBindingConfig <a name="AppServiceSlotCustomHostnameBindingConfig" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot_custom_hostname_binding

appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_slot_id: str,
  hostname: str,
  id: str = None,
  ssl_state: str = None,
  thumbprint: str = None,
  timeouts: AppServiceSlotCustomHostnameBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.appServiceSlotId">app_service_slot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#app_service_slot_id AppServiceSlotCustomHostnameBinding#app_service_slot_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#hostname AppServiceSlotCustomHostnameBinding#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#id AppServiceSlotCustomHostnameBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.sslState">ssl_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#ssl_state AppServiceSlotCustomHostnameBinding#ssl_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.thumbprint">thumbprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#thumbprint AppServiceSlotCustomHostnameBinding#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_slot_id`<sup>Required</sup> <a name="app_service_slot_id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.appServiceSlotId"></a>

```python
app_service_slot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#app_service_slot_id AppServiceSlotCustomHostnameBinding#app_service_slot_id}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#hostname AppServiceSlotCustomHostnameBinding#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#id AppServiceSlotCustomHostnameBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ssl_state`<sup>Optional</sup> <a name="ssl_state" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.sslState"></a>

```python
ssl_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#ssl_state AppServiceSlotCustomHostnameBinding#ssl_state}.

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#thumbprint AppServiceSlotCustomHostnameBinding#thumbprint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.timeouts"></a>

```python
timeouts: AppServiceSlotCustomHostnameBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#timeouts AppServiceSlotCustomHostnameBinding#timeouts}

---

### AppServiceSlotCustomHostnameBindingTimeouts <a name="AppServiceSlotCustomHostnameBindingTimeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot_custom_hostname_binding

appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#create AppServiceSlotCustomHostnameBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#delete AppServiceSlotCustomHostnameBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#read AppServiceSlotCustomHostnameBinding#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#create AppServiceSlotCustomHostnameBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#delete AppServiceSlotCustomHostnameBinding#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/app_service_slot_custom_hostname_binding#read AppServiceSlotCustomHostnameBinding#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSlotCustomHostnameBindingTimeoutsOutputReference <a name="AppServiceSlotCustomHostnameBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot_custom_hostname_binding

appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSlotCustomHostnameBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a>]

---



