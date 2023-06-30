# `azurerm_databricks_workspace_customer_managed_key`

Refer to the Terraform Registory for docs: [`azurerm_databricks_workspace_customer_managed_key`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key).

# `databricksWorkspaceCustomerManagedKey` Submodule <a name="`databricksWorkspaceCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksWorkspaceCustomerManagedKey <a name="DatabricksWorkspaceCustomerManagedKey" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key azurerm_databricks_workspace_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/databricksworkspacecustomermanagedkey"

databricksworkspacecustomermanagedkey.NewDatabricksWorkspaceCustomerManagedKey(scope Construct, id *string, config DatabricksWorkspaceCustomerManagedKeyConfig) DatabricksWorkspaceCustomerManagedKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig">DatabricksWorkspaceCustomerManagedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig">DatabricksWorkspaceCustomerManagedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.putTimeouts"></a>

```go
func PutTimeouts(value DatabricksWorkspaceCustomerManagedKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts">DatabricksWorkspaceCustomerManagedKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/databricksworkspacecustomermanagedkey"

databricksworkspacecustomermanagedkey.DatabricksWorkspaceCustomerManagedKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/databricksworkspacecustomermanagedkey"

databricksworkspacecustomermanagedkey.DatabricksWorkspaceCustomerManagedKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/databricksworkspacecustomermanagedkey"

databricksworkspacecustomermanagedkey.DatabricksWorkspaceCustomerManagedKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference">DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.timeouts"></a>

```go
func Timeouts() DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference">DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksWorkspaceCustomerManagedKeyConfig <a name="DatabricksWorkspaceCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/databricksworkspacecustomermanagedkey"

&databricksworkspacecustomermanagedkey.DatabricksWorkspaceCustomerManagedKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyVaultKeyId: *string,
	WorkspaceId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#key_vault_key_id DatabricksWorkspaceCustomerManagedKey#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#workspace_id DatabricksWorkspaceCustomerManagedKey#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#id DatabricksWorkspaceCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts">DatabricksWorkspaceCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#key_vault_key_id DatabricksWorkspaceCustomerManagedKey#key_vault_key_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#workspace_id DatabricksWorkspaceCustomerManagedKey#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#id DatabricksWorkspaceCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.timeouts"></a>

```go
Timeouts DatabricksWorkspaceCustomerManagedKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts">DatabricksWorkspaceCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#timeouts DatabricksWorkspaceCustomerManagedKey#timeouts}

---

### DatabricksWorkspaceCustomerManagedKeyTimeouts <a name="DatabricksWorkspaceCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/databricksworkspacecustomermanagedkey"

&databricksworkspacecustomermanagedkey.DatabricksWorkspaceCustomerManagedKeyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#create DatabricksWorkspaceCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#delete DatabricksWorkspaceCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#read DatabricksWorkspaceCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#update DatabricksWorkspaceCustomerManagedKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#create DatabricksWorkspaceCustomerManagedKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#delete DatabricksWorkspaceCustomerManagedKey#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#read DatabricksWorkspaceCustomerManagedKey#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/databricks_workspace_customer_managed_key#update DatabricksWorkspaceCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference <a name="DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/databricksworkspacecustomermanagedkey"

databricksworkspacecustomermanagedkey.NewDatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



