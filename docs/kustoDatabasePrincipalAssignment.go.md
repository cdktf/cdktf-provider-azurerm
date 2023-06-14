# `azurerm_kusto_database_principal_assignment`

Refer to the Terraform Registory for docs: [`azurerm_kusto_database_principal_assignment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment).

# `kustoDatabasePrincipalAssignment` Submodule <a name="`kustoDatabasePrincipalAssignment` Submodule" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoDatabasePrincipalAssignment <a name="KustoDatabasePrincipalAssignment" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment azurerm_kusto_database_principal_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustodatabaseprincipalassignment"

kustodatabaseprincipalassignment.NewKustoDatabasePrincipalAssignment(scope Construct, id *string, config KustoDatabasePrincipalAssignmentConfig) KustoDatabasePrincipalAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig">KustoDatabasePrincipalAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig">KustoDatabasePrincipalAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts"></a>

```go
func PutTimeouts(value KustoDatabasePrincipalAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustodatabaseprincipalassignment"

kustodatabaseprincipalassignment.KustoDatabasePrincipalAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustodatabaseprincipalassignment"

kustodatabaseprincipalassignment.KustoDatabasePrincipalAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustodatabaseprincipalassignment"

kustodatabaseprincipalassignment.KustoDatabasePrincipalAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalName">PrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantName">TenantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference">KustoDatabasePrincipalAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalName"></a>

```go
func PrincipalName() *string
```

- *Type:* *string

---

##### `TenantName`<sup>Required</sup> <a name="TenantName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantName"></a>

```go
func TenantName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeouts"></a>

```go
func Timeouts() KustoDatabasePrincipalAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference">KustoDatabasePrincipalAssignmentTimeoutsOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoDatabasePrincipalAssignmentConfig <a name="KustoDatabasePrincipalAssignmentConfig" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustodatabaseprincipalassignment"

&kustodatabaseprincipalassignment.KustoDatabasePrincipalAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	DatabaseName: *string,
	Name: *string,
	PrincipalId: *string,
	PrincipalType: *string,
	ResourceGroupName: *string,
	Role: *string,
	TenantId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#cluster_name KustoDatabasePrincipalAssignment#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#database_name KustoDatabasePrincipalAssignment#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#name KustoDatabasePrincipalAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalId">PrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#principal_id KustoDatabasePrincipalAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#principal_type KustoDatabasePrincipalAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#role KustoDatabasePrincipalAssignment#role}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#tenant_id KustoDatabasePrincipalAssignment#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#id KustoDatabasePrincipalAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#cluster_name KustoDatabasePrincipalAssignment#cluster_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#database_name KustoDatabasePrincipalAssignment#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#name KustoDatabasePrincipalAssignment#name}.

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#principal_id KustoDatabasePrincipalAssignment#principal_id}.

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#principal_type KustoDatabasePrincipalAssignment#principal_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#role KustoDatabasePrincipalAssignment#role}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#tenant_id KustoDatabasePrincipalAssignment#tenant_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#id KustoDatabasePrincipalAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.timeouts"></a>

```go
Timeouts KustoDatabasePrincipalAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#timeouts KustoDatabasePrincipalAssignment#timeouts}

---

### KustoDatabasePrincipalAssignmentTimeouts <a name="KustoDatabasePrincipalAssignmentTimeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustodatabaseprincipalassignment"

&kustodatabaseprincipalassignment.KustoDatabasePrincipalAssignmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#create KustoDatabasePrincipalAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#delete KustoDatabasePrincipalAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#read KustoDatabasePrincipalAssignment#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#create KustoDatabasePrincipalAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#delete KustoDatabasePrincipalAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/kusto_database_principal_assignment#read KustoDatabasePrincipalAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoDatabasePrincipalAssignmentTimeoutsOutputReference <a name="KustoDatabasePrincipalAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/kustodatabaseprincipalassignment"

kustodatabaseprincipalassignment.NewKustoDatabasePrincipalAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KustoDatabasePrincipalAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



