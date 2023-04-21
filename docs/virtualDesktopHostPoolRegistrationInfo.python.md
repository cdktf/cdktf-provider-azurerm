# `azurerm_virtual_desktop_host_pool_registration_info`

Refer to the Terraform Registory for docs: [`azurerm_virtual_desktop_host_pool_registration_info`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info).

# `virtualDesktopHostPoolRegistrationInfo` Submodule <a name="`virtualDesktopHostPoolRegistrationInfo` Submodule" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopHostPoolRegistrationInfo <a name="VirtualDesktopHostPoolRegistrationInfo" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info azurerm_virtual_desktop_host_pool_registration_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool_registration_info

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expiration_date: str,
  hostpool_id: str,
  id: str = None,
  timeouts: VirtualDesktopHostPoolRegistrationInfoTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.expirationDate">expiration_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#expiration_date VirtualDesktopHostPoolRegistrationInfo#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.hostpoolId">hostpool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#hostpool_id VirtualDesktopHostPoolRegistrationInfo#hostpool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#id VirtualDesktopHostPoolRegistrationInfo#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.expirationDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#expiration_date VirtualDesktopHostPoolRegistrationInfo#expiration_date}.

---

##### `hostpool_id`<sup>Required</sup> <a name="hostpool_id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.hostpoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#hostpool_id VirtualDesktopHostPoolRegistrationInfo#hostpool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#id VirtualDesktopHostPoolRegistrationInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#timeouts VirtualDesktopHostPoolRegistrationInfo#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#create VirtualDesktopHostPoolRegistrationInfo#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#delete VirtualDesktopHostPoolRegistrationInfo#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#read VirtualDesktopHostPoolRegistrationInfo#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#update VirtualDesktopHostPoolRegistrationInfo#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool_registration_info

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool_registration_info

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool_registration_info

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference">VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDateInput">expiration_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolIdInput">hostpool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolId">hostpool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeouts"></a>

```python
timeouts: VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference">VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `expiration_date_input`<sup>Optional</sup> <a name="expiration_date_input" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDateInput"></a>

```python
expiration_date_input: str
```

- *Type:* str

---

##### `hostpool_id_input`<sup>Optional</sup> <a name="hostpool_id_input" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolIdInput"></a>

```python
hostpool_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VirtualDesktopHostPoolRegistrationInfoTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>, cdktf.IResolvable]

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `hostpool_id`<sup>Required</sup> <a name="hostpool_id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolId"></a>

```python
hostpool_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopHostPoolRegistrationInfoConfig <a name="VirtualDesktopHostPoolRegistrationInfoConfig" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool_registration_info

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expiration_date: str,
  hostpool_id: str,
  id: str = None,
  timeouts: VirtualDesktopHostPoolRegistrationInfoTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.expirationDate">expiration_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#expiration_date VirtualDesktopHostPoolRegistrationInfo#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.hostpoolId">hostpool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#hostpool_id VirtualDesktopHostPoolRegistrationInfo#hostpool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#id VirtualDesktopHostPoolRegistrationInfo#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#expiration_date VirtualDesktopHostPoolRegistrationInfo#expiration_date}.

---

##### `hostpool_id`<sup>Required</sup> <a name="hostpool_id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.hostpoolId"></a>

```python
hostpool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#hostpool_id VirtualDesktopHostPoolRegistrationInfo#hostpool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#id VirtualDesktopHostPoolRegistrationInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.timeouts"></a>

```python
timeouts: VirtualDesktopHostPoolRegistrationInfoTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#timeouts VirtualDesktopHostPoolRegistrationInfo#timeouts}

---

### VirtualDesktopHostPoolRegistrationInfoTimeouts <a name="VirtualDesktopHostPoolRegistrationInfoTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool_registration_info

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#create VirtualDesktopHostPoolRegistrationInfo#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#delete VirtualDesktopHostPoolRegistrationInfo#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#read VirtualDesktopHostPoolRegistrationInfo#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#update VirtualDesktopHostPoolRegistrationInfo#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#create VirtualDesktopHostPoolRegistrationInfo#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#delete VirtualDesktopHostPoolRegistrationInfo#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#read VirtualDesktopHostPoolRegistrationInfo#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/virtual_desktop_host_pool_registration_info#update VirtualDesktopHostPoolRegistrationInfo#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference <a name="VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_host_pool_registration_info

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VirtualDesktopHostPoolRegistrationInfoTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>, cdktf.IResolvable]

---



