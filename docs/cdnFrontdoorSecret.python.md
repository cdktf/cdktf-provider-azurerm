# `azurerm_cdn_frontdoor_secret`

Refer to the Terraform Registory for docs: [`azurerm_cdn_frontdoor_secret`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret).

# `cdnFrontdoorSecret` Submodule <a name="`cdnFrontdoorSecret` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorSecret <a name="CdnFrontdoorSecret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret azurerm_cdn_frontdoor_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cdn_frontdoor_profile_id: str,
  name: str,
  secret: CdnFrontdoorSecretSecret,
  id: str = None,
  timeouts: CdnFrontdoorSecretTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#cdn_frontdoor_profile_id CdnFrontdoorSecret#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#name CdnFrontdoorSecret#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#id CdnFrontdoorSecret#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.cdnFrontdoorProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#cdn_frontdoor_profile_id CdnFrontdoorSecret#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#name CdnFrontdoorSecret#name}.

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.secret"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#secret CdnFrontdoorSecret#secret}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#id CdnFrontdoorSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#timeouts CdnFrontdoorSecret#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putSecret"></a>

```python
def put_secret(
  customer_certificate: typing.Union[IResolvable, typing.List[CdnFrontdoorSecretSecretCustomerCertificate]]
) -> None
```

###### `customer_certificate`<sup>Required</sup> <a name="customer_certificate" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putSecret.parameter.customerCertificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>]]

customer_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#customer_certificate CdnFrontdoorSecret#customer_certificate}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#create CdnFrontdoorSecret#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#delete CdnFrontdoorSecret#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#read CdnFrontdoorSecret#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileName">cdn_frontdoor_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference">CdnFrontdoorSecretSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference">CdnFrontdoorSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileIdInput">cdn_frontdoor_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.secretInput">secret_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_profile_name`<sup>Required</sup> <a name="cdn_frontdoor_profile_name" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileName"></a>

```python
cdn_frontdoor_profile_name: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.secret"></a>

```python
secret: CdnFrontdoorSecretSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference">CdnFrontdoorSecretSecretOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.timeouts"></a>

```python
timeouts: CdnFrontdoorSecretTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference">CdnFrontdoorSecretTimeoutsOutputReference</a>

---

##### `cdn_frontdoor_profile_id_input`<sup>Optional</sup> <a name="cdn_frontdoor_profile_id_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileIdInput"></a>

```python
cdn_frontdoor_profile_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.secretInput"></a>

```python
secret_input: CdnFrontdoorSecretSecret
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CdnFrontdoorSecretTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>, cdktf.IResolvable]

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileId"></a>

```python
cdn_frontdoor_profile_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorSecretConfig <a name="CdnFrontdoorSecretConfig" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cdn_frontdoor_profile_id: str,
  name: str,
  secret: CdnFrontdoorSecretSecret,
  id: str = None,
  timeouts: CdnFrontdoorSecretTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#cdn_frontdoor_profile_id CdnFrontdoorSecret#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#name CdnFrontdoorSecret#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#id CdnFrontdoorSecret#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.cdnFrontdoorProfileId"></a>

```python
cdn_frontdoor_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#cdn_frontdoor_profile_id CdnFrontdoorSecret#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#name CdnFrontdoorSecret#name}.

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.secret"></a>

```python
secret: CdnFrontdoorSecretSecret
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#secret CdnFrontdoorSecret#secret}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#id CdnFrontdoorSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.timeouts"></a>

```python
timeouts: CdnFrontdoorSecretTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#timeouts CdnFrontdoorSecret#timeouts}

---

### CdnFrontdoorSecretSecret <a name="CdnFrontdoorSecretSecret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecretSecret(
  customer_certificate: typing.Union[IResolvable, typing.List[CdnFrontdoorSecretSecretCustomerCertificate]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret.property.customerCertificate">customer_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>]]</code> | customer_certificate block. |

---

##### `customer_certificate`<sup>Required</sup> <a name="customer_certificate" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret.property.customerCertificate"></a>

```python
customer_certificate: typing.Union[IResolvable, typing.List[CdnFrontdoorSecretSecretCustomerCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>]]

customer_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#customer_certificate CdnFrontdoorSecret#customer_certificate}

---

### CdnFrontdoorSecretSecretCustomerCertificate <a name="CdnFrontdoorSecretSecretCustomerCertificate" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate(
  key_vault_certificate_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate.property.keyVaultCertificateId">key_vault_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#key_vault_certificate_id CdnFrontdoorSecret#key_vault_certificate_id}. |

---

##### `key_vault_certificate_id`<sup>Required</sup> <a name="key_vault_certificate_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate.property.keyVaultCertificateId"></a>

```python
key_vault_certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#key_vault_certificate_id CdnFrontdoorSecret#key_vault_certificate_id}.

---

### CdnFrontdoorSecretTimeouts <a name="CdnFrontdoorSecretTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#create CdnFrontdoorSecret#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#delete CdnFrontdoorSecret#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#read CdnFrontdoorSecret#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#create CdnFrontdoorSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#delete CdnFrontdoorSecret#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/cdn_frontdoor_secret#read CdnFrontdoorSecret#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorSecretSecretCustomerCertificateList <a name="CdnFrontdoorSecretSecretCustomerCertificateList" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnFrontdoorSecretSecretCustomerCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CdnFrontdoorSecretSecretCustomerCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>]]

---


### CdnFrontdoorSecretSecretCustomerCertificateOutputReference <a name="CdnFrontdoorSecretSecretCustomerCertificateOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.keyVaultCertificateIdInput">key_vault_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.keyVaultCertificateId">key_vault_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_vault_certificate_id_input`<sup>Optional</sup> <a name="key_vault_certificate_id_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.keyVaultCertificateIdInput"></a>

```python
key_vault_certificate_id_input: str
```

- *Type:* str

---

##### `key_vault_certificate_id`<sup>Required</sup> <a name="key_vault_certificate_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.keyVaultCertificateId"></a>

```python
key_vault_certificate_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CdnFrontdoorSecretSecretCustomerCertificate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>, cdktf.IResolvable]

---


### CdnFrontdoorSecretSecretOutputReference <a name="CdnFrontdoorSecretSecretOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.putCustomerCertificate">put_customer_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_certificate` <a name="put_customer_certificate" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.putCustomerCertificate"></a>

```python
def put_customer_certificate(
  value: typing.Union[IResolvable, typing.List[CdnFrontdoorSecretSecretCustomerCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.putCustomerCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.customerCertificate">customer_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList">CdnFrontdoorSecretSecretCustomerCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.customerCertificateInput">customer_certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_certificate`<sup>Required</sup> <a name="customer_certificate" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.customerCertificate"></a>

```python
customer_certificate: CdnFrontdoorSecretSecretCustomerCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList">CdnFrontdoorSecretSecretCustomerCertificateList</a>

---

##### `customer_certificate_input`<sup>Optional</sup> <a name="customer_certificate_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.customerCertificateInput"></a>

```python
customer_certificate_input: typing.Union[IResolvable, typing.List[CdnFrontdoorSecretSecretCustomerCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.internalValue"></a>

```python
internal_value: CdnFrontdoorSecretSecret
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a>

---


### CdnFrontdoorSecretTimeoutsOutputReference <a name="CdnFrontdoorSecretTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_secret

cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CdnFrontdoorSecretTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>, cdktf.IResolvable]

---



