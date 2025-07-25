# `staticSiteCustomDomain` Submodule <a name="`staticSiteCustomDomain` Submodule" id="@cdktf/provider-azurerm.staticSiteCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StaticSiteCustomDomain <a name="StaticSiteCustomDomain" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain azurerm_static_site_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_site_custom_domain

staticSiteCustomDomain.StaticSiteCustomDomain(
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
  static_site_id: str,
  id: str = None,
  timeouts: StaticSiteCustomDomainTimeouts = None,
  validation_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#domain_name StaticSiteCustomDomain#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.staticSiteId">static_site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#static_site_id StaticSiteCustomDomain#static_site_id}. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#id StaticSiteCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts">StaticSiteCustomDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.validationType">validation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#validation_type StaticSiteCustomDomain#validation_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#domain_name StaticSiteCustomDomain#domain_name}.

---

##### `static_site_id`<sup>Required</sup> <a name="static_site_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.staticSiteId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#static_site_id StaticSiteCustomDomain#static_site_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#id StaticSiteCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts">StaticSiteCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#timeouts StaticSiteCustomDomain#timeouts}

---

##### `validation_type`<sup>Optional</sup> <a name="validation_type" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.Initializer.parameter.validationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#validation_type StaticSiteCustomDomain#validation_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.resetValidationType">reset_validation_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#create StaticSiteCustomDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#delete StaticSiteCustomDomain#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#read StaticSiteCustomDomain#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validation_type` <a name="reset_validation_type" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.resetValidationType"></a>

```python
def reset_validation_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StaticSiteCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import static_site_custom_domain

staticSiteCustomDomain.StaticSiteCustomDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import static_site_custom_domain

staticSiteCustomDomain.StaticSiteCustomDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import static_site_custom_domain

staticSiteCustomDomain.StaticSiteCustomDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import static_site_custom_domain

staticSiteCustomDomain.StaticSiteCustomDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StaticSiteCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StaticSiteCustomDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StaticSiteCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StaticSiteCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference">StaticSiteCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.validationToken">validation_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.staticSiteIdInput">static_site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts">StaticSiteCustomDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.validationTypeInput">validation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.staticSiteId">static_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.validationType">validation_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.timeouts"></a>

```python
timeouts: StaticSiteCustomDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference">StaticSiteCustomDomainTimeoutsOutputReference</a>

---

##### `validation_token`<sup>Required</sup> <a name="validation_token" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.validationToken"></a>

```python
validation_token: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `static_site_id_input`<sup>Optional</sup> <a name="static_site_id_input" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.staticSiteIdInput"></a>

```python
static_site_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StaticSiteCustomDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts">StaticSiteCustomDomainTimeouts</a>]

---

##### `validation_type_input`<sup>Optional</sup> <a name="validation_type_input" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.validationTypeInput"></a>

```python
validation_type_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `static_site_id`<sup>Required</sup> <a name="static_site_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.staticSiteId"></a>

```python
static_site_id: str
```

- *Type:* str

---

##### `validation_type`<sup>Required</sup> <a name="validation_type" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.validationType"></a>

```python
validation_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StaticSiteCustomDomainConfig <a name="StaticSiteCustomDomainConfig" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_site_custom_domain

staticSiteCustomDomain.StaticSiteCustomDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  static_site_id: str,
  id: str = None,
  timeouts: StaticSiteCustomDomainTimeouts = None,
  validation_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#domain_name StaticSiteCustomDomain#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.staticSiteId">static_site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#static_site_id StaticSiteCustomDomain#static_site_id}. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#id StaticSiteCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts">StaticSiteCustomDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.validationType">validation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#validation_type StaticSiteCustomDomain#validation_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#domain_name StaticSiteCustomDomain#domain_name}.

---

##### `static_site_id`<sup>Required</sup> <a name="static_site_id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.staticSiteId"></a>

```python
static_site_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#static_site_id StaticSiteCustomDomain#static_site_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#id StaticSiteCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.timeouts"></a>

```python
timeouts: StaticSiteCustomDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts">StaticSiteCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#timeouts StaticSiteCustomDomain#timeouts}

---

##### `validation_type`<sup>Optional</sup> <a name="validation_type" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainConfig.property.validationType"></a>

```python
validation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#validation_type StaticSiteCustomDomain#validation_type}.

---

### StaticSiteCustomDomainTimeouts <a name="StaticSiteCustomDomainTimeouts" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_site_custom_domain

staticSiteCustomDomain.StaticSiteCustomDomainTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#create StaticSiteCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#delete StaticSiteCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#read StaticSiteCustomDomain#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#create StaticSiteCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#delete StaticSiteCustomDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/static_site_custom_domain#read StaticSiteCustomDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### StaticSiteCustomDomainTimeoutsOutputReference <a name="StaticSiteCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_site_custom_domain

staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts">StaticSiteCustomDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StaticSiteCustomDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.staticSiteCustomDomain.StaticSiteCustomDomainTimeouts">StaticSiteCustomDomainTimeouts</a>]

---



