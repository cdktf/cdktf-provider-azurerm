# `azurerm_federated_identity_credential`

Refer to the Terraform Registory for docs: [`azurerm_federated_identity_credential`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential).

# `federatedIdentityCredential` Submodule <a name="`federatedIdentityCredential` Submodule" id="@cdktf/provider-azurerm.federatedIdentityCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedIdentityCredential <a name="FederatedIdentityCredential" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential azurerm_federated_identity_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import federated_identity_credential

federatedIdentityCredential.FederatedIdentityCredential(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audience: typing.List[str],
  issuer: str,
  name: str,
  parent_id: str,
  resource_group_name: str,
  subject: str,
  id: str = None,
  timeouts: FederatedIdentityCredentialTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.audience">audience</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#audience FederatedIdentityCredential#audience}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#issuer FederatedIdentityCredential#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#name FederatedIdentityCredential#name}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#parent_id FederatedIdentityCredential#parent_id}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#resource_group_name FederatedIdentityCredential#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#subject FederatedIdentityCredential#subject}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#id FederatedIdentityCredential#id}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts">FederatedIdentityCredentialTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.audience"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#audience FederatedIdentityCredential#audience}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#issuer FederatedIdentityCredential#issuer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#name FederatedIdentityCredential#name}.

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.parentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#parent_id FederatedIdentityCredential#parent_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#resource_group_name FederatedIdentityCredential#resource_group_name}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.subject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#subject FederatedIdentityCredential#subject}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#id FederatedIdentityCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts">FederatedIdentityCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#timeouts FederatedIdentityCredential#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#create FederatedIdentityCredential#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#delete FederatedIdentityCredential#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#read FederatedIdentityCredential#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import federated_identity_credential

federatedIdentityCredential.FederatedIdentityCredential.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import federated_identity_credential

federatedIdentityCredential.FederatedIdentityCredential.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import federated_identity_credential

federatedIdentityCredential.FederatedIdentityCredential.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference">FederatedIdentityCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.audienceInput">audience_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts">FederatedIdentityCredentialTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.audience">audience</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.subject">subject</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.timeouts"></a>

```python
timeouts: FederatedIdentityCredentialTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference">FederatedIdentityCredentialTimeoutsOutputReference</a>

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.audienceInput"></a>

```python
audience_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FederatedIdentityCredentialTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts">FederatedIdentityCredentialTimeouts</a>]

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.audience"></a>

```python
audience: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredential.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedIdentityCredentialConfig <a name="FederatedIdentityCredentialConfig" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import federated_identity_credential

federatedIdentityCredential.FederatedIdentityCredentialConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audience: typing.List[str],
  issuer: str,
  name: str,
  parent_id: str,
  resource_group_name: str,
  subject: str,
  id: str = None,
  timeouts: FederatedIdentityCredentialTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.audience">audience</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#audience FederatedIdentityCredential#audience}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#issuer FederatedIdentityCredential#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#name FederatedIdentityCredential#name}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#parent_id FederatedIdentityCredential#parent_id}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#resource_group_name FederatedIdentityCredential#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#subject FederatedIdentityCredential#subject}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#id FederatedIdentityCredential#id}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts">FederatedIdentityCredentialTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.audience"></a>

```python
audience: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#audience FederatedIdentityCredential#audience}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#issuer FederatedIdentityCredential#issuer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#name FederatedIdentityCredential#name}.

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#parent_id FederatedIdentityCredential#parent_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#resource_group_name FederatedIdentityCredential#resource_group_name}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#subject FederatedIdentityCredential#subject}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#id FederatedIdentityCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialConfig.property.timeouts"></a>

```python
timeouts: FederatedIdentityCredentialTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts">FederatedIdentityCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#timeouts FederatedIdentityCredential#timeouts}

---

### FederatedIdentityCredentialTimeouts <a name="FederatedIdentityCredentialTimeouts" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import federated_identity_credential

federatedIdentityCredential.FederatedIdentityCredentialTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#create FederatedIdentityCredential#create}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#delete FederatedIdentityCredential#delete}. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#read FederatedIdentityCredential#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#create FederatedIdentityCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#delete FederatedIdentityCredential#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/federated_identity_credential#read FederatedIdentityCredential#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedIdentityCredentialTimeoutsOutputReference <a name="FederatedIdentityCredentialTimeoutsOutputReference" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import federated_identity_credential

federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts">FederatedIdentityCredentialTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FederatedIdentityCredentialTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.federatedIdentityCredential.FederatedIdentityCredentialTimeouts">FederatedIdentityCredentialTimeouts</a>]

---



