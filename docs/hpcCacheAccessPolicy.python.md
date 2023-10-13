# `azurerm_hpc_cache_access_policy`

Refer to the Terraform Registory for docs: [`azurerm_hpc_cache_access_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy).

# `hpcCacheAccessPolicy` Submodule <a name="`hpcCacheAccessPolicy` Submodule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCacheAccessPolicy <a name="HpcCacheAccessPolicy" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy azurerm_hpc_cache_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_access_policy

hpcCacheAccessPolicy.HpcCacheAccessPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_rule: typing.Union[IResolvable, typing.List[HpcCacheAccessPolicyAccessRule]],
  hpc_cache_id: str,
  name: str,
  id: str = None,
  timeouts: HpcCacheAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.accessRule">access_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]]</code> | access_rule block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.hpcCacheId">hpc_cache_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#hpc_cache_id HpcCacheAccessPolicy#hpc_cache_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#name HpcCacheAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#id HpcCacheAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_rule`<sup>Required</sup> <a name="access_rule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.accessRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]]

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#access_rule HpcCacheAccessPolicy#access_rule}

---

##### `hpc_cache_id`<sup>Required</sup> <a name="hpc_cache_id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.hpcCacheId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#hpc_cache_id HpcCacheAccessPolicy#hpc_cache_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#name HpcCacheAccessPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#id HpcCacheAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#timeouts HpcCacheAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putAccessRule">put_access_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_access_rule` <a name="put_access_rule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putAccessRule"></a>

```python
def put_access_rule(
  value: typing.Union[IResolvable, typing.List[HpcCacheAccessPolicyAccessRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putAccessRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#create HpcCacheAccessPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#delete HpcCacheAccessPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#read HpcCacheAccessPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#update HpcCacheAccessPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_access_policy

hpcCacheAccessPolicy.HpcCacheAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_access_policy

hpcCacheAccessPolicy.HpcCacheAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_access_policy

hpcCacheAccessPolicy.HpcCacheAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.accessRule">access_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList">HpcCacheAccessPolicyAccessRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference">HpcCacheAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.accessRuleInput">access_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.hpcCacheIdInput">hpc_cache_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.hpcCacheId">hpc_cache_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_rule`<sup>Required</sup> <a name="access_rule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.accessRule"></a>

```python
access_rule: HpcCacheAccessPolicyAccessRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList">HpcCacheAccessPolicyAccessRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.timeouts"></a>

```python
timeouts: HpcCacheAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference">HpcCacheAccessPolicyTimeoutsOutputReference</a>

---

##### `access_rule_input`<sup>Optional</sup> <a name="access_rule_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.accessRuleInput"></a>

```python
access_rule_input: typing.Union[IResolvable, typing.List[HpcCacheAccessPolicyAccessRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]]

---

##### `hpc_cache_id_input`<sup>Optional</sup> <a name="hpc_cache_id_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.hpcCacheIdInput"></a>

```python
hpc_cache_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HpcCacheAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a>]

---

##### `hpc_cache_id`<sup>Required</sup> <a name="hpc_cache_id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.hpcCacheId"></a>

```python
hpc_cache_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheAccessPolicyAccessRule <a name="HpcCacheAccessPolicyAccessRule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_access_policy

hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule(
  access: str,
  scope: str,
  anonymous_gid: typing.Union[int, float] = None,
  anonymous_uid: typing.Union[int, float] = None,
  filter: str = None,
  root_squash_enabled: typing.Union[bool, IResolvable] = None,
  submount_access_enabled: typing.Union[bool, IResolvable] = None,
  suid_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.access">access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#access HpcCacheAccessPolicy#access}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#scope HpcCacheAccessPolicy#scope}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.anonymousGid">anonymous_gid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#anonymous_gid HpcCacheAccessPolicy#anonymous_gid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.anonymousUid">anonymous_uid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#anonymous_uid HpcCacheAccessPolicy#anonymous_uid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#filter HpcCacheAccessPolicy#filter}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.rootSquashEnabled">root_squash_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#root_squash_enabled HpcCacheAccessPolicy#root_squash_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.submountAccessEnabled">submount_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#submount_access_enabled HpcCacheAccessPolicy#submount_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.suidEnabled">suid_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#suid_enabled HpcCacheAccessPolicy#suid_enabled}. |

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.access"></a>

```python
access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#access HpcCacheAccessPolicy#access}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#scope HpcCacheAccessPolicy#scope}.

---

##### `anonymous_gid`<sup>Optional</sup> <a name="anonymous_gid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.anonymousGid"></a>

```python
anonymous_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#anonymous_gid HpcCacheAccessPolicy#anonymous_gid}.

---

##### `anonymous_uid`<sup>Optional</sup> <a name="anonymous_uid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.anonymousUid"></a>

```python
anonymous_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#anonymous_uid HpcCacheAccessPolicy#anonymous_uid}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#filter HpcCacheAccessPolicy#filter}.

---

##### `root_squash_enabled`<sup>Optional</sup> <a name="root_squash_enabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.rootSquashEnabled"></a>

```python
root_squash_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#root_squash_enabled HpcCacheAccessPolicy#root_squash_enabled}.

---

##### `submount_access_enabled`<sup>Optional</sup> <a name="submount_access_enabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.submountAccessEnabled"></a>

```python
submount_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#submount_access_enabled HpcCacheAccessPolicy#submount_access_enabled}.

---

##### `suid_enabled`<sup>Optional</sup> <a name="suid_enabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule.property.suidEnabled"></a>

```python
suid_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#suid_enabled HpcCacheAccessPolicy#suid_enabled}.

---

### HpcCacheAccessPolicyConfig <a name="HpcCacheAccessPolicyConfig" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_access_policy

hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_rule: typing.Union[IResolvable, typing.List[HpcCacheAccessPolicyAccessRule]],
  hpc_cache_id: str,
  name: str,
  id: str = None,
  timeouts: HpcCacheAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.accessRule">access_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]]</code> | access_rule block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.hpcCacheId">hpc_cache_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#hpc_cache_id HpcCacheAccessPolicy#hpc_cache_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#name HpcCacheAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#id HpcCacheAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_rule`<sup>Required</sup> <a name="access_rule" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.accessRule"></a>

```python
access_rule: typing.Union[IResolvable, typing.List[HpcCacheAccessPolicyAccessRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]]

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#access_rule HpcCacheAccessPolicy#access_rule}

---

##### `hpc_cache_id`<sup>Required</sup> <a name="hpc_cache_id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.hpcCacheId"></a>

```python
hpc_cache_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#hpc_cache_id HpcCacheAccessPolicy#hpc_cache_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#name HpcCacheAccessPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#id HpcCacheAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: HpcCacheAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#timeouts HpcCacheAccessPolicy#timeouts}

---

### HpcCacheAccessPolicyTimeouts <a name="HpcCacheAccessPolicyTimeouts" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_access_policy

hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#create HpcCacheAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#delete HpcCacheAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#read HpcCacheAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#update HpcCacheAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#create HpcCacheAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#delete HpcCacheAccessPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#read HpcCacheAccessPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/hpc_cache_access_policy#update HpcCacheAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheAccessPolicyAccessRuleList <a name="HpcCacheAccessPolicyAccessRuleList" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_access_policy

hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HpcCacheAccessPolicyAccessRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HpcCacheAccessPolicyAccessRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]]

---


### HpcCacheAccessPolicyAccessRuleOutputReference <a name="HpcCacheAccessPolicyAccessRuleOutputReference" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_access_policy

hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetAnonymousGid">reset_anonymous_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetAnonymousUid">reset_anonymous_uid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled">reset_root_squash_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled">reset_submount_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetSuidEnabled">reset_suid_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_anonymous_gid` <a name="reset_anonymous_gid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetAnonymousGid"></a>

```python
def reset_anonymous_gid() -> None
```

##### `reset_anonymous_uid` <a name="reset_anonymous_uid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetAnonymousUid"></a>

```python
def reset_anonymous_uid() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_root_squash_enabled` <a name="reset_root_squash_enabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled"></a>

```python
def reset_root_squash_enabled() -> None
```

##### `reset_submount_access_enabled` <a name="reset_submount_access_enabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled"></a>

```python
def reset_submount_access_enabled() -> None
```

##### `reset_suid_enabled` <a name="reset_suid_enabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.resetSuidEnabled"></a>

```python
def reset_suid_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousGidInput">anonymous_gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousUidInput">anonymous_uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput">root_squash_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput">submount_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.suidEnabledInput">suid_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousGid">anonymous_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousUid">anonymous_uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled">root_squash_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled">submount_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.suidEnabled">suid_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `anonymous_gid_input`<sup>Optional</sup> <a name="anonymous_gid_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousGidInput"></a>

```python
anonymous_gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `anonymous_uid_input`<sup>Optional</sup> <a name="anonymous_uid_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousUidInput"></a>

```python
anonymous_uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `root_squash_enabled_input`<sup>Optional</sup> <a name="root_squash_enabled_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput"></a>

```python
root_squash_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `submount_access_enabled_input`<sup>Optional</sup> <a name="submount_access_enabled_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput"></a>

```python
submount_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suid_enabled_input`<sup>Optional</sup> <a name="suid_enabled_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.suidEnabledInput"></a>

```python
suid_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `anonymous_gid`<sup>Required</sup> <a name="anonymous_gid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousGid"></a>

```python
anonymous_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `anonymous_uid`<sup>Required</sup> <a name="anonymous_uid" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.anonymousUid"></a>

```python
anonymous_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `root_squash_enabled`<sup>Required</sup> <a name="root_squash_enabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled"></a>

```python
root_squash_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `submount_access_enabled`<sup>Required</sup> <a name="submount_access_enabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled"></a>

```python
submount_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suid_enabled`<sup>Required</sup> <a name="suid_enabled" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.suidEnabled"></a>

```python
suid_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HpcCacheAccessPolicyAccessRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyAccessRule">HpcCacheAccessPolicyAccessRule</a>]

---


### HpcCacheAccessPolicyTimeoutsOutputReference <a name="HpcCacheAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_access_policy

hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HpcCacheAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheAccessPolicy.HpcCacheAccessPolicyTimeouts">HpcCacheAccessPolicyTimeouts</a>]

---



