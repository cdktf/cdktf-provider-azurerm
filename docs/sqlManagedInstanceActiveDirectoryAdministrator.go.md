# `sqlManagedInstanceActiveDirectoryAdministrator` Submodule <a name="`sqlManagedInstanceActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlManagedInstanceActiveDirectoryAdministrator <a name="SqlManagedInstanceActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator azurerm_sql_managed_instance_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstanceactivedirectoryadministrator"

sqlmanagedinstanceactivedirectoryadministrator.NewSqlManagedInstanceActiveDirectoryAdministrator(scope Construct, id *string, config SqlManagedInstanceActiveDirectoryAdministratorConfig) SqlManagedInstanceActiveDirectoryAdministrator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig">SqlManagedInstanceActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig">SqlManagedInstanceActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetAzureadAuthenticationOnly">ResetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.putTimeouts"></a>

```go
func PutTimeouts(value SqlManagedInstanceActiveDirectoryAdministratorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

---

##### `ResetAzureadAuthenticationOnly` <a name="ResetAzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetAzureadAuthenticationOnly"></a>

```go
func ResetAzureadAuthenticationOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlManagedInstanceActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstanceactivedirectoryadministrator"

sqlmanagedinstanceactivedirectoryadministrator.SqlManagedInstanceActiveDirectoryAdministrator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstanceactivedirectoryadministrator"

sqlmanagedinstanceactivedirectoryadministrator.SqlManagedInstanceActiveDirectoryAdministrator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstanceactivedirectoryadministrator"

sqlmanagedinstanceactivedirectoryadministrator.SqlManagedInstanceActiveDirectoryAdministrator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstanceactivedirectoryadministrator"

sqlmanagedinstanceactivedirectoryadministrator.SqlManagedInstanceActiveDirectoryAdministrator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SqlManagedInstanceActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SqlManagedInstanceActiveDirectoryAdministrator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SqlManagedInstanceActiveDirectoryAdministrator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SqlManagedInstanceActiveDirectoryAdministrator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference">SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput">AzureadAuthenticationOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.loginInput">LoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceNameInput">ManagedInstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceName">ManagedInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeouts"></a>

```go
func Timeouts() SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference">SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `AzureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="AzureadAuthenticationOnlyInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput"></a>

```go
func AzureadAuthenticationOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.loginInput"></a>

```go
func LoginInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceNameInput`<sup>Optional</sup> <a name="ManagedInstanceNameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceNameInput"></a>

```go
func ManagedInstanceNameInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AzureadAuthenticationOnly`<sup>Required</sup> <a name="AzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.azureadAuthenticationOnly"></a>

```go
func AzureadAuthenticationOnly() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `ManagedInstanceName`<sup>Required</sup> <a name="ManagedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.managedInstanceName"></a>

```go
func ManagedInstanceName() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministrator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlManagedInstanceActiveDirectoryAdministratorConfig <a name="SqlManagedInstanceActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstanceactivedirectoryadministrator"

&sqlmanagedinstanceactivedirectoryadministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Login: *string,
	ManagedInstanceName: *string,
	ObjectId: *string,
	ResourceGroupName: *string,
	TenantId: *string,
	AzureadAuthenticationOnly: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.login">Login</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#login SqlManagedInstanceActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.managedInstanceName">ManagedInstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#managed_instance_name SqlManagedInstanceActiveDirectoryAdministrator#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#object_id SqlManagedInstanceActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#resource_group_name SqlManagedInstanceActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#tenant_id SqlManagedInstanceActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#azuread_authentication_only SqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#id SqlManagedInstanceActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.login"></a>

```go
Login *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#login SqlManagedInstanceActiveDirectoryAdministrator#login}.

---

##### `ManagedInstanceName`<sup>Required</sup> <a name="ManagedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.managedInstanceName"></a>

```go
ManagedInstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#managed_instance_name SqlManagedInstanceActiveDirectoryAdministrator#managed_instance_name}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#object_id SqlManagedInstanceActiveDirectoryAdministrator#object_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#resource_group_name SqlManagedInstanceActiveDirectoryAdministrator#resource_group_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#tenant_id SqlManagedInstanceActiveDirectoryAdministrator#tenant_id}.

---

##### `AzureadAuthenticationOnly`<sup>Optional</sup> <a name="AzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly"></a>

```go
AzureadAuthenticationOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#azuread_authentication_only SqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#id SqlManagedInstanceActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorConfig.property.timeouts"></a>

```go
Timeouts SqlManagedInstanceActiveDirectoryAdministratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts">SqlManagedInstanceActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#timeouts SqlManagedInstanceActiveDirectoryAdministrator#timeouts}

---

### SqlManagedInstanceActiveDirectoryAdministratorTimeouts <a name="SqlManagedInstanceActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstanceactivedirectoryadministrator"

&sqlmanagedinstanceactivedirectoryadministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#create SqlManagedInstanceActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#delete SqlManagedInstanceActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#read SqlManagedInstanceActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#update SqlManagedInstanceActiveDirectoryAdministrator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#create SqlManagedInstanceActiveDirectoryAdministrator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#delete SqlManagedInstanceActiveDirectoryAdministrator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#read SqlManagedInstanceActiveDirectoryAdministrator#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/sql_managed_instance_active_directory_administrator#update SqlManagedInstanceActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference <a name="SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sqlmanagedinstanceactivedirectoryadministrator"

sqlmanagedinstanceactivedirectoryadministrator.NewSqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sqlManagedInstanceActiveDirectoryAdministrator.SqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



