# `storageManagementPolicy` Submodule <a name="`storageManagementPolicy` Submodule" id="@cdktf/provider-azurerm.storageManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageManagementPolicy <a name="StorageManagementPolicy" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy azurerm_storage_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_account_id: str,
  id: str = None,
  rule: typing.Union[IResolvable, typing.List[StorageManagementPolicyRule]] = None,
  timeouts: StorageManagementPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#storage_account_id StorageManagementPolicy#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#id StorageManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#storage_account_id StorageManagementPolicy#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#id StorageManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#rule StorageManagementPolicy#rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#timeouts StorageManagementPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[StorageManagementPolicyRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#create StorageManagementPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete StorageManagementPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#read StorageManagementPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#update StorageManagementPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList">StorageManagementPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference">StorageManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.rule"></a>

```python
rule: StorageManagementPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList">StorageManagementPolicyRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.timeouts"></a>

```python
timeouts: StorageManagementPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference">StorageManagementPolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[StorageManagementPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>]]

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[StorageManagementPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageManagementPolicyConfig <a name="StorageManagementPolicyConfig" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_account_id: str,
  id: str = None,
  rule: typing.Union[IResolvable, typing.List[StorageManagementPolicyRule]] = None,
  timeouts: StorageManagementPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#storage_account_id StorageManagementPolicy#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#id StorageManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#storage_account_id StorageManagementPolicy#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#id StorageManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[StorageManagementPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#rule StorageManagementPolicy#rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyConfig.property.timeouts"></a>

```python
timeouts: StorageManagementPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#timeouts StorageManagementPolicy#timeouts}

---

### StorageManagementPolicyRule <a name="StorageManagementPolicyRule" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRule(
  actions: StorageManagementPolicyRuleActions,
  enabled: typing.Union[bool, IResolvable],
  filters: StorageManagementPolicyRuleFilters,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#enabled StorageManagementPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#name StorageManagementPolicy#name}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.actions"></a>

```python
actions: StorageManagementPolicyRuleActions
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#actions StorageManagementPolicy#actions}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#enabled StorageManagementPolicy#enabled}.

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.filters"></a>

```python
filters: StorageManagementPolicyRuleFilters
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a>

filters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#filters StorageManagementPolicy#filters}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#name StorageManagementPolicy#name}.

---

### StorageManagementPolicyRuleActions <a name="StorageManagementPolicyRuleActions" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleActions(
  base_blob: StorageManagementPolicyRuleActionsBaseBlob = None,
  snapshot: StorageManagementPolicyRuleActionsSnapshot = None,
  version: StorageManagementPolicyRuleActionsVersion = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.baseBlob">base_blob</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a></code> | base_blob block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a></code> | snapshot block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.version">version</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a></code> | version block. |

---

##### `base_blob`<sup>Optional</sup> <a name="base_blob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.baseBlob"></a>

```python
base_blob: StorageManagementPolicyRuleActionsBaseBlob
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a>

base_blob block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#base_blob StorageManagementPolicy#base_blob}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.snapshot"></a>

```python
snapshot: StorageManagementPolicyRuleActionsSnapshot
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a>

snapshot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#snapshot StorageManagementPolicy#snapshot}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions.property.version"></a>

```python
version: StorageManagementPolicyRuleActionsVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a>

version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#version StorageManagementPolicy#version}

---

### StorageManagementPolicyRuleActionsBaseBlob <a name="StorageManagementPolicyRuleActionsBaseBlob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob(
  auto_tier_to_hot_from_cool_enabled: typing.Union[bool, IResolvable] = None,
  delete_after_days_since_creation_greater_than: typing.Union[int, float] = None,
  delete_after_days_since_last_access_time_greater_than: typing.Union[int, float] = None,
  delete_after_days_since_modification_greater_than: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_creation_greater_than: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_last_access_time_greater_than: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_modification_greater_than: typing.Union[int, float] = None,
  tier_to_cool_after_days_since_creation_greater_than: typing.Union[int, float] = None,
  tier_to_cool_after_days_since_last_access_time_greater_than: typing.Union[int, float] = None,
  tier_to_cool_after_days_since_modification_greater_than: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.autoTierToHotFromCoolEnabled">auto_tier_to_hot_from_cool_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#auto_tier_to_hot_from_cool_enabled StorageManagementPolicy#auto_tier_to_hot_from_cool_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceCreationGreaterThan">delete_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceLastAccessTimeGreaterThan">delete_after_days_since_last_access_time_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_last_access_time_greater_than StorageManagementPolicy#delete_after_days_since_last_access_time_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceModificationGreaterThan">delete_after_days_since_modification_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_modification_greater_than StorageManagementPolicy#delete_after_days_since_modification_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceCreationGreaterThan">tier_to_archive_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_creation_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan">tier_to_archive_after_days_since_last_access_time_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_access_time_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceModificationGreaterThan">tier_to_archive_after_days_since_modification_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_modification_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceCreationGreaterThan">tier_to_cool_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_creation_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan">tier_to_cool_after_days_since_last_access_time_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_last_access_time_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceModificationGreaterThan">tier_to_cool_after_days_since_modification_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_modification_greater_than}. |

---

##### `auto_tier_to_hot_from_cool_enabled`<sup>Optional</sup> <a name="auto_tier_to_hot_from_cool_enabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.autoTierToHotFromCoolEnabled"></a>

```python
auto_tier_to_hot_from_cool_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#auto_tier_to_hot_from_cool_enabled StorageManagementPolicy#auto_tier_to_hot_from_cool_enabled}.

---

##### `delete_after_days_since_creation_greater_than`<sup>Optional</sup> <a name="delete_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```python
delete_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}.

---

##### `delete_after_days_since_last_access_time_greater_than`<sup>Optional</sup> <a name="delete_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
delete_after_days_since_last_access_time_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_last_access_time_greater_than StorageManagementPolicy#delete_after_days_since_last_access_time_greater_than}.

---

##### `delete_after_days_since_modification_greater_than`<sup>Optional</sup> <a name="delete_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.deleteAfterDaysSinceModificationGreaterThan"></a>

```python
delete_after_days_since_modification_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_modification_greater_than StorageManagementPolicy#delete_after_days_since_modification_greater_than}.

---

##### `tier_to_archive_after_days_since_creation_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceCreationGreaterThan"></a>

```python
tier_to_archive_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_creation_greater_than}.

---

##### `tier_to_archive_after_days_since_last_access_time_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_access_time_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_access_time_greater_than}.

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}.

---

##### `tier_to_archive_after_days_since_modification_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToArchiveAfterDaysSinceModificationGreaterThan"></a>

```python
tier_to_archive_after_days_since_modification_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_modification_greater_than}.

---

##### `tier_to_cool_after_days_since_creation_greater_than`<sup>Optional</sup> <a name="tier_to_cool_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceCreationGreaterThan"></a>

```python
tier_to_cool_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_creation_greater_than}.

---

##### `tier_to_cool_after_days_since_last_access_time_greater_than`<sup>Optional</sup> <a name="tier_to_cool_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
tier_to_cool_after_days_since_last_access_time_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_last_access_time_greater_than}.

---

##### `tier_to_cool_after_days_since_modification_greater_than`<sup>Optional</sup> <a name="tier_to_cool_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob.property.tierToCoolAfterDaysSinceModificationGreaterThan"></a>

```python
tier_to_cool_after_days_since_modification_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_modification_greater_than}.

---

### StorageManagementPolicyRuleActionsSnapshot <a name="StorageManagementPolicyRuleActionsSnapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot(
  change_tier_to_archive_after_days_since_creation: typing.Union[int, float] = None,
  change_tier_to_cool_after_days_since_creation: typing.Union[int, float] = None,
  delete_after_days_since_creation_greater_than: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.changeTierToArchiveAfterDaysSinceCreation">change_tier_to_archive_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.changeTierToCoolAfterDaysSinceCreation">change_tier_to_cool_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.deleteAfterDaysSinceCreationGreaterThan">delete_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}. |

---

##### `change_tier_to_archive_after_days_since_creation`<sup>Optional</sup> <a name="change_tier_to_archive_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```python
change_tier_to_archive_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}.

---

##### `change_tier_to_cool_after_days_since_creation`<sup>Optional</sup> <a name="change_tier_to_cool_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.changeTierToCoolAfterDaysSinceCreation"></a>

```python
change_tier_to_cool_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}.

---

##### `delete_after_days_since_creation_greater_than`<sup>Optional</sup> <a name="delete_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```python
delete_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}.

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}.

---

### StorageManagementPolicyRuleActionsVersion <a name="StorageManagementPolicyRuleActionsVersion" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleActionsVersion(
  change_tier_to_archive_after_days_since_creation: typing.Union[int, float] = None,
  change_tier_to_cool_after_days_since_creation: typing.Union[int, float] = None,
  delete_after_days_since_creation: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.changeTierToArchiveAfterDaysSinceCreation">change_tier_to_archive_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.changeTierToCoolAfterDaysSinceCreation">change_tier_to_cool_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.deleteAfterDaysSinceCreation">delete_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation StorageManagementPolicy#delete_after_days_since_creation}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}. |

---

##### `change_tier_to_archive_after_days_since_creation`<sup>Optional</sup> <a name="change_tier_to_archive_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```python
change_tier_to_archive_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}.

---

##### `change_tier_to_cool_after_days_since_creation`<sup>Optional</sup> <a name="change_tier_to_cool_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.changeTierToCoolAfterDaysSinceCreation"></a>

```python
change_tier_to_cool_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}.

---

##### `delete_after_days_since_creation`<sup>Optional</sup> <a name="delete_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.deleteAfterDaysSinceCreation"></a>

```python
delete_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation StorageManagementPolicy#delete_after_days_since_creation}.

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}.

---

### StorageManagementPolicyRuleFilters <a name="StorageManagementPolicyRuleFilters" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleFilters(
  blob_types: typing.List[str],
  match_blob_index_tag: typing.Union[IResolvable, typing.List[StorageManagementPolicyRuleFiltersMatchBlobIndexTag]] = None,
  prefix_match: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.blobTypes">blob_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#blob_types StorageManagementPolicy#blob_types}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.matchBlobIndexTag">match_blob_index_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag">StorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>]]</code> | match_blob_index_tag block. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.prefixMatch">prefix_match</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#prefix_match StorageManagementPolicy#prefix_match}. |

---

##### `blob_types`<sup>Required</sup> <a name="blob_types" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.blobTypes"></a>

```python
blob_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#blob_types StorageManagementPolicy#blob_types}.

---

##### `match_blob_index_tag`<sup>Optional</sup> <a name="match_blob_index_tag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.matchBlobIndexTag"></a>

```python
match_blob_index_tag: typing.Union[IResolvable, typing.List[StorageManagementPolicyRuleFiltersMatchBlobIndexTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag">StorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>]]

match_blob_index_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#match_blob_index_tag StorageManagementPolicy#match_blob_index_tag}

---

##### `prefix_match`<sup>Optional</sup> <a name="prefix_match" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters.property.prefixMatch"></a>

```python
prefix_match: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#prefix_match StorageManagementPolicy#prefix_match}.

---

### StorageManagementPolicyRuleFiltersMatchBlobIndexTag <a name="StorageManagementPolicyRuleFiltersMatchBlobIndexTag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag(
  name: str,
  value: str,
  operation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#name StorageManagementPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#value StorageManagementPolicy#value}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#operation StorageManagementPolicy#operation}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#name StorageManagementPolicy#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#value StorageManagementPolicy#value}.

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag.property.operation"></a>

```python
operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#operation StorageManagementPolicy#operation}.

---

### StorageManagementPolicyTimeouts <a name="StorageManagementPolicyTimeouts" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#create StorageManagementPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete StorageManagementPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#read StorageManagementPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#update StorageManagementPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#create StorageManagementPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete StorageManagementPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#read StorageManagementPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#update StorageManagementPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageManagementPolicyRuleActionsBaseBlobOutputReference <a name="StorageManagementPolicyRuleActionsBaseBlobOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetAutoTierToHotFromCoolEnabled">reset_auto_tier_to_hot_from_cool_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceCreationGreaterThan">reset_delete_after_days_since_creation_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceLastAccessTimeGreaterThan">reset_delete_after_days_since_last_access_time_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceModificationGreaterThan">reset_delete_after_days_since_modification_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceCreationGreaterThan">reset_tier_to_archive_after_days_since_creation_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceLastAccessTimeGreaterThan">reset_tier_to_archive_after_days_since_last_access_time_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan">reset_tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceModificationGreaterThan">reset_tier_to_archive_after_days_since_modification_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceCreationGreaterThan">reset_tier_to_cool_after_days_since_creation_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceLastAccessTimeGreaterThan">reset_tier_to_cool_after_days_since_last_access_time_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceModificationGreaterThan">reset_tier_to_cool_after_days_since_modification_greater_than</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_tier_to_hot_from_cool_enabled` <a name="reset_auto_tier_to_hot_from_cool_enabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetAutoTierToHotFromCoolEnabled"></a>

```python
def reset_auto_tier_to_hot_from_cool_enabled() -> None
```

##### `reset_delete_after_days_since_creation_greater_than` <a name="reset_delete_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceCreationGreaterThan"></a>

```python
def reset_delete_after_days_since_creation_greater_than() -> None
```

##### `reset_delete_after_days_since_last_access_time_greater_than` <a name="reset_delete_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
def reset_delete_after_days_since_last_access_time_greater_than() -> None
```

##### `reset_delete_after_days_since_modification_greater_than` <a name="reset_delete_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetDeleteAfterDaysSinceModificationGreaterThan"></a>

```python
def reset_delete_after_days_since_modification_greater_than() -> None
```

##### `reset_tier_to_archive_after_days_since_creation_greater_than` <a name="reset_tier_to_archive_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceCreationGreaterThan"></a>

```python
def reset_tier_to_archive_after_days_since_creation_greater_than() -> None
```

##### `reset_tier_to_archive_after_days_since_last_access_time_greater_than` <a name="reset_tier_to_archive_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
def reset_tier_to_archive_after_days_since_last_access_time_greater_than() -> None
```

##### `reset_tier_to_archive_after_days_since_last_tier_change_greater_than` <a name="reset_tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
def reset_tier_to_archive_after_days_since_last_tier_change_greater_than() -> None
```

##### `reset_tier_to_archive_after_days_since_modification_greater_than` <a name="reset_tier_to_archive_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToArchiveAfterDaysSinceModificationGreaterThan"></a>

```python
def reset_tier_to_archive_after_days_since_modification_greater_than() -> None
```

##### `reset_tier_to_cool_after_days_since_creation_greater_than` <a name="reset_tier_to_cool_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceCreationGreaterThan"></a>

```python
def reset_tier_to_cool_after_days_since_creation_greater_than() -> None
```

##### `reset_tier_to_cool_after_days_since_last_access_time_greater_than` <a name="reset_tier_to_cool_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
def reset_tier_to_cool_after_days_since_last_access_time_greater_than() -> None
```

##### `reset_tier_to_cool_after_days_since_modification_greater_than` <a name="reset_tier_to_cool_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.resetTierToCoolAfterDaysSinceModificationGreaterThan"></a>

```python
def reset_tier_to_cool_after_days_since_modification_greater_than() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabledInput">auto_tier_to_hot_from_cool_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThanInput">delete_after_days_since_creation_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThanInput">delete_after_days_since_last_access_time_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThanInput">delete_after_days_since_modification_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThanInput">tier_to_archive_after_days_since_creation_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThanInput">tier_to_archive_after_days_since_last_access_time_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput">tier_to_archive_after_days_since_last_tier_change_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThanInput">tier_to_archive_after_days_since_modification_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThanInput">tier_to_cool_after_days_since_creation_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThanInput">tier_to_cool_after_days_since_last_access_time_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThanInput">tier_to_cool_after_days_since_modification_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabled">auto_tier_to_hot_from_cool_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThan">delete_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThan">delete_after_days_since_last_access_time_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThan">delete_after_days_since_modification_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThan">tier_to_archive_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan">tier_to_archive_after_days_since_last_access_time_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThan">tier_to_archive_after_days_since_modification_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThan">tier_to_cool_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan">tier_to_cool_after_days_since_last_access_time_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThan">tier_to_cool_after_days_since_modification_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_tier_to_hot_from_cool_enabled_input`<sup>Optional</sup> <a name="auto_tier_to_hot_from_cool_enabled_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabledInput"></a>

```python
auto_tier_to_hot_from_cool_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_after_days_since_creation_greater_than_input`<sup>Optional</sup> <a name="delete_after_days_since_creation_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThanInput"></a>

```python
delete_after_days_since_creation_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_last_access_time_greater_than_input`<sup>Optional</sup> <a name="delete_after_days_since_last_access_time_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThanInput"></a>

```python
delete_after_days_since_last_access_time_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_modification_greater_than_input`<sup>Optional</sup> <a name="delete_after_days_since_modification_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThanInput"></a>

```python
delete_after_days_since_modification_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_creation_greater_than_input`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_creation_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThanInput"></a>

```python
tier_to_archive_after_days_since_creation_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_access_time_greater_than_input`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_access_time_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThanInput"></a>

```python
tier_to_archive_after_days_since_last_access_time_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than_input`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_modification_greater_than_input`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_modification_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThanInput"></a>

```python
tier_to_archive_after_days_since_modification_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cool_after_days_since_creation_greater_than_input`<sup>Optional</sup> <a name="tier_to_cool_after_days_since_creation_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThanInput"></a>

```python
tier_to_cool_after_days_since_creation_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cool_after_days_since_last_access_time_greater_than_input`<sup>Optional</sup> <a name="tier_to_cool_after_days_since_last_access_time_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThanInput"></a>

```python
tier_to_cool_after_days_since_last_access_time_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cool_after_days_since_modification_greater_than_input`<sup>Optional</sup> <a name="tier_to_cool_after_days_since_modification_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThanInput"></a>

```python
tier_to_cool_after_days_since_modification_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_tier_to_hot_from_cool_enabled`<sup>Required</sup> <a name="auto_tier_to_hot_from_cool_enabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabled"></a>

```python
auto_tier_to_hot_from_cool_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_after_days_since_creation_greater_than`<sup>Required</sup> <a name="delete_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```python
delete_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_last_access_time_greater_than`<sup>Required</sup> <a name="delete_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
delete_after_days_since_last_access_time_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_modification_greater_than`<sup>Required</sup> <a name="delete_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThan"></a>

```python
delete_after_days_since_modification_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_creation_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThan"></a>

```python
tier_to_archive_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_access_time_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_access_time_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_modification_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThan"></a>

```python
tier_to_archive_after_days_since_modification_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cool_after_days_since_creation_greater_than`<sup>Required</sup> <a name="tier_to_cool_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThan"></a>

```python
tier_to_cool_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cool_after_days_since_last_access_time_greater_than`<sup>Required</sup> <a name="tier_to_cool_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan"></a>

```python
tier_to_cool_after_days_since_last_access_time_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_cool_after_days_since_modification_greater_than`<sup>Required</sup> <a name="tier_to_cool_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThan"></a>

```python
tier_to_cool_after_days_since_modification_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference.property.internalValue"></a>

```python
internal_value: StorageManagementPolicyRuleActionsBaseBlob
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a>

---


### StorageManagementPolicyRuleActionsOutputReference <a name="StorageManagementPolicyRuleActionsOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob">put_base_blob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putSnapshot">put_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putVersion">put_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetBaseBlob">reset_base_blob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetSnapshot">reset_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_base_blob` <a name="put_base_blob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob"></a>

```python
def put_base_blob(
  auto_tier_to_hot_from_cool_enabled: typing.Union[bool, IResolvable] = None,
  delete_after_days_since_creation_greater_than: typing.Union[int, float] = None,
  delete_after_days_since_last_access_time_greater_than: typing.Union[int, float] = None,
  delete_after_days_since_modification_greater_than: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_creation_greater_than: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_last_access_time_greater_than: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_modification_greater_than: typing.Union[int, float] = None,
  tier_to_cool_after_days_since_creation_greater_than: typing.Union[int, float] = None,
  tier_to_cool_after_days_since_last_access_time_greater_than: typing.Union[int, float] = None,
  tier_to_cool_after_days_since_modification_greater_than: typing.Union[int, float] = None
) -> None
```

###### `auto_tier_to_hot_from_cool_enabled`<sup>Optional</sup> <a name="auto_tier_to_hot_from_cool_enabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.autoTierToHotFromCoolEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#auto_tier_to_hot_from_cool_enabled StorageManagementPolicy#auto_tier_to_hot_from_cool_enabled}.

---

###### `delete_after_days_since_creation_greater_than`<sup>Optional</sup> <a name="delete_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.deleteAfterDaysSinceCreationGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}.

---

###### `delete_after_days_since_last_access_time_greater_than`<sup>Optional</sup> <a name="delete_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.deleteAfterDaysSinceLastAccessTimeGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_last_access_time_greater_than StorageManagementPolicy#delete_after_days_since_last_access_time_greater_than}.

---

###### `delete_after_days_since_modification_greater_than`<sup>Optional</sup> <a name="delete_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.deleteAfterDaysSinceModificationGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_modification_greater_than StorageManagementPolicy#delete_after_days_since_modification_greater_than}.

---

###### `tier_to_archive_after_days_since_creation_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.tierToArchiveAfterDaysSinceCreationGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_creation_greater_than}.

---

###### `tier_to_archive_after_days_since_last_access_time_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_access_time_greater_than}.

---

###### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}.

---

###### `tier_to_archive_after_days_since_modification_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.tierToArchiveAfterDaysSinceModificationGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_modification_greater_than}.

---

###### `tier_to_cool_after_days_since_creation_greater_than`<sup>Optional</sup> <a name="tier_to_cool_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.tierToCoolAfterDaysSinceCreationGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_creation_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_creation_greater_than}.

---

###### `tier_to_cool_after_days_since_last_access_time_greater_than`<sup>Optional</sup> <a name="tier_to_cool_after_days_since_last_access_time_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_last_access_time_greater_than}.

---

###### `tier_to_cool_after_days_since_modification_greater_than`<sup>Optional</sup> <a name="tier_to_cool_after_days_since_modification_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putBaseBlob.parameter.tierToCoolAfterDaysSinceModificationGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_modification_greater_than}.

---

##### `put_snapshot` <a name="put_snapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putSnapshot"></a>

```python
def put_snapshot(
  change_tier_to_archive_after_days_since_creation: typing.Union[int, float] = None,
  change_tier_to_cool_after_days_since_creation: typing.Union[int, float] = None,
  delete_after_days_since_creation_greater_than: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float] = None
) -> None
```

###### `change_tier_to_archive_after_days_since_creation`<sup>Optional</sup> <a name="change_tier_to_archive_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putSnapshot.parameter.changeTierToArchiveAfterDaysSinceCreation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}.

---

###### `change_tier_to_cool_after_days_since_creation`<sup>Optional</sup> <a name="change_tier_to_cool_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putSnapshot.parameter.changeTierToCoolAfterDaysSinceCreation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}.

---

###### `delete_after_days_since_creation_greater_than`<sup>Optional</sup> <a name="delete_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putSnapshot.parameter.deleteAfterDaysSinceCreationGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}.

---

###### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putSnapshot.parameter.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}.

---

##### `put_version` <a name="put_version" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putVersion"></a>

```python
def put_version(
  change_tier_to_archive_after_days_since_creation: typing.Union[int, float] = None,
  change_tier_to_cool_after_days_since_creation: typing.Union[int, float] = None,
  delete_after_days_since_creation: typing.Union[int, float] = None,
  tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float] = None
) -> None
```

###### `change_tier_to_archive_after_days_since_creation`<sup>Optional</sup> <a name="change_tier_to_archive_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putVersion.parameter.changeTierToArchiveAfterDaysSinceCreation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}.

---

###### `change_tier_to_cool_after_days_since_creation`<sup>Optional</sup> <a name="change_tier_to_cool_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putVersion.parameter.changeTierToCoolAfterDaysSinceCreation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}.

---

###### `delete_after_days_since_creation`<sup>Optional</sup> <a name="delete_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putVersion.parameter.deleteAfterDaysSinceCreation"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation StorageManagementPolicy#delete_after_days_since_creation}.

---

###### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.putVersion.parameter.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_tier_change_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_tier_change_greater_than}.

---

##### `reset_base_blob` <a name="reset_base_blob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetBaseBlob"></a>

```python
def reset_base_blob() -> None
```

##### `reset_snapshot` <a name="reset_snapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetSnapshot"></a>

```python
def reset_snapshot() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.baseBlob">base_blob</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference">StorageManagementPolicyRuleActionsBaseBlobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference">StorageManagementPolicyRuleActionsSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.version">version</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference">StorageManagementPolicyRuleActionsVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.baseBlobInput">base_blob_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.snapshotInput">snapshot_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.versionInput">version_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_blob`<sup>Required</sup> <a name="base_blob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.baseBlob"></a>

```python
base_blob: StorageManagementPolicyRuleActionsBaseBlobOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlobOutputReference">StorageManagementPolicyRuleActionsBaseBlobOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.snapshot"></a>

```python
snapshot: StorageManagementPolicyRuleActionsSnapshotOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference">StorageManagementPolicyRuleActionsSnapshotOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.version"></a>

```python
version: StorageManagementPolicyRuleActionsVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference">StorageManagementPolicyRuleActionsVersionOutputReference</a>

---

##### `base_blob_input`<sup>Optional</sup> <a name="base_blob_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.baseBlobInput"></a>

```python
base_blob_input: StorageManagementPolicyRuleActionsBaseBlob
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a>

---

##### `snapshot_input`<sup>Optional</sup> <a name="snapshot_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.snapshotInput"></a>

```python
snapshot_input: StorageManagementPolicyRuleActionsSnapshot
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.versionInput"></a>

```python
version_input: StorageManagementPolicyRuleActionsVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference.property.internalValue"></a>

```python
internal_value: StorageManagementPolicyRuleActions
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a>

---


### StorageManagementPolicyRuleActionsSnapshotOutputReference <a name="StorageManagementPolicyRuleActionsSnapshotOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetChangeTierToArchiveAfterDaysSinceCreation">reset_change_tier_to_archive_after_days_since_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetChangeTierToCoolAfterDaysSinceCreation">reset_change_tier_to_cool_after_days_since_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetDeleteAfterDaysSinceCreationGreaterThan">reset_delete_after_days_since_creation_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan">reset_tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_change_tier_to_archive_after_days_since_creation` <a name="reset_change_tier_to_archive_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetChangeTierToArchiveAfterDaysSinceCreation"></a>

```python
def reset_change_tier_to_archive_after_days_since_creation() -> None
```

##### `reset_change_tier_to_cool_after_days_since_creation` <a name="reset_change_tier_to_cool_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetChangeTierToCoolAfterDaysSinceCreation"></a>

```python
def reset_change_tier_to_cool_after_days_since_creation() -> None
```

##### `reset_delete_after_days_since_creation_greater_than` <a name="reset_delete_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetDeleteAfterDaysSinceCreationGreaterThan"></a>

```python
def reset_delete_after_days_since_creation_greater_than() -> None
```

##### `reset_tier_to_archive_after_days_since_last_tier_change_greater_than` <a name="reset_tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
def reset_tier_to_archive_after_days_since_last_tier_change_greater_than() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreationInput">change_tier_to_archive_after_days_since_creation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreationInput">change_tier_to_cool_after_days_since_creation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThanInput">delete_after_days_since_creation_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput">tier_to_archive_after_days_since_last_tier_change_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreation">change_tier_to_archive_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreation">change_tier_to_cool_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThan">delete_after_days_since_creation_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_tier_to_archive_after_days_since_creation_input`<sup>Optional</sup> <a name="change_tier_to_archive_after_days_since_creation_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreationInput"></a>

```python
change_tier_to_archive_after_days_since_creation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `change_tier_to_cool_after_days_since_creation_input`<sup>Optional</sup> <a name="change_tier_to_cool_after_days_since_creation_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreationInput"></a>

```python
change_tier_to_cool_after_days_since_creation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_creation_greater_than_input`<sup>Optional</sup> <a name="delete_after_days_since_creation_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThanInput"></a>

```python
delete_after_days_since_creation_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than_input`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `change_tier_to_archive_after_days_since_creation`<sup>Required</sup> <a name="change_tier_to_archive_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```python
change_tier_to_archive_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `change_tier_to_cool_after_days_since_creation`<sup>Required</sup> <a name="change_tier_to_cool_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreation"></a>

```python
change_tier_to_cool_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_creation_greater_than`<sup>Required</sup> <a name="delete_after_days_since_creation_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```python
delete_after_days_since_creation_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: StorageManagementPolicyRuleActionsSnapshot
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a>

---


### StorageManagementPolicyRuleActionsVersionOutputReference <a name="StorageManagementPolicyRuleActionsVersionOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetChangeTierToArchiveAfterDaysSinceCreation">reset_change_tier_to_archive_after_days_since_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetChangeTierToCoolAfterDaysSinceCreation">reset_change_tier_to_cool_after_days_since_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetDeleteAfterDaysSinceCreation">reset_delete_after_days_since_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan">reset_tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_change_tier_to_archive_after_days_since_creation` <a name="reset_change_tier_to_archive_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetChangeTierToArchiveAfterDaysSinceCreation"></a>

```python
def reset_change_tier_to_archive_after_days_since_creation() -> None
```

##### `reset_change_tier_to_cool_after_days_since_creation` <a name="reset_change_tier_to_cool_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetChangeTierToCoolAfterDaysSinceCreation"></a>

```python
def reset_change_tier_to_cool_after_days_since_creation() -> None
```

##### `reset_delete_after_days_since_creation` <a name="reset_delete_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetDeleteAfterDaysSinceCreation"></a>

```python
def reset_delete_after_days_since_creation() -> None
```

##### `reset_tier_to_archive_after_days_since_last_tier_change_greater_than` <a name="reset_tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.resetTierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
def reset_tier_to_archive_after_days_since_last_tier_change_greater_than() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreationInput">change_tier_to_archive_after_days_since_creation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreationInput">change_tier_to_cool_after_days_since_creation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreationInput">delete_after_days_since_creation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput">tier_to_archive_after_days_since_last_tier_change_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreation">change_tier_to_archive_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreation">change_tier_to_cool_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreation">delete_after_days_since_creation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tier_to_archive_after_days_since_last_tier_change_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_tier_to_archive_after_days_since_creation_input`<sup>Optional</sup> <a name="change_tier_to_archive_after_days_since_creation_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreationInput"></a>

```python
change_tier_to_archive_after_days_since_creation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `change_tier_to_cool_after_days_since_creation_input`<sup>Optional</sup> <a name="change_tier_to_cool_after_days_since_creation_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreationInput"></a>

```python
change_tier_to_cool_after_days_since_creation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_creation_input`<sup>Optional</sup> <a name="delete_after_days_since_creation_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreationInput"></a>

```python
delete_after_days_since_creation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than_input`<sup>Optional</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThanInput"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `change_tier_to_archive_after_days_since_creation`<sup>Required</sup> <a name="change_tier_to_archive_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```python
change_tier_to_archive_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `change_tier_to_cool_after_days_since_creation`<sup>Required</sup> <a name="change_tier_to_cool_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreation"></a>

```python
change_tier_to_cool_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_days_since_creation`<sup>Required</sup> <a name="delete_after_days_since_creation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreation"></a>

```python
delete_after_days_since_creation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_to_archive_after_days_since_last_tier_change_greater_than`<sup>Required</sup> <a name="tier_to_archive_after_days_since_last_tier_change_greater_than" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```python
tier_to_archive_after_days_since_last_tier_change_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersionOutputReference.property.internalValue"></a>

```python
internal_value: StorageManagementPolicyRuleActionsVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a>

---


### StorageManagementPolicyRuleFiltersMatchBlobIndexTagList <a name="StorageManagementPolicyRuleFiltersMatchBlobIndexTagList" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag">StorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageManagementPolicyRuleFiltersMatchBlobIndexTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag">StorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>]]

---


### StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference <a name="StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resetOperation">reset_operation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operation` <a name="reset_operation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resetOperation"></a>

```python
def reset_operation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag">StorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StorageManagementPolicyRuleFiltersMatchBlobIndexTag, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag">StorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>, cdktf.IResolvable]

---


### StorageManagementPolicyRuleFiltersOutputReference <a name="StorageManagementPolicyRuleFiltersOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.putMatchBlobIndexTag">put_match_blob_index_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resetMatchBlobIndexTag">reset_match_blob_index_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resetPrefixMatch">reset_prefix_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_blob_index_tag` <a name="put_match_blob_index_tag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.putMatchBlobIndexTag"></a>

```python
def put_match_blob_index_tag(
  value: typing.Union[IResolvable, typing.List[StorageManagementPolicyRuleFiltersMatchBlobIndexTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.putMatchBlobIndexTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag">StorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>]]

---

##### `reset_match_blob_index_tag` <a name="reset_match_blob_index_tag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resetMatchBlobIndexTag"></a>

```python
def reset_match_blob_index_tag() -> None
```

##### `reset_prefix_match` <a name="reset_prefix_match" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.resetPrefixMatch"></a>

```python
def reset_prefix_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTag">match_blob_index_tag</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList">StorageManagementPolicyRuleFiltersMatchBlobIndexTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.blobTypesInput">blob_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTagInput">match_blob_index_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag">StorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.prefixMatchInput">prefix_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.blobTypes">blob_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.prefixMatch">prefix_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_blob_index_tag`<sup>Required</sup> <a name="match_blob_index_tag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTag"></a>

```python
match_blob_index_tag: StorageManagementPolicyRuleFiltersMatchBlobIndexTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTagList">StorageManagementPolicyRuleFiltersMatchBlobIndexTagList</a>

---

##### `blob_types_input`<sup>Optional</sup> <a name="blob_types_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.blobTypesInput"></a>

```python
blob_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_blob_index_tag_input`<sup>Optional</sup> <a name="match_blob_index_tag_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTagInput"></a>

```python
match_blob_index_tag_input: typing.Union[IResolvable, typing.List[StorageManagementPolicyRuleFiltersMatchBlobIndexTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag">StorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>]]

---

##### `prefix_match_input`<sup>Optional</sup> <a name="prefix_match_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.prefixMatchInput"></a>

```python
prefix_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blob_types`<sup>Required</sup> <a name="blob_types" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.blobTypes"></a>

```python
blob_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_match`<sup>Required</sup> <a name="prefix_match" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.prefixMatch"></a>

```python
prefix_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference.property.internalValue"></a>

```python
internal_value: StorageManagementPolicyRuleFilters
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a>

---


### StorageManagementPolicyRuleList <a name="StorageManagementPolicyRuleList" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageManagementPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageManagementPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>]]

---


### StorageManagementPolicyRuleOutputReference <a name="StorageManagementPolicyRuleOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putFilters">put_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putActions"></a>

```python
def put_actions(
  base_blob: StorageManagementPolicyRuleActionsBaseBlob = None,
  snapshot: StorageManagementPolicyRuleActionsSnapshot = None,
  version: StorageManagementPolicyRuleActionsVersion = None
) -> None
```

###### `base_blob`<sup>Optional</sup> <a name="base_blob" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putActions.parameter.baseBlob"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsBaseBlob">StorageManagementPolicyRuleActionsBaseBlob</a>

base_blob block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#base_blob StorageManagementPolicy#base_blob}

---

###### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putActions.parameter.snapshot"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsSnapshot">StorageManagementPolicyRuleActionsSnapshot</a>

snapshot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#snapshot StorageManagementPolicy#snapshot}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putActions.parameter.version"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsVersion">StorageManagementPolicyRuleActionsVersion</a>

version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#version StorageManagementPolicy#version}

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putFilters"></a>

```python
def put_filters(
  blob_types: typing.List[str],
  match_blob_index_tag: typing.Union[IResolvable, typing.List[StorageManagementPolicyRuleFiltersMatchBlobIndexTag]] = None,
  prefix_match: typing.List[str] = None
) -> None
```

###### `blob_types`<sup>Required</sup> <a name="blob_types" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putFilters.parameter.blobTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#blob_types StorageManagementPolicy#blob_types}.

---

###### `match_blob_index_tag`<sup>Optional</sup> <a name="match_blob_index_tag" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putFilters.parameter.matchBlobIndexTag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersMatchBlobIndexTag">StorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>]]

match_blob_index_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#match_blob_index_tag StorageManagementPolicy#match_blob_index_tag}

---

###### `prefix_match`<sup>Optional</sup> <a name="prefix_match" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.putFilters.parameter.prefixMatch"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#prefix_match StorageManagementPolicy#prefix_match}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference">StorageManagementPolicyRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference">StorageManagementPolicyRuleFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.actionsInput">actions_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.filtersInput">filters_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.actions"></a>

```python
actions: StorageManagementPolicyRuleActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActionsOutputReference">StorageManagementPolicyRuleActionsOutputReference</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.filters"></a>

```python
filters: StorageManagementPolicyRuleFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFiltersOutputReference">StorageManagementPolicyRuleFiltersOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.actionsInput"></a>

```python
actions_input: StorageManagementPolicyRuleActions
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleActions">StorageManagementPolicyRuleActions</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.filtersInput"></a>

```python
filters_input: StorageManagementPolicyRuleFilters
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleFilters">StorageManagementPolicyRuleFilters</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StorageManagementPolicyRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyRule">StorageManagementPolicyRule</a>, cdktf.IResolvable]

---


### StorageManagementPolicyTimeoutsOutputReference <a name="StorageManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_management_policy

storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StorageManagementPolicyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.storageManagementPolicy.StorageManagementPolicyTimeouts">StorageManagementPolicyTimeouts</a>, cdktf.IResolvable]

---



