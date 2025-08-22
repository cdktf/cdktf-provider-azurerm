# `apiManagementProduct` Submodule <a name="`apiManagementProduct` Submodule" id="@cdktf/provider-azurerm.apiManagementProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementProduct <a name="ApiManagementProduct" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product azurerm_api_management_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_product

apiManagementProduct.ApiManagementProduct(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  display_name: str,
  product_id: str,
  published: typing.Union[bool, IResolvable],
  resource_group_name: str,
  approval_required: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  subscription_required: typing.Union[bool, IResolvable] = None,
  subscriptions_limit: typing.Union[int, float] = None,
  terms: str = None,
  timeouts: ApiManagementProductTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#api_management_name ApiManagementProduct#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#display_name ApiManagementProduct#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#product_id ApiManagementProduct#product_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.published">published</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#published ApiManagementProduct#published}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#resource_group_name ApiManagementProduct#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.approvalRequired">approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#approval_required ApiManagementProduct#approval_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#description ApiManagementProduct#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#id ApiManagementProduct#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.subscriptionRequired">subscription_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#subscription_required ApiManagementProduct#subscription_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.subscriptionsLimit">subscriptions_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#subscriptions_limit ApiManagementProduct#subscriptions_limit}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.terms">terms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#terms ApiManagementProduct#terms}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.apiManagementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#api_management_name ApiManagementProduct#api_management_name}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#display_name ApiManagementProduct#display_name}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#product_id ApiManagementProduct#product_id}.

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.published"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#published ApiManagementProduct#published}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#resource_group_name ApiManagementProduct#resource_group_name}.

---

##### `approval_required`<sup>Optional</sup> <a name="approval_required" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.approvalRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#approval_required ApiManagementProduct#approval_required}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#description ApiManagementProduct#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#id ApiManagementProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscription_required`<sup>Optional</sup> <a name="subscription_required" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.subscriptionRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#subscription_required ApiManagementProduct#subscription_required}.

---

##### `subscriptions_limit`<sup>Optional</sup> <a name="subscriptions_limit" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.subscriptionsLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#subscriptions_limit ApiManagementProduct#subscriptions_limit}.

---

##### `terms`<sup>Optional</sup> <a name="terms" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.terms"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#terms ApiManagementProduct#terms}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#timeouts ApiManagementProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetApprovalRequired">reset_approval_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetSubscriptionRequired">reset_subscription_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetSubscriptionsLimit">reset_subscriptions_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetTerms">reset_terms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#create ApiManagementProduct#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#delete ApiManagementProduct#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#read ApiManagementProduct#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#update ApiManagementProduct#update}.

---

##### `reset_approval_required` <a name="reset_approval_required" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetApprovalRequired"></a>

```python
def reset_approval_required() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_subscription_required` <a name="reset_subscription_required" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetSubscriptionRequired"></a>

```python
def reset_subscription_required() -> None
```

##### `reset_subscriptions_limit` <a name="reset_subscriptions_limit" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetSubscriptionsLimit"></a>

```python
def reset_subscriptions_limit() -> None
```

##### `reset_terms` <a name="reset_terms" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetTerms"></a>

```python
def reset_terms() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiManagementProduct resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_product

apiManagementProduct.ApiManagementProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_product

apiManagementProduct.ApiManagementProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_product

apiManagementProduct.ApiManagementProduct.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_product

apiManagementProduct.ApiManagementProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiManagementProduct resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiManagementProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiManagementProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference">ApiManagementProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.apiManagementNameInput">api_management_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.approvalRequiredInput">approval_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.publishedInput">published_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionRequiredInput">subscription_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionsLimitInput">subscriptions_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.termsInput">terms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.apiManagementName">api_management_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.approvalRequired">approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.published">published</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionRequired">subscription_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionsLimit">subscriptions_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terms">terms</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.timeouts"></a>

```python
timeouts: ApiManagementProductTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference">ApiManagementProductTimeoutsOutputReference</a>

---

##### `api_management_name_input`<sup>Optional</sup> <a name="api_management_name_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.apiManagementNameInput"></a>

```python
api_management_name_input: str
```

- *Type:* str

---

##### `approval_required_input`<sup>Optional</sup> <a name="approval_required_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.approvalRequiredInput"></a>

```python
approval_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `published_input`<sup>Optional</sup> <a name="published_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.publishedInput"></a>

```python
published_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `subscription_required_input`<sup>Optional</sup> <a name="subscription_required_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionRequiredInput"></a>

```python
subscription_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subscriptions_limit_input`<sup>Optional</sup> <a name="subscriptions_limit_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionsLimitInput"></a>

```python
subscriptions_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terms_input`<sup>Optional</sup> <a name="terms_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.termsInput"></a>

```python
terms_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApiManagementProductTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a>]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

---

##### `approval_required`<sup>Required</sup> <a name="approval_required" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.approvalRequired"></a>

```python
approval_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.published"></a>

```python
published: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `subscription_required`<sup>Required</sup> <a name="subscription_required" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionRequired"></a>

```python
subscription_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subscriptions_limit`<sup>Required</sup> <a name="subscriptions_limit" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.subscriptionsLimit"></a>

```python
subscriptions_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terms`<sup>Required</sup> <a name="terms" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.terms"></a>

```python
terms: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementProductConfig <a name="ApiManagementProductConfig" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_product

apiManagementProduct.ApiManagementProductConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  display_name: str,
  product_id: str,
  published: typing.Union[bool, IResolvable],
  resource_group_name: str,
  approval_required: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  subscription_required: typing.Union[bool, IResolvable] = None,
  subscriptions_limit: typing.Union[int, float] = None,
  terms: str = None,
  timeouts: ApiManagementProductTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#api_management_name ApiManagementProduct#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#display_name ApiManagementProduct#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#product_id ApiManagementProduct#product_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.published">published</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#published ApiManagementProduct#published}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#resource_group_name ApiManagementProduct#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.approvalRequired">approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#approval_required ApiManagementProduct#approval_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#description ApiManagementProduct#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#id ApiManagementProduct#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.subscriptionRequired">subscription_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#subscription_required ApiManagementProduct#subscription_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.subscriptionsLimit">subscriptions_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#subscriptions_limit ApiManagementProduct#subscriptions_limit}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.terms">terms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#terms ApiManagementProduct#terms}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#api_management_name ApiManagementProduct#api_management_name}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#display_name ApiManagementProduct#display_name}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#product_id ApiManagementProduct#product_id}.

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.published"></a>

```python
published: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#published ApiManagementProduct#published}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#resource_group_name ApiManagementProduct#resource_group_name}.

---

##### `approval_required`<sup>Optional</sup> <a name="approval_required" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.approvalRequired"></a>

```python
approval_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#approval_required ApiManagementProduct#approval_required}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#description ApiManagementProduct#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#id ApiManagementProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscription_required`<sup>Optional</sup> <a name="subscription_required" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.subscriptionRequired"></a>

```python
subscription_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#subscription_required ApiManagementProduct#subscription_required}.

---

##### `subscriptions_limit`<sup>Optional</sup> <a name="subscriptions_limit" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.subscriptionsLimit"></a>

```python
subscriptions_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#subscriptions_limit ApiManagementProduct#subscriptions_limit}.

---

##### `terms`<sup>Optional</sup> <a name="terms" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.terms"></a>

```python
terms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#terms ApiManagementProduct#terms}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductConfig.property.timeouts"></a>

```python
timeouts: ApiManagementProductTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#timeouts ApiManagementProduct#timeouts}

---

### ApiManagementProductTimeouts <a name="ApiManagementProductTimeouts" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_product

apiManagementProduct.ApiManagementProductTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#create ApiManagementProduct#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#delete ApiManagementProduct#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#read ApiManagementProduct#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#update ApiManagementProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#create ApiManagementProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#delete ApiManagementProduct#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#read ApiManagementProduct#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_product#update ApiManagementProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementProductTimeoutsOutputReference <a name="ApiManagementProductTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_product

apiManagementProduct.ApiManagementProductTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementProductTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementProduct.ApiManagementProductTimeouts">ApiManagementProductTimeouts</a>]

---



