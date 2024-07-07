# `springCloudAppMysqlAssociation` Submodule <a name="`springCloudAppMysqlAssociation` Submodule" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudAppMysqlAssociation <a name="SpringCloudAppMysqlAssociation" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association azurerm_spring_cloud_app_mysql_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappmysqlassociation"

springcloudappmysqlassociation.NewSpringCloudAppMysqlAssociation(scope Construct, id *string, config SpringCloudAppMysqlAssociationConfig) SpringCloudAppMysqlAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig">SpringCloudAppMysqlAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig">SpringCloudAppMysqlAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudAppMysqlAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts">SpringCloudAppMysqlAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudAppMysqlAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappmysqlassociation"

springcloudappmysqlassociation.SpringCloudAppMysqlAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappmysqlassociation"

springcloudappmysqlassociation.SpringCloudAppMysqlAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappmysqlassociation"

springcloudappmysqlassociation.SpringCloudAppMysqlAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappmysqlassociation"

springcloudappmysqlassociation.SpringCloudAppMysqlAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpringCloudAppMysqlAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpringCloudAppMysqlAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpringCloudAppMysqlAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudAppMysqlAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference">SpringCloudAppMysqlAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.mysqlServerIdInput">MysqlServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.springCloudAppIdInput">SpringCloudAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.mysqlServerId">MysqlServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.springCloudAppId">SpringCloudAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.timeouts"></a>

```go
func Timeouts() SpringCloudAppMysqlAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference">SpringCloudAppMysqlAssociationTimeoutsOutputReference</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MysqlServerIdInput`<sup>Optional</sup> <a name="MysqlServerIdInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.mysqlServerIdInput"></a>

```go
func MysqlServerIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `SpringCloudAppIdInput`<sup>Optional</sup> <a name="SpringCloudAppIdInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.springCloudAppIdInput"></a>

```go
func SpringCloudAppIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MysqlServerId`<sup>Required</sup> <a name="MysqlServerId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.mysqlServerId"></a>

```go
func MysqlServerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SpringCloudAppId`<sup>Required</sup> <a name="SpringCloudAppId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.springCloudAppId"></a>

```go
func SpringCloudAppId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudAppMysqlAssociationConfig <a name="SpringCloudAppMysqlAssociationConfig" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappmysqlassociation"

&springcloudappmysqlassociation.SpringCloudAppMysqlAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseName: *string,
	MysqlServerId: *string,
	Name: *string,
	Password: *string,
	SpringCloudAppId: *string,
	Username: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#database_name SpringCloudAppMysqlAssociation#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.mysqlServerId">MysqlServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#mysql_server_id SpringCloudAppMysqlAssociation#mysql_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#name SpringCloudAppMysqlAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#password SpringCloudAppMysqlAssociation#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.springCloudAppId">SpringCloudAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#spring_cloud_app_id SpringCloudAppMysqlAssociation#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#username SpringCloudAppMysqlAssociation#username}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#id SpringCloudAppMysqlAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts">SpringCloudAppMysqlAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#database_name SpringCloudAppMysqlAssociation#database_name}.

---

##### `MysqlServerId`<sup>Required</sup> <a name="MysqlServerId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.mysqlServerId"></a>

```go
MysqlServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#mysql_server_id SpringCloudAppMysqlAssociation#mysql_server_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#name SpringCloudAppMysqlAssociation#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#password SpringCloudAppMysqlAssociation#password}.

---

##### `SpringCloudAppId`<sup>Required</sup> <a name="SpringCloudAppId" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.springCloudAppId"></a>

```go
SpringCloudAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#spring_cloud_app_id SpringCloudAppMysqlAssociation#spring_cloud_app_id}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#username SpringCloudAppMysqlAssociation#username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#id SpringCloudAppMysqlAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationConfig.property.timeouts"></a>

```go
Timeouts SpringCloudAppMysqlAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts">SpringCloudAppMysqlAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#timeouts SpringCloudAppMysqlAssociation#timeouts}

---

### SpringCloudAppMysqlAssociationTimeouts <a name="SpringCloudAppMysqlAssociationTimeouts" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappmysqlassociation"

&springcloudappmysqlassociation.SpringCloudAppMysqlAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#create SpringCloudAppMysqlAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#delete SpringCloudAppMysqlAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#read SpringCloudAppMysqlAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#update SpringCloudAppMysqlAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#create SpringCloudAppMysqlAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#delete SpringCloudAppMysqlAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#read SpringCloudAppMysqlAssociation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/spring_cloud_app_mysql_association#update SpringCloudAppMysqlAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudAppMysqlAssociationTimeoutsOutputReference <a name="SpringCloudAppMysqlAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/springcloudappmysqlassociation"

springcloudappmysqlassociation.NewSpringCloudAppMysqlAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudAppMysqlAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudAppMysqlAssociation.SpringCloudAppMysqlAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



