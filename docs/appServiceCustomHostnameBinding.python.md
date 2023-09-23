# `azurerm_app_service_custom_hostname_binding`

Refer to the Terraform Registory for docs: [`azurerm_app_service_custom_hostname_binding`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding).

# `appServiceCustomHostnameBinding` Submodule <a name="`appServiceCustomHostnameBinding` Submodule" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceCustomHostnameBinding <a name="AppServiceCustomHostnameBinding" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding azurerm_app_service_custom_hostname_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_custom_hostname_binding

appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_name: str,
  hostname: str,
  resource_group_name: str,
  id: str = None,
  ssl_state: str = None,
  thumbprint: str = None,
  timeouts: AppServiceCustomHostnameBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.appServiceName">app_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.sslState">ssl_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.thumbprint">thumbprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_name`<sup>Required</sup> <a name="app_service_name" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.appServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ssl_state`<sup>Optional</sup> <a name="ssl_state" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.sslState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}.

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.thumbprint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#timeouts AppServiceCustomHostnameBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetSslState">reset_ssl_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetThumbprint">reset_thumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#create AppServiceCustomHostnameBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#delete AppServiceCustomHostnameBinding#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#read AppServiceCustomHostnameBinding#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#update AppServiceCustomHostnameBinding#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ssl_state` <a name="reset_ssl_state" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetSslState"></a>

```python
def reset_ssl_state() -> None
```

##### `reset_thumbprint` <a name="reset_thumbprint" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetThumbprint"></a>

```python
def reset_thumbprint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_custom_hostname_binding

appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_custom_hostname_binding

appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_custom_hostname_binding

appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference">AppServiceCustomHostnameBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.virtualIp">virtual_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceNameInput">app_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslStateInput">ssl_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprintInput">thumbprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceName">app_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslState">ssl_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeouts"></a>

```python
timeouts: AppServiceCustomHostnameBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference">AppServiceCustomHostnameBindingTimeoutsOutputReference</a>

---

##### `virtual_ip`<sup>Required</sup> <a name="virtual_ip" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.virtualIp"></a>

```python
virtual_ip: str
```

- *Type:* str

---

##### `app_service_name_input`<sup>Optional</sup> <a name="app_service_name_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceNameInput"></a>

```python
app_service_name_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `ssl_state_input`<sup>Optional</sup> <a name="ssl_state_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslStateInput"></a>

```python
ssl_state_input: str
```

- *Type:* str

---

##### `thumbprint_input`<sup>Optional</sup> <a name="thumbprint_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprintInput"></a>

```python
thumbprint_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppServiceCustomHostnameBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>]

---

##### `app_service_name`<sup>Required</sup> <a name="app_service_name" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceName"></a>

```python
app_service_name: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `ssl_state`<sup>Required</sup> <a name="ssl_state" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslState"></a>

```python
ssl_state: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceCustomHostnameBindingConfig <a name="AppServiceCustomHostnameBindingConfig" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_custom_hostname_binding

appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_name: str,
  hostname: str,
  resource_group_name: str,
  id: str = None,
  ssl_state: str = None,
  thumbprint: str = None,
  timeouts: AppServiceCustomHostnameBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.appServiceName">app_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.sslState">ssl_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.thumbprint">thumbprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_name`<sup>Required</sup> <a name="app_service_name" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.appServiceName"></a>

```python
app_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ssl_state`<sup>Optional</sup> <a name="ssl_state" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.sslState"></a>

```python
ssl_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}.

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.timeouts"></a>

```python
timeouts: AppServiceCustomHostnameBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#timeouts AppServiceCustomHostnameBinding#timeouts}

---

### AppServiceCustomHostnameBindingTimeouts <a name="AppServiceCustomHostnameBindingTimeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_custom_hostname_binding

appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#create AppServiceCustomHostnameBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#delete AppServiceCustomHostnameBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#read AppServiceCustomHostnameBinding#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#update AppServiceCustomHostnameBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#create AppServiceCustomHostnameBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#delete AppServiceCustomHostnameBinding#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#read AppServiceCustomHostnameBinding#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/app_service_custom_hostname_binding#update AppServiceCustomHostnameBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceCustomHostnameBindingTimeoutsOutputReference <a name="AppServiceCustomHostnameBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_custom_hostname_binding

appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceCustomHostnameBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>]

---



