# `azurerm_media_content_key_policy`

Refer to the Terraform Registory for docs: [`azurerm_media_content_key_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy).

# `mediaContentKeyPolicy` Submodule <a name="`mediaContentKeyPolicy` Submodule" id="@cdktf/provider-azurerm.mediaContentKeyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaContentKeyPolicy <a name="MediaContentKeyPolicy" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy azurerm_media_content_key_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  media_services_account_name: str,
  name: str,
  policy_option: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOption]],
  resource_group_name: str,
  description: str = None,
  id: str = None,
  timeouts: MediaContentKeyPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.policyOption">policy_option</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]]</code> | policy_option block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.mediaServicesAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}.

---

##### `policy_option`<sup>Required</sup> <a name="policy_option" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.policyOption"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]]

policy_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#policy_option MediaContentKeyPolicy#policy_option}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#timeouts MediaContentKeyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption">put_policy_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_policy_option` <a name="put_policy_option" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption"></a>

```python
def put_policy_option(
  value: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#create MediaContentKeyPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#delete MediaContentKeyPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#read MediaContentKeyPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#update MediaContentKeyPolicy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOption">policy_option</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList">MediaContentKeyPolicyPolicyOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference">MediaContentKeyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountNameInput">media_services_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOptionInput">policy_option_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_option`<sup>Required</sup> <a name="policy_option" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOption"></a>

```python
policy_option: MediaContentKeyPolicyPolicyOptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList">MediaContentKeyPolicyPolicyOptionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeouts"></a>

```python
timeouts: MediaContentKeyPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference">MediaContentKeyPolicyTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `media_services_account_name_input`<sup>Optional</sup> <a name="media_services_account_name_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountNameInput"></a>

```python
media_services_account_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_option_input`<sup>Optional</sup> <a name="policy_option_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOptionInput"></a>

```python
policy_option_input: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MediaContentKeyPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaContentKeyPolicyConfig <a name="MediaContentKeyPolicyConfig" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  media_services_account_name: str,
  name: str,
  policy_option: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOption]],
  resource_group_name: str,
  description: str = None,
  id: str = None,
  timeouts: MediaContentKeyPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.mediaServicesAccountName">media_services_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.policyOption">policy_option</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]]</code> | policy_option block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_services_account_name`<sup>Required</sup> <a name="media_services_account_name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.mediaServicesAccountName"></a>

```python
media_services_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}.

---

##### `policy_option`<sup>Required</sup> <a name="policy_option" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.policyOption"></a>

```python
policy_option: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]]

policy_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#policy_option MediaContentKeyPolicy#policy_option}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.timeouts"></a>

```python
timeouts: MediaContentKeyPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#timeouts MediaContentKeyPolicy#timeouts}

---

### MediaContentKeyPolicyPolicyOption <a name="MediaContentKeyPolicyPolicyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption(
  name: str,
  clear_key_configuration_enabled: typing.Union[bool, IResolvable] = None,
  fairplay_configuration: MediaContentKeyPolicyPolicyOptionFairplayConfiguration = None,
  open_restriction_enabled: typing.Union[bool, IResolvable] = None,
  playready_configuration_license: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense]] = None,
  playready_response_custom_data: str = None,
  token_restriction: MediaContentKeyPolicyPolicyOptionTokenRestriction = None,
  widevine_configuration_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.clearKeyConfigurationEnabled">clear_key_configuration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#clear_key_configuration_enabled MediaContentKeyPolicy#clear_key_configuration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.fairplayConfiguration">fairplay_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | fairplay_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.openRestrictionEnabled">open_restriction_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#open_restriction_enabled MediaContentKeyPolicy#open_restriction_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyConfigurationLicense">playready_configuration_license</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>]]</code> | playready_configuration_license block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyResponseCustomData">playready_response_custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#playready_response_custom_data MediaContentKeyPolicy#playready_response_custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.tokenRestriction">token_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | token_restriction block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.widevineConfigurationTemplate">widevine_configuration_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#widevine_configuration_template MediaContentKeyPolicy#widevine_configuration_template}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}.

---

##### `clear_key_configuration_enabled`<sup>Optional</sup> <a name="clear_key_configuration_enabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.clearKeyConfigurationEnabled"></a>

```python
clear_key_configuration_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#clear_key_configuration_enabled MediaContentKeyPolicy#clear_key_configuration_enabled}.

---

##### `fairplay_configuration`<sup>Optional</sup> <a name="fairplay_configuration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.fairplayConfiguration"></a>

```python
fairplay_configuration: MediaContentKeyPolicyPolicyOptionFairplayConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

fairplay_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#fairplay_configuration MediaContentKeyPolicy#fairplay_configuration}

---

##### `open_restriction_enabled`<sup>Optional</sup> <a name="open_restriction_enabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.openRestrictionEnabled"></a>

```python
open_restriction_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#open_restriction_enabled MediaContentKeyPolicy#open_restriction_enabled}.

---

##### `playready_configuration_license`<sup>Optional</sup> <a name="playready_configuration_license" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyConfigurationLicense"></a>

```python
playready_configuration_license: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>]]

playready_configuration_license block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#playready_configuration_license MediaContentKeyPolicy#playready_configuration_license}

---

##### `playready_response_custom_data`<sup>Optional</sup> <a name="playready_response_custom_data" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyResponseCustomData"></a>

```python
playready_response_custom_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#playready_response_custom_data MediaContentKeyPolicy#playready_response_custom_data}.

---

##### `token_restriction`<sup>Optional</sup> <a name="token_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.tokenRestriction"></a>

```python
token_restriction: MediaContentKeyPolicyPolicyOptionTokenRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

token_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#token_restriction MediaContentKeyPolicy#token_restriction}

---

##### `widevine_configuration_template`<sup>Optional</sup> <a name="widevine_configuration_template" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.widevineConfigurationTemplate"></a>

```python
widevine_configuration_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#widevine_configuration_template MediaContentKeyPolicy#widevine_configuration_template}.

---

### MediaContentKeyPolicyPolicyOptionFairplayConfiguration <a name="MediaContentKeyPolicyPolicyOptionFairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration(
  ask: str = None,
  offline_rental_configuration: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration = None,
  pfx: str = None,
  pfx_password: str = None,
  rental_and_lease_key_type: str = None,
  rental_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.ask">ask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#ask MediaContentKeyPolicy#ask}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.offlineRentalConfiguration">offline_rental_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | offline_rental_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfx">pfx</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#pfx MediaContentKeyPolicy#pfx}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfxPassword">pfx_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#pfx_password MediaContentKeyPolicy#pfx_password}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalAndLeaseKeyType">rental_and_lease_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalDurationSeconds">rental_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}. |

---

##### `ask`<sup>Optional</sup> <a name="ask" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.ask"></a>

```python
ask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#ask MediaContentKeyPolicy#ask}.

---

##### `offline_rental_configuration`<sup>Optional</sup> <a name="offline_rental_configuration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.offlineRentalConfiguration"></a>

```python
offline_rental_configuration: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

offline_rental_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#offline_rental_configuration MediaContentKeyPolicy#offline_rental_configuration}

---

##### `pfx`<sup>Optional</sup> <a name="pfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfx"></a>

```python
pfx: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#pfx MediaContentKeyPolicy#pfx}.

---

##### `pfx_password`<sup>Optional</sup> <a name="pfx_password" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfxPassword"></a>

```python
pfx_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#pfx_password MediaContentKeyPolicy#pfx_password}.

---

##### `rental_and_lease_key_type`<sup>Optional</sup> <a name="rental_and_lease_key_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalAndLeaseKeyType"></a>

```python
rental_and_lease_key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}.

---

##### `rental_duration_seconds`<sup>Optional</sup> <a name="rental_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalDurationSeconds"></a>

```python
rental_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}.

---

### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration(
  playback_duration_seconds: typing.Union[int, float] = None,
  storage_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.playbackDurationSeconds">playback_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.storageDurationSeconds">storage_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}. |

---

##### `playback_duration_seconds`<sup>Optional</sup> <a name="playback_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.playbackDurationSeconds"></a>

```python
playback_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}.

---

##### `storage_duration_seconds`<sup>Optional</sup> <a name="storage_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.storageDurationSeconds"></a>

```python
storage_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense(
  allow_test_devices: typing.Union[bool, IResolvable] = None,
  begin_date: str = None,
  content_key_location_from_header_enabled: typing.Union[bool, IResolvable] = None,
  content_key_location_from_key_id: str = None,
  content_type: str = None,
  expiration_date: str = None,
  grace_period: str = None,
  license_type: str = None,
  play_right: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight = None,
  relative_begin_date: str = None,
  relative_expiration_date: str = None,
  security_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.allowTestDevices">allow_test_devices</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#allow_test_devices MediaContentKeyPolicy#allow_test_devices}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.beginDate">begin_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#begin_date MediaContentKeyPolicy#begin_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromHeaderEnabled">content_key_location_from_header_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#content_key_location_from_header_enabled MediaContentKeyPolicy#content_key_location_from_header_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromKeyId">content_key_location_from_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#content_key_location_from_key_id MediaContentKeyPolicy#content_key_location_from_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#content_type MediaContentKeyPolicy#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.expirationDate">expiration_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#expiration_date MediaContentKeyPolicy#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.gracePeriod">grace_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#grace_period MediaContentKeyPolicy#grace_period}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#license_type MediaContentKeyPolicy#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.playRight">play_right</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | play_right block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeBeginDate">relative_begin_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#relative_begin_date MediaContentKeyPolicy#relative_begin_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeExpirationDate">relative_expiration_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#relative_expiration_date MediaContentKeyPolicy#relative_expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.securityLevel">security_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#security_level MediaContentKeyPolicy#security_level}. |

---

##### `allow_test_devices`<sup>Optional</sup> <a name="allow_test_devices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.allowTestDevices"></a>

```python
allow_test_devices: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#allow_test_devices MediaContentKeyPolicy#allow_test_devices}.

---

##### `begin_date`<sup>Optional</sup> <a name="begin_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.beginDate"></a>

```python
begin_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#begin_date MediaContentKeyPolicy#begin_date}.

---

##### `content_key_location_from_header_enabled`<sup>Optional</sup> <a name="content_key_location_from_header_enabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromHeaderEnabled"></a>

```python
content_key_location_from_header_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#content_key_location_from_header_enabled MediaContentKeyPolicy#content_key_location_from_header_enabled}.

---

##### `content_key_location_from_key_id`<sup>Optional</sup> <a name="content_key_location_from_key_id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromKeyId"></a>

```python
content_key_location_from_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#content_key_location_from_key_id MediaContentKeyPolicy#content_key_location_from_key_id}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#content_type MediaContentKeyPolicy#content_type}.

---

##### `expiration_date`<sup>Optional</sup> <a name="expiration_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#expiration_date MediaContentKeyPolicy#expiration_date}.

---

##### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.gracePeriod"></a>

```python
grace_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#grace_period MediaContentKeyPolicy#grace_period}.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#license_type MediaContentKeyPolicy#license_type}.

---

##### `play_right`<sup>Optional</sup> <a name="play_right" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.playRight"></a>

```python
play_right: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

play_right block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#play_right MediaContentKeyPolicy#play_right}

---

##### `relative_begin_date`<sup>Optional</sup> <a name="relative_begin_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeBeginDate"></a>

```python
relative_begin_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#relative_begin_date MediaContentKeyPolicy#relative_begin_date}.

---

##### `relative_expiration_date`<sup>Optional</sup> <a name="relative_expiration_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeExpirationDate"></a>

```python
relative_expiration_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#relative_expiration_date MediaContentKeyPolicy#relative_expiration_date}.

---

##### `security_level`<sup>Optional</sup> <a name="security_level" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#security_level MediaContentKeyPolicy#security_level}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight(
  agc_and_color_stripe_restriction: typing.Union[int, float] = None,
  allow_passing_video_content_to_unknown_output: str = None,
  analog_video_opl: typing.Union[int, float] = None,
  compressed_digital_audio_opl: typing.Union[int, float] = None,
  compressed_digital_video_opl: typing.Union[int, float] = None,
  digital_video_only_content_restriction: typing.Union[bool, IResolvable] = None,
  explicit_analog_television_output_restriction: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction = None,
  first_play_expiration: str = None,
  image_constraint_for_analog_component_video_restriction: typing.Union[bool, IResolvable] = None,
  image_constraint_for_analog_computer_monitor_restriction: typing.Union[bool, IResolvable] = None,
  scms_restriction: typing.Union[int, float] = None,
  uncompressed_digital_audio_opl: typing.Union[int, float] = None,
  uncompressed_digital_video_opl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.agcAndColorStripeRestriction">agc_and_color_stripe_restriction</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.allowPassingVideoContentToUnknownOutput">allow_passing_video_content_to_unknown_output</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.analogVideoOpl">analog_video_opl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#analog_video_opl MediaContentKeyPolicy#analog_video_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalAudioOpl">compressed_digital_audio_opl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalVideoOpl">compressed_digital_video_opl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#compressed_digital_video_opl MediaContentKeyPolicy#compressed_digital_video_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.digitalVideoOnlyContentRestriction">digital_video_only_content_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.explicitAnalogTelevisionOutputRestriction">explicit_analog_television_output_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | explicit_analog_television_output_restriction block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.firstPlayExpiration">first_play_expiration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#first_play_expiration MediaContentKeyPolicy#first_play_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComponentVideoRestriction">image_constraint_for_analog_component_video_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComputerMonitorRestriction">image_constraint_for_analog_computer_monitor_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.scmsRestriction">scms_restriction</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#scms_restriction MediaContentKeyPolicy#scms_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalAudioOpl">uncompressed_digital_audio_opl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalVideoOpl">uncompressed_digital_video_opl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}. |

---

##### `agc_and_color_stripe_restriction`<sup>Optional</sup> <a name="agc_and_color_stripe_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.agcAndColorStripeRestriction"></a>

```python
agc_and_color_stripe_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}.

---

##### `allow_passing_video_content_to_unknown_output`<sup>Optional</sup> <a name="allow_passing_video_content_to_unknown_output" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.allowPassingVideoContentToUnknownOutput"></a>

```python
allow_passing_video_content_to_unknown_output: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}.

---

##### `analog_video_opl`<sup>Optional</sup> <a name="analog_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.analogVideoOpl"></a>

```python
analog_video_opl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#analog_video_opl MediaContentKeyPolicy#analog_video_opl}.

---

##### `compressed_digital_audio_opl`<sup>Optional</sup> <a name="compressed_digital_audio_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalAudioOpl"></a>

```python
compressed_digital_audio_opl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}.

---

##### `compressed_digital_video_opl`<sup>Optional</sup> <a name="compressed_digital_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalVideoOpl"></a>

```python
compressed_digital_video_opl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#compressed_digital_video_opl MediaContentKeyPolicy#compressed_digital_video_opl}.

---

##### `digital_video_only_content_restriction`<sup>Optional</sup> <a name="digital_video_only_content_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.digitalVideoOnlyContentRestriction"></a>

```python
digital_video_only_content_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}.

---

##### `explicit_analog_television_output_restriction`<sup>Optional</sup> <a name="explicit_analog_television_output_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.explicitAnalogTelevisionOutputRestriction"></a>

```python
explicit_analog_television_output_restriction: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

explicit_analog_television_output_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#explicit_analog_television_output_restriction MediaContentKeyPolicy#explicit_analog_television_output_restriction}

---

##### `first_play_expiration`<sup>Optional</sup> <a name="first_play_expiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.firstPlayExpiration"></a>

```python
first_play_expiration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#first_play_expiration MediaContentKeyPolicy#first_play_expiration}.

---

##### `image_constraint_for_analog_component_video_restriction`<sup>Optional</sup> <a name="image_constraint_for_analog_component_video_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComponentVideoRestriction"></a>

```python
image_constraint_for_analog_component_video_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}.

---

##### `image_constraint_for_analog_computer_monitor_restriction`<sup>Optional</sup> <a name="image_constraint_for_analog_computer_monitor_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComputerMonitorRestriction"></a>

```python
image_constraint_for_analog_computer_monitor_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}.

---

##### `scms_restriction`<sup>Optional</sup> <a name="scms_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.scmsRestriction"></a>

```python
scms_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#scms_restriction MediaContentKeyPolicy#scms_restriction}.

---

##### `uncompressed_digital_audio_opl`<sup>Optional</sup> <a name="uncompressed_digital_audio_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalAudioOpl"></a>

```python
uncompressed_digital_audio_opl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}.

---

##### `uncompressed_digital_video_opl`<sup>Optional</sup> <a name="uncompressed_digital_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalVideoOpl"></a>

```python
uncompressed_digital_video_opl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction(
  control_bits: typing.Union[int, float],
  best_effort_enforced: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.controlBits">control_bits</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#control_bits MediaContentKeyPolicy#control_bits}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.bestEffortEnforced">best_effort_enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#best_effort_enforced MediaContentKeyPolicy#best_effort_enforced}. |

---

##### `control_bits`<sup>Required</sup> <a name="control_bits" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.controlBits"></a>

```python
control_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#control_bits MediaContentKeyPolicy#control_bits}.

---

##### `best_effort_enforced`<sup>Optional</sup> <a name="best_effort_enforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.bestEffortEnforced"></a>

```python
best_effort_enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#best_effort_enforced MediaContentKeyPolicy#best_effort_enforced}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestriction <a name="MediaContentKeyPolicyPolicyOptionTokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction(
  alternate_key: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey]] = None,
  audience: str = None,
  issuer: str = None,
  open_id_connect_discovery_document: str = None,
  primary_rsa_token_key_exponent: str = None,
  primary_rsa_token_key_modulus: str = None,
  primary_symmetric_token_key: str = None,
  primary_x509_token_key_raw: str = None,
  required_claim: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim]] = None,
  token_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.alternateKey">alternate_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>]]</code> | alternate_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.audience">audience</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#audience MediaContentKeyPolicy#audience}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#issuer MediaContentKeyPolicy#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.openIdConnectDiscoveryDocument">open_id_connect_discovery_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyExponent">primary_rsa_token_key_exponent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyModulus">primary_rsa_token_key_modulus</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primarySymmetricTokenKey">primary_symmetric_token_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryX509TokenKeyRaw">primary_x509_token_key_raw</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.requiredClaim">required_claim</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>]]</code> | required_claim block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.tokenType">token_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#token_type MediaContentKeyPolicy#token_type}. |

---

##### `alternate_key`<sup>Optional</sup> <a name="alternate_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.alternateKey"></a>

```python
alternate_key: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>]]

alternate_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#alternate_key MediaContentKeyPolicy#alternate_key}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.audience"></a>

```python
audience: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#audience MediaContentKeyPolicy#audience}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#issuer MediaContentKeyPolicy#issuer}.

---

##### `open_id_connect_discovery_document`<sup>Optional</sup> <a name="open_id_connect_discovery_document" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.openIdConnectDiscoveryDocument"></a>

```python
open_id_connect_discovery_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}.

---

##### `primary_rsa_token_key_exponent`<sup>Optional</sup> <a name="primary_rsa_token_key_exponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyExponent"></a>

```python
primary_rsa_token_key_exponent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}.

---

##### `primary_rsa_token_key_modulus`<sup>Optional</sup> <a name="primary_rsa_token_key_modulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyModulus"></a>

```python
primary_rsa_token_key_modulus: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}.

---

##### `primary_symmetric_token_key`<sup>Optional</sup> <a name="primary_symmetric_token_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primarySymmetricTokenKey"></a>

```python
primary_symmetric_token_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}.

---

##### `primary_x509_token_key_raw`<sup>Optional</sup> <a name="primary_x509_token_key_raw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryX509TokenKeyRaw"></a>

```python
primary_x509_token_key_raw: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}.

---

##### `required_claim`<sup>Optional</sup> <a name="required_claim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.requiredClaim"></a>

```python
required_claim: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>]]

required_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#required_claim MediaContentKeyPolicy#required_claim}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#token_type MediaContentKeyPolicy#token_type}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey(
  rsa_token_key_exponent: str = None,
  rsa_token_key_modulus: str = None,
  symmetric_token_key: str = None,
  x509_token_key_raw: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyExponent">rsa_token_key_exponent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#rsa_token_key_exponent MediaContentKeyPolicy#rsa_token_key_exponent}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyModulus">rsa_token_key_modulus</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#rsa_token_key_modulus MediaContentKeyPolicy#rsa_token_key_modulus}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.symmetricTokenKey">symmetric_token_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#symmetric_token_key MediaContentKeyPolicy#symmetric_token_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.x509TokenKeyRaw">x509_token_key_raw</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#x509_token_key_raw MediaContentKeyPolicy#x509_token_key_raw}. |

---

##### `rsa_token_key_exponent`<sup>Optional</sup> <a name="rsa_token_key_exponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyExponent"></a>

```python
rsa_token_key_exponent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#rsa_token_key_exponent MediaContentKeyPolicy#rsa_token_key_exponent}.

---

##### `rsa_token_key_modulus`<sup>Optional</sup> <a name="rsa_token_key_modulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyModulus"></a>

```python
rsa_token_key_modulus: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#rsa_token_key_modulus MediaContentKeyPolicy#rsa_token_key_modulus}.

---

##### `symmetric_token_key`<sup>Optional</sup> <a name="symmetric_token_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.symmetricTokenKey"></a>

```python
symmetric_token_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#symmetric_token_key MediaContentKeyPolicy#symmetric_token_key}.

---

##### `x509_token_key_raw`<sup>Optional</sup> <a name="x509_token_key_raw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.x509TokenKeyRaw"></a>

```python
x509_token_key_raw: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#x509_token_key_raw MediaContentKeyPolicy#x509_token_key_raw}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim(
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#type MediaContentKeyPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#value MediaContentKeyPolicy#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#type MediaContentKeyPolicy#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#value MediaContentKeyPolicy#value}.

---

### MediaContentKeyPolicyTimeouts <a name="MediaContentKeyPolicyTimeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#create MediaContentKeyPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#delete MediaContentKeyPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#read MediaContentKeyPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#update MediaContentKeyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#create MediaContentKeyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#delete MediaContentKeyPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#read MediaContentKeyPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#update MediaContentKeyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetPlaybackDurationSeconds">reset_playback_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetStorageDurationSeconds">reset_storage_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_playback_duration_seconds` <a name="reset_playback_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetPlaybackDurationSeconds"></a>

```python
def reset_playback_duration_seconds() -> None
```

##### `reset_storage_duration_seconds` <a name="reset_storage_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetStorageDurationSeconds"></a>

```python
def reset_storage_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSecondsInput">playback_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSecondsInput">storage_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSeconds">playback_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSeconds">storage_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `playback_duration_seconds_input`<sup>Optional</sup> <a name="playback_duration_seconds_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSecondsInput"></a>

```python
playback_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_duration_seconds_input`<sup>Optional</sup> <a name="storage_duration_seconds_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSecondsInput"></a>

```python
storage_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `playback_duration_seconds`<sup>Required</sup> <a name="playback_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSeconds"></a>

```python
playback_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_duration_seconds`<sup>Required</sup> <a name="storage_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSeconds"></a>

```python
storage_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---


### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration">put_offline_rental_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetAsk">reset_ask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetOfflineRentalConfiguration">reset_offline_rental_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfx">reset_pfx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfxPassword">reset_pfx_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalAndLeaseKeyType">reset_rental_and_lease_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalDurationSeconds">reset_rental_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_offline_rental_configuration` <a name="put_offline_rental_configuration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration"></a>

```python
def put_offline_rental_configuration(
  playback_duration_seconds: typing.Union[int, float] = None,
  storage_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `playback_duration_seconds`<sup>Optional</sup> <a name="playback_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration.parameter.playbackDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}.

---

###### `storage_duration_seconds`<sup>Optional</sup> <a name="storage_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration.parameter.storageDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}.

---

##### `reset_ask` <a name="reset_ask" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetAsk"></a>

```python
def reset_ask() -> None
```

##### `reset_offline_rental_configuration` <a name="reset_offline_rental_configuration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetOfflineRentalConfiguration"></a>

```python
def reset_offline_rental_configuration() -> None
```

##### `reset_pfx` <a name="reset_pfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfx"></a>

```python
def reset_pfx() -> None
```

##### `reset_pfx_password` <a name="reset_pfx_password" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfxPassword"></a>

```python
def reset_pfx_password() -> None
```

##### `reset_rental_and_lease_key_type` <a name="reset_rental_and_lease_key_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalAndLeaseKeyType"></a>

```python
def reset_rental_and_lease_key_type() -> None
```

##### `reset_rental_duration_seconds` <a name="reset_rental_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalDurationSeconds"></a>

```python
def reset_rental_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfiguration">offline_rental_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.askInput">ask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfigurationInput">offline_rental_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxInput">pfx_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPasswordInput">pfx_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyTypeInput">rental_and_lease_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSecondsInput">rental_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.ask">ask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfx">pfx</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPassword">pfx_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyType">rental_and_lease_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSeconds">rental_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offline_rental_configuration`<sup>Required</sup> <a name="offline_rental_configuration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfiguration"></a>

```python
offline_rental_configuration: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference</a>

---

##### `ask_input`<sup>Optional</sup> <a name="ask_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.askInput"></a>

```python
ask_input: str
```

- *Type:* str

---

##### `offline_rental_configuration_input`<sup>Optional</sup> <a name="offline_rental_configuration_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfigurationInput"></a>

```python
offline_rental_configuration_input: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---

##### `pfx_input`<sup>Optional</sup> <a name="pfx_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxInput"></a>

```python
pfx_input: str
```

- *Type:* str

---

##### `pfx_password_input`<sup>Optional</sup> <a name="pfx_password_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPasswordInput"></a>

```python
pfx_password_input: str
```

- *Type:* str

---

##### `rental_and_lease_key_type_input`<sup>Optional</sup> <a name="rental_and_lease_key_type_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyTypeInput"></a>

```python
rental_and_lease_key_type_input: str
```

- *Type:* str

---

##### `rental_duration_seconds_input`<sup>Optional</sup> <a name="rental_duration_seconds_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSecondsInput"></a>

```python
rental_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ask`<sup>Required</sup> <a name="ask" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.ask"></a>

```python
ask: str
```

- *Type:* str

---

##### `pfx`<sup>Required</sup> <a name="pfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfx"></a>

```python
pfx: str
```

- *Type:* str

---

##### `pfx_password`<sup>Required</sup> <a name="pfx_password" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPassword"></a>

```python
pfx_password: str
```

- *Type:* str

---

##### `rental_and_lease_key_type`<sup>Required</sup> <a name="rental_and_lease_key_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyType"></a>

```python
rental_and_lease_key_type: str
```

- *Type:* str

---

##### `rental_duration_seconds`<sup>Required</sup> <a name="rental_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSeconds"></a>

```python
rental_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: MediaContentKeyPolicyPolicyOptionFairplayConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---


### MediaContentKeyPolicyPolicyOptionList <a name="MediaContentKeyPolicyPolicyOptionList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaContentKeyPolicyPolicyOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]]

---


### MediaContentKeyPolicyPolicyOptionOutputReference <a name="MediaContentKeyPolicyPolicyOptionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration">put_fairplay_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense">put_playready_configuration_license</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction">put_token_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetClearKeyConfigurationEnabled">reset_clear_key_configuration_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetFairplayConfiguration">reset_fairplay_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetOpenRestrictionEnabled">reset_open_restriction_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyConfigurationLicense">reset_playready_configuration_license</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyResponseCustomData">reset_playready_response_custom_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetTokenRestriction">reset_token_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetWidevineConfigurationTemplate">reset_widevine_configuration_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fairplay_configuration` <a name="put_fairplay_configuration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration"></a>

```python
def put_fairplay_configuration(
  ask: str = None,
  offline_rental_configuration: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration = None,
  pfx: str = None,
  pfx_password: str = None,
  rental_and_lease_key_type: str = None,
  rental_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `ask`<sup>Optional</sup> <a name="ask" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration.parameter.ask"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#ask MediaContentKeyPolicy#ask}.

---

###### `offline_rental_configuration`<sup>Optional</sup> <a name="offline_rental_configuration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration.parameter.offlineRentalConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

offline_rental_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#offline_rental_configuration MediaContentKeyPolicy#offline_rental_configuration}

---

###### `pfx`<sup>Optional</sup> <a name="pfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration.parameter.pfx"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#pfx MediaContentKeyPolicy#pfx}.

---

###### `pfx_password`<sup>Optional</sup> <a name="pfx_password" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration.parameter.pfxPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#pfx_password MediaContentKeyPolicy#pfx_password}.

---

###### `rental_and_lease_key_type`<sup>Optional</sup> <a name="rental_and_lease_key_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration.parameter.rentalAndLeaseKeyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}.

---

###### `rental_duration_seconds`<sup>Optional</sup> <a name="rental_duration_seconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration.parameter.rentalDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}.

---

##### `put_playready_configuration_license` <a name="put_playready_configuration_license" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense"></a>

```python
def put_playready_configuration_license(
  value: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>]]

---

##### `put_token_restriction` <a name="put_token_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction"></a>

```python
def put_token_restriction(
  alternate_key: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey]] = None,
  audience: str = None,
  issuer: str = None,
  open_id_connect_discovery_document: str = None,
  primary_rsa_token_key_exponent: str = None,
  primary_rsa_token_key_modulus: str = None,
  primary_symmetric_token_key: str = None,
  primary_x509_token_key_raw: str = None,
  required_claim: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim]] = None,
  token_type: str = None
) -> None
```

###### `alternate_key`<sup>Optional</sup> <a name="alternate_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.alternateKey"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>]]

alternate_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#alternate_key MediaContentKeyPolicy#alternate_key}

---

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.audience"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#audience MediaContentKeyPolicy#audience}.

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#issuer MediaContentKeyPolicy#issuer}.

---

###### `open_id_connect_discovery_document`<sup>Optional</sup> <a name="open_id_connect_discovery_document" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.openIdConnectDiscoveryDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}.

---

###### `primary_rsa_token_key_exponent`<sup>Optional</sup> <a name="primary_rsa_token_key_exponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.primaryRsaTokenKeyExponent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}.

---

###### `primary_rsa_token_key_modulus`<sup>Optional</sup> <a name="primary_rsa_token_key_modulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.primaryRsaTokenKeyModulus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}.

---

###### `primary_symmetric_token_key`<sup>Optional</sup> <a name="primary_symmetric_token_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.primarySymmetricTokenKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}.

---

###### `primary_x509_token_key_raw`<sup>Optional</sup> <a name="primary_x509_token_key_raw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.primaryX509TokenKeyRaw"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}.

---

###### `required_claim`<sup>Optional</sup> <a name="required_claim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.requiredClaim"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>]]

required_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#required_claim MediaContentKeyPolicy#required_claim}

---

###### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.tokenType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#token_type MediaContentKeyPolicy#token_type}.

---

##### `reset_clear_key_configuration_enabled` <a name="reset_clear_key_configuration_enabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetClearKeyConfigurationEnabled"></a>

```python
def reset_clear_key_configuration_enabled() -> None
```

##### `reset_fairplay_configuration` <a name="reset_fairplay_configuration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetFairplayConfiguration"></a>

```python
def reset_fairplay_configuration() -> None
```

##### `reset_open_restriction_enabled` <a name="reset_open_restriction_enabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetOpenRestrictionEnabled"></a>

```python
def reset_open_restriction_enabled() -> None
```

##### `reset_playready_configuration_license` <a name="reset_playready_configuration_license" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyConfigurationLicense"></a>

```python
def reset_playready_configuration_license() -> None
```

##### `reset_playready_response_custom_data` <a name="reset_playready_response_custom_data" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyResponseCustomData"></a>

```python
def reset_playready_response_custom_data() -> None
```

##### `reset_token_restriction` <a name="reset_token_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetTokenRestriction"></a>

```python
def reset_token_restriction() -> None
```

##### `reset_widevine_configuration_template` <a name="reset_widevine_configuration_template" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetWidevineConfigurationTemplate"></a>

```python
def reset_widevine_configuration_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfiguration">fairplay_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicense">playready_configuration_license</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestriction">token_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabledInput">clear_key_configuration_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfigurationInput">fairplay_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabledInput">open_restriction_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicenseInput">playready_configuration_license_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomDataInput">playready_response_custom_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestrictionInput">token_restriction_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplateInput">widevine_configuration_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabled">clear_key_configuration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabled">open_restriction_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomData">playready_response_custom_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplate">widevine_configuration_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fairplay_configuration`<sup>Required</sup> <a name="fairplay_configuration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfiguration"></a>

```python
fairplay_configuration: MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference</a>

---

##### `playready_configuration_license`<sup>Required</sup> <a name="playready_configuration_license" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicense"></a>

```python
playready_configuration_license: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList</a>

---

##### `token_restriction`<sup>Required</sup> <a name="token_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestriction"></a>

```python
token_restriction: MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference</a>

---

##### `clear_key_configuration_enabled_input`<sup>Optional</sup> <a name="clear_key_configuration_enabled_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabledInput"></a>

```python
clear_key_configuration_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fairplay_configuration_input`<sup>Optional</sup> <a name="fairplay_configuration_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfigurationInput"></a>

```python
fairplay_configuration_input: MediaContentKeyPolicyPolicyOptionFairplayConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `open_restriction_enabled_input`<sup>Optional</sup> <a name="open_restriction_enabled_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabledInput"></a>

```python
open_restriction_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `playready_configuration_license_input`<sup>Optional</sup> <a name="playready_configuration_license_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicenseInput"></a>

```python
playready_configuration_license_input: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>]]

---

##### `playready_response_custom_data_input`<sup>Optional</sup> <a name="playready_response_custom_data_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomDataInput"></a>

```python
playready_response_custom_data_input: str
```

- *Type:* str

---

##### `token_restriction_input`<sup>Optional</sup> <a name="token_restriction_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestrictionInput"></a>

```python
token_restriction_input: MediaContentKeyPolicyPolicyOptionTokenRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---

##### `widevine_configuration_template_input`<sup>Optional</sup> <a name="widevine_configuration_template_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplateInput"></a>

```python
widevine_configuration_template_input: str
```

- *Type:* str

---

##### `clear_key_configuration_enabled`<sup>Required</sup> <a name="clear_key_configuration_enabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabled"></a>

```python
clear_key_configuration_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_restriction_enabled`<sup>Required</sup> <a name="open_restriction_enabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabled"></a>

```python
open_restriction_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `playready_response_custom_data`<sup>Required</sup> <a name="playready_response_custom_data" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomData"></a>

```python
playready_response_custom_data: str
```

- *Type:* str

---

##### `widevine_configuration_template`<sup>Required</sup> <a name="widevine_configuration_template" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplate"></a>

```python
widevine_configuration_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaContentKeyPolicyPolicyOption]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption">MediaContentKeyPolicyPolicyOption</a>]

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>]]

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight">put_play_right</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetAllowTestDevices">reset_allow_test_devices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetBeginDate">reset_begin_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromHeaderEnabled">reset_content_key_location_from_header_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromKeyId">reset_content_key_location_from_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetExpirationDate">reset_expiration_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetGracePeriod">reset_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetLicenseType">reset_license_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetPlayRight">reset_play_right</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeBeginDate">reset_relative_begin_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeExpirationDate">reset_relative_expiration_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetSecurityLevel">reset_security_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_play_right` <a name="put_play_right" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight"></a>

```python
def put_play_right(
  agc_and_color_stripe_restriction: typing.Union[int, float] = None,
  allow_passing_video_content_to_unknown_output: str = None,
  analog_video_opl: typing.Union[int, float] = None,
  compressed_digital_audio_opl: typing.Union[int, float] = None,
  compressed_digital_video_opl: typing.Union[int, float] = None,
  digital_video_only_content_restriction: typing.Union[bool, IResolvable] = None,
  explicit_analog_television_output_restriction: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction = None,
  first_play_expiration: str = None,
  image_constraint_for_analog_component_video_restriction: typing.Union[bool, IResolvable] = None,
  image_constraint_for_analog_computer_monitor_restriction: typing.Union[bool, IResolvable] = None,
  scms_restriction: typing.Union[int, float] = None,
  uncompressed_digital_audio_opl: typing.Union[int, float] = None,
  uncompressed_digital_video_opl: typing.Union[int, float] = None
) -> None
```

###### `agc_and_color_stripe_restriction`<sup>Optional</sup> <a name="agc_and_color_stripe_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.agcAndColorStripeRestriction"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}.

---

###### `allow_passing_video_content_to_unknown_output`<sup>Optional</sup> <a name="allow_passing_video_content_to_unknown_output" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.allowPassingVideoContentToUnknownOutput"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}.

---

###### `analog_video_opl`<sup>Optional</sup> <a name="analog_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.analogVideoOpl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#analog_video_opl MediaContentKeyPolicy#analog_video_opl}.

---

###### `compressed_digital_audio_opl`<sup>Optional</sup> <a name="compressed_digital_audio_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.compressedDigitalAudioOpl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}.

---

###### `compressed_digital_video_opl`<sup>Optional</sup> <a name="compressed_digital_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.compressedDigitalVideoOpl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#compressed_digital_video_opl MediaContentKeyPolicy#compressed_digital_video_opl}.

---

###### `digital_video_only_content_restriction`<sup>Optional</sup> <a name="digital_video_only_content_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.digitalVideoOnlyContentRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}.

---

###### `explicit_analog_television_output_restriction`<sup>Optional</sup> <a name="explicit_analog_television_output_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.explicitAnalogTelevisionOutputRestriction"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

explicit_analog_television_output_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#explicit_analog_television_output_restriction MediaContentKeyPolicy#explicit_analog_television_output_restriction}

---

###### `first_play_expiration`<sup>Optional</sup> <a name="first_play_expiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.firstPlayExpiration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#first_play_expiration MediaContentKeyPolicy#first_play_expiration}.

---

###### `image_constraint_for_analog_component_video_restriction`<sup>Optional</sup> <a name="image_constraint_for_analog_component_video_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.imageConstraintForAnalogComponentVideoRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}.

---

###### `image_constraint_for_analog_computer_monitor_restriction`<sup>Optional</sup> <a name="image_constraint_for_analog_computer_monitor_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.imageConstraintForAnalogComputerMonitorRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}.

---

###### `scms_restriction`<sup>Optional</sup> <a name="scms_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.scmsRestriction"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#scms_restriction MediaContentKeyPolicy#scms_restriction}.

---

###### `uncompressed_digital_audio_opl`<sup>Optional</sup> <a name="uncompressed_digital_audio_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.uncompressedDigitalAudioOpl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}.

---

###### `uncompressed_digital_video_opl`<sup>Optional</sup> <a name="uncompressed_digital_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.uncompressedDigitalVideoOpl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}.

---

##### `reset_allow_test_devices` <a name="reset_allow_test_devices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetAllowTestDevices"></a>

```python
def reset_allow_test_devices() -> None
```

##### `reset_begin_date` <a name="reset_begin_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetBeginDate"></a>

```python
def reset_begin_date() -> None
```

##### `reset_content_key_location_from_header_enabled` <a name="reset_content_key_location_from_header_enabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromHeaderEnabled"></a>

```python
def reset_content_key_location_from_header_enabled() -> None
```

##### `reset_content_key_location_from_key_id` <a name="reset_content_key_location_from_key_id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromKeyId"></a>

```python
def reset_content_key_location_from_key_id() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_expiration_date` <a name="reset_expiration_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetExpirationDate"></a>

```python
def reset_expiration_date() -> None
```

##### `reset_grace_period` <a name="reset_grace_period" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetGracePeriod"></a>

```python
def reset_grace_period() -> None
```

##### `reset_license_type` <a name="reset_license_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetLicenseType"></a>

```python
def reset_license_type() -> None
```

##### `reset_play_right` <a name="reset_play_right" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetPlayRight"></a>

```python
def reset_play_right() -> None
```

##### `reset_relative_begin_date` <a name="reset_relative_begin_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeBeginDate"></a>

```python
def reset_relative_begin_date() -> None
```

##### `reset_relative_expiration_date` <a name="reset_relative_expiration_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeExpirationDate"></a>

```python
def reset_relative_expiration_date() -> None
```

##### `reset_security_level` <a name="reset_security_level" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetSecurityLevel"></a>

```python
def reset_security_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRight">play_right</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevicesInput">allow_test_devices_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDateInput">begin_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabledInput">content_key_location_from_header_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyIdInput">content_key_location_from_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDateInput">expiration_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriodInput">grace_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRightInput">play_right_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDateInput">relative_begin_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDateInput">relative_expiration_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevelInput">security_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevices">allow_test_devices</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDate">begin_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabled">content_key_location_from_header_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyId">content_key_location_from_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriod">grace_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDate">relative_begin_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDate">relative_expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevel">security_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `play_right`<sup>Required</sup> <a name="play_right" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRight"></a>

```python
play_right: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference</a>

---

##### `allow_test_devices_input`<sup>Optional</sup> <a name="allow_test_devices_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevicesInput"></a>

```python
allow_test_devices_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `begin_date_input`<sup>Optional</sup> <a name="begin_date_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDateInput"></a>

```python
begin_date_input: str
```

- *Type:* str

---

##### `content_key_location_from_header_enabled_input`<sup>Optional</sup> <a name="content_key_location_from_header_enabled_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabledInput"></a>

```python
content_key_location_from_header_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `content_key_location_from_key_id_input`<sup>Optional</sup> <a name="content_key_location_from_key_id_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyIdInput"></a>

```python
content_key_location_from_key_id_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `expiration_date_input`<sup>Optional</sup> <a name="expiration_date_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDateInput"></a>

```python
expiration_date_input: str
```

- *Type:* str

---

##### `grace_period_input`<sup>Optional</sup> <a name="grace_period_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriodInput"></a>

```python
grace_period_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `play_right_input`<sup>Optional</sup> <a name="play_right_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRightInput"></a>

```python
play_right_input: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---

##### `relative_begin_date_input`<sup>Optional</sup> <a name="relative_begin_date_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDateInput"></a>

```python
relative_begin_date_input: str
```

- *Type:* str

---

##### `relative_expiration_date_input`<sup>Optional</sup> <a name="relative_expiration_date_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDateInput"></a>

```python
relative_expiration_date_input: str
```

- *Type:* str

---

##### `security_level_input`<sup>Optional</sup> <a name="security_level_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevelInput"></a>

```python
security_level_input: str
```

- *Type:* str

---

##### `allow_test_devices`<sup>Required</sup> <a name="allow_test_devices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevices"></a>

```python
allow_test_devices: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `begin_date`<sup>Required</sup> <a name="begin_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDate"></a>

```python
begin_date: str
```

- *Type:* str

---

##### `content_key_location_from_header_enabled`<sup>Required</sup> <a name="content_key_location_from_header_enabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabled"></a>

```python
content_key_location_from_header_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `content_key_location_from_key_id`<sup>Required</sup> <a name="content_key_location_from_key_id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyId"></a>

```python
content_key_location_from_key_id: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `grace_period`<sup>Required</sup> <a name="grace_period" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriod"></a>

```python
grace_period: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `relative_begin_date`<sup>Required</sup> <a name="relative_begin_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDate"></a>

```python
relative_begin_date: str
```

- *Type:* str

---

##### `relative_expiration_date`<sup>Required</sup> <a name="relative_expiration_date" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDate"></a>

```python
relative_expiration_date: str
```

- *Type:* str

---

##### `security_level`<sup>Required</sup> <a name="security_level" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense</a>]

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resetBestEffortEnforced">reset_best_effort_enforced</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_best_effort_enforced` <a name="reset_best_effort_enforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resetBestEffortEnforced"></a>

```python
def reset_best_effort_enforced() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforcedInput">best_effort_enforced_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBitsInput">control_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforced">best_effort_enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBits">control_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `best_effort_enforced_input`<sup>Optional</sup> <a name="best_effort_enforced_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforcedInput"></a>

```python
best_effort_enforced_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `control_bits_input`<sup>Optional</sup> <a name="control_bits_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBitsInput"></a>

```python
control_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `best_effort_enforced`<sup>Required</sup> <a name="best_effort_enforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforced"></a>

```python
best_effort_enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `control_bits`<sup>Required</sup> <a name="control_bits" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBits"></a>

```python
control_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction">put_explicit_analog_television_output_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAgcAndColorStripeRestriction">reset_agc_and_color_stripe_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAllowPassingVideoContentToUnknownOutput">reset_allow_passing_video_content_to_unknown_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAnalogVideoOpl">reset_analog_video_opl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalAudioOpl">reset_compressed_digital_audio_opl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalVideoOpl">reset_compressed_digital_video_opl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetDigitalVideoOnlyContentRestriction">reset_digital_video_only_content_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetExplicitAnalogTelevisionOutputRestriction">reset_explicit_analog_television_output_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetFirstPlayExpiration">reset_first_play_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComponentVideoRestriction">reset_image_constraint_for_analog_component_video_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComputerMonitorRestriction">reset_image_constraint_for_analog_computer_monitor_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetScmsRestriction">reset_scms_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalAudioOpl">reset_uncompressed_digital_audio_opl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalVideoOpl">reset_uncompressed_digital_video_opl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_explicit_analog_television_output_restriction` <a name="put_explicit_analog_television_output_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction"></a>

```python
def put_explicit_analog_television_output_restriction(
  control_bits: typing.Union[int, float],
  best_effort_enforced: typing.Union[bool, IResolvable] = None
) -> None
```

###### `control_bits`<sup>Required</sup> <a name="control_bits" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction.parameter.controlBits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#control_bits MediaContentKeyPolicy#control_bits}.

---

###### `best_effort_enforced`<sup>Optional</sup> <a name="best_effort_enforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction.parameter.bestEffortEnforced"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_content_key_policy#best_effort_enforced MediaContentKeyPolicy#best_effort_enforced}.

---

##### `reset_agc_and_color_stripe_restriction` <a name="reset_agc_and_color_stripe_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAgcAndColorStripeRestriction"></a>

```python
def reset_agc_and_color_stripe_restriction() -> None
```

##### `reset_allow_passing_video_content_to_unknown_output` <a name="reset_allow_passing_video_content_to_unknown_output" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAllowPassingVideoContentToUnknownOutput"></a>

```python
def reset_allow_passing_video_content_to_unknown_output() -> None
```

##### `reset_analog_video_opl` <a name="reset_analog_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAnalogVideoOpl"></a>

```python
def reset_analog_video_opl() -> None
```

##### `reset_compressed_digital_audio_opl` <a name="reset_compressed_digital_audio_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalAudioOpl"></a>

```python
def reset_compressed_digital_audio_opl() -> None
```

##### `reset_compressed_digital_video_opl` <a name="reset_compressed_digital_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalVideoOpl"></a>

```python
def reset_compressed_digital_video_opl() -> None
```

##### `reset_digital_video_only_content_restriction` <a name="reset_digital_video_only_content_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetDigitalVideoOnlyContentRestriction"></a>

```python
def reset_digital_video_only_content_restriction() -> None
```

##### `reset_explicit_analog_television_output_restriction` <a name="reset_explicit_analog_television_output_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetExplicitAnalogTelevisionOutputRestriction"></a>

```python
def reset_explicit_analog_television_output_restriction() -> None
```

##### `reset_first_play_expiration` <a name="reset_first_play_expiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetFirstPlayExpiration"></a>

```python
def reset_first_play_expiration() -> None
```

##### `reset_image_constraint_for_analog_component_video_restriction` <a name="reset_image_constraint_for_analog_component_video_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComponentVideoRestriction"></a>

```python
def reset_image_constraint_for_analog_component_video_restriction() -> None
```

##### `reset_image_constraint_for_analog_computer_monitor_restriction` <a name="reset_image_constraint_for_analog_computer_monitor_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComputerMonitorRestriction"></a>

```python
def reset_image_constraint_for_analog_computer_monitor_restriction() -> None
```

##### `reset_scms_restriction` <a name="reset_scms_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetScmsRestriction"></a>

```python
def reset_scms_restriction() -> None
```

##### `reset_uncompressed_digital_audio_opl` <a name="reset_uncompressed_digital_audio_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalAudioOpl"></a>

```python
def reset_uncompressed_digital_audio_opl() -> None
```

##### `reset_uncompressed_digital_video_opl` <a name="reset_uncompressed_digital_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalVideoOpl"></a>

```python
def reset_uncompressed_digital_video_opl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestriction">explicit_analog_television_output_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestrictionInput">agc_and_color_stripe_restriction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutputInput">allow_passing_video_content_to_unknown_output_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOplInput">analog_video_opl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOplInput">compressed_digital_audio_opl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOplInput">compressed_digital_video_opl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestrictionInput">digital_video_only_content_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestrictionInput">explicit_analog_television_output_restriction_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpirationInput">first_play_expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestrictionInput">image_constraint_for_analog_component_video_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestrictionInput">image_constraint_for_analog_computer_monitor_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestrictionInput">scms_restriction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOplInput">uncompressed_digital_audio_opl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOplInput">uncompressed_digital_video_opl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestriction">agc_and_color_stripe_restriction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutput">allow_passing_video_content_to_unknown_output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOpl">analog_video_opl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOpl">compressed_digital_audio_opl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOpl">compressed_digital_video_opl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestriction">digital_video_only_content_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpiration">first_play_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestriction">image_constraint_for_analog_component_video_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestriction">image_constraint_for_analog_computer_monitor_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestriction">scms_restriction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOpl">uncompressed_digital_audio_opl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOpl">uncompressed_digital_video_opl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `explicit_analog_television_output_restriction`<sup>Required</sup> <a name="explicit_analog_television_output_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestriction"></a>

```python
explicit_analog_television_output_restriction: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference</a>

---

##### `agc_and_color_stripe_restriction_input`<sup>Optional</sup> <a name="agc_and_color_stripe_restriction_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestrictionInput"></a>

```python
agc_and_color_stripe_restriction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_passing_video_content_to_unknown_output_input`<sup>Optional</sup> <a name="allow_passing_video_content_to_unknown_output_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutputInput"></a>

```python
allow_passing_video_content_to_unknown_output_input: str
```

- *Type:* str

---

##### `analog_video_opl_input`<sup>Optional</sup> <a name="analog_video_opl_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOplInput"></a>

```python
analog_video_opl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compressed_digital_audio_opl_input`<sup>Optional</sup> <a name="compressed_digital_audio_opl_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOplInput"></a>

```python
compressed_digital_audio_opl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compressed_digital_video_opl_input`<sup>Optional</sup> <a name="compressed_digital_video_opl_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOplInput"></a>

```python
compressed_digital_video_opl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `digital_video_only_content_restriction_input`<sup>Optional</sup> <a name="digital_video_only_content_restriction_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestrictionInput"></a>

```python
digital_video_only_content_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `explicit_analog_television_output_restriction_input`<sup>Optional</sup> <a name="explicit_analog_television_output_restriction_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestrictionInput"></a>

```python
explicit_analog_television_output_restriction_input: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---

##### `first_play_expiration_input`<sup>Optional</sup> <a name="first_play_expiration_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpirationInput"></a>

```python
first_play_expiration_input: str
```

- *Type:* str

---

##### `image_constraint_for_analog_component_video_restriction_input`<sup>Optional</sup> <a name="image_constraint_for_analog_component_video_restriction_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestrictionInput"></a>

```python
image_constraint_for_analog_component_video_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `image_constraint_for_analog_computer_monitor_restriction_input`<sup>Optional</sup> <a name="image_constraint_for_analog_computer_monitor_restriction_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestrictionInput"></a>

```python
image_constraint_for_analog_computer_monitor_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scms_restriction_input`<sup>Optional</sup> <a name="scms_restriction_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestrictionInput"></a>

```python
scms_restriction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uncompressed_digital_audio_opl_input`<sup>Optional</sup> <a name="uncompressed_digital_audio_opl_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOplInput"></a>

```python
uncompressed_digital_audio_opl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uncompressed_digital_video_opl_input`<sup>Optional</sup> <a name="uncompressed_digital_video_opl_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOplInput"></a>

```python
uncompressed_digital_video_opl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `agc_and_color_stripe_restriction`<sup>Required</sup> <a name="agc_and_color_stripe_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestriction"></a>

```python
agc_and_color_stripe_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_passing_video_content_to_unknown_output`<sup>Required</sup> <a name="allow_passing_video_content_to_unknown_output" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutput"></a>

```python
allow_passing_video_content_to_unknown_output: str
```

- *Type:* str

---

##### `analog_video_opl`<sup>Required</sup> <a name="analog_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOpl"></a>

```python
analog_video_opl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compressed_digital_audio_opl`<sup>Required</sup> <a name="compressed_digital_audio_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOpl"></a>

```python
compressed_digital_audio_opl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compressed_digital_video_opl`<sup>Required</sup> <a name="compressed_digital_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOpl"></a>

```python
compressed_digital_video_opl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `digital_video_only_content_restriction`<sup>Required</sup> <a name="digital_video_only_content_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestriction"></a>

```python
digital_video_only_content_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `first_play_expiration`<sup>Required</sup> <a name="first_play_expiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpiration"></a>

```python
first_play_expiration: str
```

- *Type:* str

---

##### `image_constraint_for_analog_component_video_restriction`<sup>Required</sup> <a name="image_constraint_for_analog_component_video_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestriction"></a>

```python
image_constraint_for_analog_component_video_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `image_constraint_for_analog_computer_monitor_restriction`<sup>Required</sup> <a name="image_constraint_for_analog_computer_monitor_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestriction"></a>

```python
image_constraint_for_analog_computer_monitor_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scms_restriction`<sup>Required</sup> <a name="scms_restriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestriction"></a>

```python
scms_restriction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uncompressed_digital_audio_opl`<sup>Required</sup> <a name="uncompressed_digital_audio_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOpl"></a>

```python
uncompressed_digital_audio_opl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uncompressed_digital_video_opl`<sup>Required</sup> <a name="uncompressed_digital_video_opl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOpl"></a>

```python
uncompressed_digital_video_opl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.internalValue"></a>

```python
internal_value: MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>]]

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyExponent">reset_rsa_token_key_exponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyModulus">reset_rsa_token_key_modulus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetSymmetricTokenKey">reset_symmetric_token_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetX509TokenKeyRaw">reset_x509_token_key_raw</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rsa_token_key_exponent` <a name="reset_rsa_token_key_exponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyExponent"></a>

```python
def reset_rsa_token_key_exponent() -> None
```

##### `reset_rsa_token_key_modulus` <a name="reset_rsa_token_key_modulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyModulus"></a>

```python
def reset_rsa_token_key_modulus() -> None
```

##### `reset_symmetric_token_key` <a name="reset_symmetric_token_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetSymmetricTokenKey"></a>

```python
def reset_symmetric_token_key() -> None
```

##### `reset_x509_token_key_raw` <a name="reset_x509_token_key_raw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetX509TokenKeyRaw"></a>

```python
def reset_x509_token_key_raw() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponentInput">rsa_token_key_exponent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulusInput">rsa_token_key_modulus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKeyInput">symmetric_token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRawInput">x509_token_key_raw_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponent">rsa_token_key_exponent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulus">rsa_token_key_modulus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKey">symmetric_token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRaw">x509_token_key_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rsa_token_key_exponent_input`<sup>Optional</sup> <a name="rsa_token_key_exponent_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponentInput"></a>

```python
rsa_token_key_exponent_input: str
```

- *Type:* str

---

##### `rsa_token_key_modulus_input`<sup>Optional</sup> <a name="rsa_token_key_modulus_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulusInput"></a>

```python
rsa_token_key_modulus_input: str
```

- *Type:* str

---

##### `symmetric_token_key_input`<sup>Optional</sup> <a name="symmetric_token_key_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKeyInput"></a>

```python
symmetric_token_key_input: str
```

- *Type:* str

---

##### `x509_token_key_raw_input`<sup>Optional</sup> <a name="x509_token_key_raw_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRawInput"></a>

```python
x509_token_key_raw_input: str
```

- *Type:* str

---

##### `rsa_token_key_exponent`<sup>Required</sup> <a name="rsa_token_key_exponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponent"></a>

```python
rsa_token_key_exponent: str
```

- *Type:* str

---

##### `rsa_token_key_modulus`<sup>Required</sup> <a name="rsa_token_key_modulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulus"></a>

```python
rsa_token_key_modulus: str
```

- *Type:* str

---

##### `symmetric_token_key`<sup>Required</sup> <a name="symmetric_token_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKey"></a>

```python
symmetric_token_key: str
```

- *Type:* str

---

##### `x509_token_key_raw`<sup>Required</sup> <a name="x509_token_key_raw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRaw"></a>

```python
x509_token_key_raw: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>]

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey">put_alternate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim">put_required_claim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAlternateKey">reset_alternate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAudience">reset_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetOpenIdConnectDiscoveryDocument">reset_open_id_connect_discovery_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyExponent">reset_primary_rsa_token_key_exponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyModulus">reset_primary_rsa_token_key_modulus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimarySymmetricTokenKey">reset_primary_symmetric_token_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryX509TokenKeyRaw">reset_primary_x509_token_key_raw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetRequiredClaim">reset_required_claim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alternate_key` <a name="put_alternate_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey"></a>

```python
def put_alternate_key(
  value: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>]]

---

##### `put_required_claim` <a name="put_required_claim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim"></a>

```python
def put_required_claim(
  value: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>]]

---

##### `reset_alternate_key` <a name="reset_alternate_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAlternateKey"></a>

```python
def reset_alternate_key() -> None
```

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_open_id_connect_discovery_document` <a name="reset_open_id_connect_discovery_document" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetOpenIdConnectDiscoveryDocument"></a>

```python
def reset_open_id_connect_discovery_document() -> None
```

##### `reset_primary_rsa_token_key_exponent` <a name="reset_primary_rsa_token_key_exponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyExponent"></a>

```python
def reset_primary_rsa_token_key_exponent() -> None
```

##### `reset_primary_rsa_token_key_modulus` <a name="reset_primary_rsa_token_key_modulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyModulus"></a>

```python
def reset_primary_rsa_token_key_modulus() -> None
```

##### `reset_primary_symmetric_token_key` <a name="reset_primary_symmetric_token_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimarySymmetricTokenKey"></a>

```python
def reset_primary_symmetric_token_key() -> None
```

##### `reset_primary_x509_token_key_raw` <a name="reset_primary_x509_token_key_raw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryX509TokenKeyRaw"></a>

```python
def reset_primary_x509_token_key_raw() -> None
```

##### `reset_required_claim` <a name="reset_required_claim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetRequiredClaim"></a>

```python
def reset_required_claim() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetTokenType"></a>

```python
def reset_token_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKey">alternate_key</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaim">required_claim</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKeyInput">alternate_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocumentInput">open_id_connect_discovery_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponentInput">primary_rsa_token_key_exponent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulusInput">primary_rsa_token_key_modulus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKeyInput">primary_symmetric_token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRawInput">primary_x509_token_key_raw_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaimInput">required_claim_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocument">open_id_connect_discovery_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponent">primary_rsa_token_key_exponent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulus">primary_rsa_token_key_modulus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKey">primary_symmetric_token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRaw">primary_x509_token_key_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alternate_key`<sup>Required</sup> <a name="alternate_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKey"></a>

```python
alternate_key: MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList</a>

---

##### `required_claim`<sup>Required</sup> <a name="required_claim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaim"></a>

```python
required_claim: MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList</a>

---

##### `alternate_key_input`<sup>Optional</sup> <a name="alternate_key_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKeyInput"></a>

```python
alternate_key_input: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey</a>]]

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `open_id_connect_discovery_document_input`<sup>Optional</sup> <a name="open_id_connect_discovery_document_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocumentInput"></a>

```python
open_id_connect_discovery_document_input: str
```

- *Type:* str

---

##### `primary_rsa_token_key_exponent_input`<sup>Optional</sup> <a name="primary_rsa_token_key_exponent_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponentInput"></a>

```python
primary_rsa_token_key_exponent_input: str
```

- *Type:* str

---

##### `primary_rsa_token_key_modulus_input`<sup>Optional</sup> <a name="primary_rsa_token_key_modulus_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulusInput"></a>

```python
primary_rsa_token_key_modulus_input: str
```

- *Type:* str

---

##### `primary_symmetric_token_key_input`<sup>Optional</sup> <a name="primary_symmetric_token_key_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKeyInput"></a>

```python
primary_symmetric_token_key_input: str
```

- *Type:* str

---

##### `primary_x509_token_key_raw_input`<sup>Optional</sup> <a name="primary_x509_token_key_raw_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRawInput"></a>

```python
primary_x509_token_key_raw_input: str
```

- *Type:* str

---

##### `required_claim_input`<sup>Optional</sup> <a name="required_claim_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaimInput"></a>

```python
required_claim_input: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>]]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `open_id_connect_discovery_document`<sup>Required</sup> <a name="open_id_connect_discovery_document" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocument"></a>

```python
open_id_connect_discovery_document: str
```

- *Type:* str

---

##### `primary_rsa_token_key_exponent`<sup>Required</sup> <a name="primary_rsa_token_key_exponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponent"></a>

```python
primary_rsa_token_key_exponent: str
```

- *Type:* str

---

##### `primary_rsa_token_key_modulus`<sup>Required</sup> <a name="primary_rsa_token_key_modulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulus"></a>

```python
primary_rsa_token_key_modulus: str
```

- *Type:* str

---

##### `primary_symmetric_token_key`<sup>Required</sup> <a name="primary_symmetric_token_key" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKey"></a>

```python
primary_symmetric_token_key: str
```

- *Type:* str

---

##### `primary_x509_token_key_raw`<sup>Required</sup> <a name="primary_x509_token_key_raw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRaw"></a>

```python
primary_x509_token_key_raw: str
```

- *Type:* str

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: MediaContentKeyPolicyPolicyOptionTokenRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>]]

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim</a>]

---


### MediaContentKeyPolicyTimeoutsOutputReference <a name="MediaContentKeyPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import media_content_key_policy

mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MediaContentKeyPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>]

---



