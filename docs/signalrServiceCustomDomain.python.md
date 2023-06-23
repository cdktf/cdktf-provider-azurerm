# `azurerm_signalr_service_custom_domain`

Refer to the Terraform Registory for docs: [`azurerm_signalr_service_custom_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain).

# `signalrServiceCustomDomain` Submodule <a name="`signalrServiceCustomDomain` Submodule" id="@cdktf/provider-azurerm.signalrServiceCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrServiceCustomDomain <a name="SignalrServiceCustomDomain" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain azurerm_signalr_service_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_custom_domain

signalrServiceCustomDomain.SignalrServiceCustomDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  name: str,
  signalr_custom_certificate_id: str,
  signalr_service_id: str,
  id: str = None,
  timeouts: SignalrServiceCustomDomainTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#domain_name SignalrServiceCustomDomain#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#name SignalrServiceCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.signalrCustomCertificateId">signalr_custom_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#signalr_custom_certificate_id SignalrServiceCustomDomain#signalr_custom_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.signalrServiceId">signalr_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#signalr_service_id SignalrServiceCustomDomain#signalr_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#id SignalrServiceCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#domain_name SignalrServiceCustomDomain#domain_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#name SignalrServiceCustomDomain#name}.

---

##### `signalr_custom_certificate_id`<sup>Required</sup> <a name="signalr_custom_certificate_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.signalrCustomCertificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#signalr_custom_certificate_id SignalrServiceCustomDomain#signalr_custom_certificate_id}.

---

##### `signalr_service_id`<sup>Required</sup> <a name="signalr_service_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.signalrServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#signalr_service_id SignalrServiceCustomDomain#signalr_service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#id SignalrServiceCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#timeouts SignalrServiceCustomDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#create SignalrServiceCustomDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#delete SignalrServiceCustomDomain#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#read SignalrServiceCustomDomain#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_custom_domain

signalrServiceCustomDomain.SignalrServiceCustomDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_custom_domain

signalrServiceCustomDomain.SignalrServiceCustomDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_custom_domain

signalrServiceCustomDomain.SignalrServiceCustomDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference">SignalrServiceCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrCustomCertificateIdInput">signalr_custom_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrServiceIdInput">signalr_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrCustomCertificateId">signalr_custom_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrServiceId">signalr_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.timeouts"></a>

```python
timeouts: SignalrServiceCustomDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference">SignalrServiceCustomDomainTimeoutsOutputReference</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `signalr_custom_certificate_id_input`<sup>Optional</sup> <a name="signalr_custom_certificate_id_input" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrCustomCertificateIdInput"></a>

```python
signalr_custom_certificate_id_input: str
```

- *Type:* str

---

##### `signalr_service_id_input`<sup>Optional</sup> <a name="signalr_service_id_input" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrServiceIdInput"></a>

```python
signalr_service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SignalrServiceCustomDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `signalr_custom_certificate_id`<sup>Required</sup> <a name="signalr_custom_certificate_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrCustomCertificateId"></a>

```python
signalr_custom_certificate_id: str
```

- *Type:* str

---

##### `signalr_service_id`<sup>Required</sup> <a name="signalr_service_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrServiceId"></a>

```python
signalr_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrServiceCustomDomainConfig <a name="SignalrServiceCustomDomainConfig" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_custom_domain

signalrServiceCustomDomain.SignalrServiceCustomDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  name: str,
  signalr_custom_certificate_id: str,
  signalr_service_id: str,
  id: str = None,
  timeouts: SignalrServiceCustomDomainTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#domain_name SignalrServiceCustomDomain#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#name SignalrServiceCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.signalrCustomCertificateId">signalr_custom_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#signalr_custom_certificate_id SignalrServiceCustomDomain#signalr_custom_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.signalrServiceId">signalr_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#signalr_service_id SignalrServiceCustomDomain#signalr_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#id SignalrServiceCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#domain_name SignalrServiceCustomDomain#domain_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#name SignalrServiceCustomDomain#name}.

---

##### `signalr_custom_certificate_id`<sup>Required</sup> <a name="signalr_custom_certificate_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.signalrCustomCertificateId"></a>

```python
signalr_custom_certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#signalr_custom_certificate_id SignalrServiceCustomDomain#signalr_custom_certificate_id}.

---

##### `signalr_service_id`<sup>Required</sup> <a name="signalr_service_id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.signalrServiceId"></a>

```python
signalr_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#signalr_service_id SignalrServiceCustomDomain#signalr_service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#id SignalrServiceCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.timeouts"></a>

```python
timeouts: SignalrServiceCustomDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#timeouts SignalrServiceCustomDomain#timeouts}

---

### SignalrServiceCustomDomainTimeouts <a name="SignalrServiceCustomDomainTimeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_custom_domain

signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#create SignalrServiceCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#delete SignalrServiceCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#read SignalrServiceCustomDomain#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#create SignalrServiceCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#delete SignalrServiceCustomDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/signalr_service_custom_domain#read SignalrServiceCustomDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrServiceCustomDomainTimeoutsOutputReference <a name="SignalrServiceCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import signalr_service_custom_domain

signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SignalrServiceCustomDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>]

---



