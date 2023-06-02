# `azurerm_app_service_public_certificate`

Refer to the Terraform Registory for docs: [`azurerm_app_service_public_certificate`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate).

# `appServicePublicCertificate` Submodule <a name="`appServicePublicCertificate` Submodule" id="@cdktf/provider-azurerm.appServicePublicCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServicePublicCertificate <a name="AppServicePublicCertificate" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate azurerm_app_service_public_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_public_certificate

appServicePublicCertificate.AppServicePublicCertificate(
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
  blob: str,
  certificate_location: str,
  certificate_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: AppServicePublicCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.appServiceName">app_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#app_service_name AppServicePublicCertificate#app_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.blob">blob</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#blob AppServicePublicCertificate#blob}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.certificateLocation">certificate_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#certificate_location AppServicePublicCertificate#certificate_location}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.certificateName">certificate_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#certificate_name AppServicePublicCertificate#certificate_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#resource_group_name AppServicePublicCertificate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#id AppServicePublicCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts">AppServicePublicCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_name`<sup>Required</sup> <a name="app_service_name" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.appServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#app_service_name AppServicePublicCertificate#app_service_name}.

---

##### `blob`<sup>Required</sup> <a name="blob" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.blob"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#blob AppServicePublicCertificate#blob}.

---

##### `certificate_location`<sup>Required</sup> <a name="certificate_location" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.certificateLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#certificate_location AppServicePublicCertificate#certificate_location}.

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.certificateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#certificate_name AppServicePublicCertificate#certificate_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#resource_group_name AppServicePublicCertificate#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#id AppServicePublicCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts">AppServicePublicCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#timeouts AppServicePublicCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#create AppServicePublicCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#delete AppServicePublicCertificate#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#read AppServicePublicCertificate#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#update AppServicePublicCertificate#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_public_certificate

appServicePublicCertificate.AppServicePublicCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_public_certificate

appServicePublicCertificate.AppServicePublicCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_public_certificate

appServicePublicCertificate.AppServicePublicCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference">AppServicePublicCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.appServiceNameInput">app_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.blobInput">blob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.certificateLocationInput">certificate_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts">AppServicePublicCertificateTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.appServiceName">app_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.blob">blob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.certificateLocation">certificate_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.timeouts"></a>

```python
timeouts: AppServicePublicCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference">AppServicePublicCertificateTimeoutsOutputReference</a>

---

##### `app_service_name_input`<sup>Optional</sup> <a name="app_service_name_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.appServiceNameInput"></a>

```python
app_service_name_input: str
```

- *Type:* str

---

##### `blob_input`<sup>Optional</sup> <a name="blob_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.blobInput"></a>

```python
blob_input: str
```

- *Type:* str

---

##### `certificate_location_input`<sup>Optional</sup> <a name="certificate_location_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.certificateLocationInput"></a>

```python
certificate_location_input: str
```

- *Type:* str

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AppServicePublicCertificateTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts">AppServicePublicCertificateTimeouts</a>, cdktf.IResolvable]

---

##### `app_service_name`<sup>Required</sup> <a name="app_service_name" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.appServiceName"></a>

```python
app_service_name: str
```

- *Type:* str

---

##### `blob`<sup>Required</sup> <a name="blob" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.blob"></a>

```python
blob: str
```

- *Type:* str

---

##### `certificate_location`<sup>Required</sup> <a name="certificate_location" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.certificateLocation"></a>

```python
certificate_location: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppServicePublicCertificateConfig <a name="AppServicePublicCertificateConfig" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_public_certificate

appServicePublicCertificate.AppServicePublicCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_name: str,
  blob: str,
  certificate_location: str,
  certificate_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: AppServicePublicCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.appServiceName">app_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#app_service_name AppServicePublicCertificate#app_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.blob">blob</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#blob AppServicePublicCertificate#blob}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.certificateLocation">certificate_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#certificate_location AppServicePublicCertificate#certificate_location}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.certificateName">certificate_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#certificate_name AppServicePublicCertificate#certificate_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#resource_group_name AppServicePublicCertificate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#id AppServicePublicCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts">AppServicePublicCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_name`<sup>Required</sup> <a name="app_service_name" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.appServiceName"></a>

```python
app_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#app_service_name AppServicePublicCertificate#app_service_name}.

---

##### `blob`<sup>Required</sup> <a name="blob" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.blob"></a>

```python
blob: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#blob AppServicePublicCertificate#blob}.

---

##### `certificate_location`<sup>Required</sup> <a name="certificate_location" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.certificateLocation"></a>

```python
certificate_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#certificate_location AppServicePublicCertificate#certificate_location}.

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#certificate_name AppServicePublicCertificate#certificate_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#resource_group_name AppServicePublicCertificate#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#id AppServicePublicCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateConfig.property.timeouts"></a>

```python
timeouts: AppServicePublicCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts">AppServicePublicCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#timeouts AppServicePublicCertificate#timeouts}

---

### AppServicePublicCertificateTimeouts <a name="AppServicePublicCertificateTimeouts" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_public_certificate

appServicePublicCertificate.AppServicePublicCertificateTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#create AppServicePublicCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#delete AppServicePublicCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#read AppServicePublicCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#update AppServicePublicCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#create AppServicePublicCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#delete AppServicePublicCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#read AppServicePublicCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/app_service_public_certificate#update AppServicePublicCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServicePublicCertificateTimeoutsOutputReference <a name="AppServicePublicCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_public_certificate

appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts">AppServicePublicCertificateTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppServicePublicCertificateTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.appServicePublicCertificate.AppServicePublicCertificateTimeouts">AppServicePublicCertificateTimeouts</a>, cdktf.IResolvable]

---



