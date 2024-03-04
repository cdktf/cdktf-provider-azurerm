# `functionAppConnection` Submodule <a name="`functionAppConnection` Submodule" id="@cdktf/provider-azurerm.functionAppConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionAppConnection <a name="FunctionAppConnection" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection azurerm_function_app_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

functionappconnection.NewFunctionAppConnection(scope Construct, id *string, config FunctionAppConnectionConfig) FunctionAppConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig">FunctionAppConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig">FunctionAppConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putSecretStore">PutSecretStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetClientType">ResetClientType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetSecretStore">ResetSecretStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetVnetSolution">ResetVnetSolution</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putAuthentication"></a>

```go
func PutAuthentication(value FunctionAppConnectionAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a>

---

##### `PutSecretStore` <a name="PutSecretStore" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putSecretStore"></a>

```go
func PutSecretStore(value FunctionAppConnectionSecretStore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putSecretStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putTimeouts"></a>

```go
func PutTimeouts(value FunctionAppConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts">FunctionAppConnectionTimeouts</a>

---

##### `ResetClientType` <a name="ResetClientType" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetClientType"></a>

```go
func ResetClientType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetSecretStore` <a name="ResetSecretStore" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetSecretStore"></a>

```go
func ResetSecretStore()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVnetSolution` <a name="ResetVnetSolution" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetVnetSolution"></a>

```go
func ResetVnetSolution()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionAppConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

functionappconnection.FunctionAppConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

functionappconnection.FunctionAppConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

functionappconnection.FunctionAppConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

functionappconnection.FunctionAppConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FunctionAppConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FunctionAppConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FunctionAppConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FunctionAppConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference">FunctionAppConnectionAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.secretStore">SecretStore</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference">FunctionAppConnectionSecretStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference">FunctionAppConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.clientTypeInput">ClientTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.functionAppIdInput">FunctionAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.secretStoreInput">SecretStoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.vnetSolutionInput">VnetSolutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.clientType">ClientType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.functionAppId">FunctionAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.vnetSolution">VnetSolution</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.authentication"></a>

```go
func Authentication() FunctionAppConnectionAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference">FunctionAppConnectionAuthenticationOutputReference</a>

---

##### `SecretStore`<sup>Required</sup> <a name="SecretStore" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.secretStore"></a>

```go
func SecretStore() FunctionAppConnectionSecretStoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference">FunctionAppConnectionSecretStoreOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.timeouts"></a>

```go
func Timeouts() FunctionAppConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference">FunctionAppConnectionTimeoutsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.authenticationInput"></a>

```go
func AuthenticationInput() FunctionAppConnectionAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a>

---

##### `ClientTypeInput`<sup>Optional</sup> <a name="ClientTypeInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.clientTypeInput"></a>

```go
func ClientTypeInput() *string
```

- *Type:* *string

---

##### `FunctionAppIdInput`<sup>Optional</sup> <a name="FunctionAppIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.functionAppIdInput"></a>

```go
func FunctionAppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretStoreInput`<sup>Optional</sup> <a name="SecretStoreInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.secretStoreInput"></a>

```go
func SecretStoreInput() FunctionAppConnectionSecretStore
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a>

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VnetSolutionInput`<sup>Optional</sup> <a name="VnetSolutionInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.vnetSolutionInput"></a>

```go
func VnetSolutionInput() *string
```

- *Type:* *string

---

##### `ClientType`<sup>Required</sup> <a name="ClientType" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.clientType"></a>

```go
func ClientType() *string
```

- *Type:* *string

---

##### `FunctionAppId`<sup>Required</sup> <a name="FunctionAppId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.functionAppId"></a>

```go
func FunctionAppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

##### `VnetSolution`<sup>Required</sup> <a name="VnetSolution" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.vnetSolution"></a>

```go
func VnetSolution() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppConnectionAuthentication <a name="FunctionAppConnectionAuthentication" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

&functionappconnection.FunctionAppConnectionAuthentication {
	Type: *string,
	Certificate: *string,
	ClientId: *string,
	Name: *string,
	PrincipalId: *string,
	Secret: *string,
	SubscriptionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#type FunctionAppConnection#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#certificate FunctionAppConnection#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#client_id FunctionAppConnection#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#name FunctionAppConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.principalId">PrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#principal_id FunctionAppConnection#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.secret">Secret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#secret FunctionAppConnection#secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#subscription_id FunctionAppConnection#subscription_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#type FunctionAppConnection#type}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#certificate FunctionAppConnection#certificate}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#client_id FunctionAppConnection#client_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#name FunctionAppConnection#name}.

---

##### `PrincipalId`<sup>Optional</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#principal_id FunctionAppConnection#principal_id}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#secret FunctionAppConnection#secret}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#subscription_id FunctionAppConnection#subscription_id}.

---

### FunctionAppConnectionConfig <a name="FunctionAppConnectionConfig" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

&functionappconnection.FunctionAppConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Authentication: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.functionAppConnection.FunctionAppConnectionAuthentication,
	FunctionAppId: *string,
	Name: *string,
	TargetResourceId: *string,
	ClientType: *string,
	Id: *string,
	SecretStore: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.functionAppConnection.FunctionAppConnectionSecretStore,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.functionAppConnection.FunctionAppConnectionTimeouts,
	VnetSolution: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.functionAppId">FunctionAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#function_app_id FunctionAppConnection#function_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#name FunctionAppConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#target_resource_id FunctionAppConnection#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.clientType">ClientType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#client_type FunctionAppConnection#client_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#id FunctionAppConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.secretStore">SecretStore</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a></code> | secret_store block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts">FunctionAppConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.vnetSolution">VnetSolution</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#vnet_solution FunctionAppConnection#vnet_solution}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.authentication"></a>

```go
Authentication FunctionAppConnectionAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#authentication FunctionAppConnection#authentication}

---

##### `FunctionAppId`<sup>Required</sup> <a name="FunctionAppId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.functionAppId"></a>

```go
FunctionAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#function_app_id FunctionAppConnection#function_app_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#name FunctionAppConnection#name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#target_resource_id FunctionAppConnection#target_resource_id}.

---

##### `ClientType`<sup>Optional</sup> <a name="ClientType" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.clientType"></a>

```go
ClientType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#client_type FunctionAppConnection#client_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#id FunctionAppConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecretStore`<sup>Optional</sup> <a name="SecretStore" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.secretStore"></a>

```go
SecretStore FunctionAppConnectionSecretStore
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a>

secret_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#secret_store FunctionAppConnection#secret_store}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.timeouts"></a>

```go
Timeouts FunctionAppConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts">FunctionAppConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#timeouts FunctionAppConnection#timeouts}

---

##### `VnetSolution`<sup>Optional</sup> <a name="VnetSolution" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.vnetSolution"></a>

```go
VnetSolution *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#vnet_solution FunctionAppConnection#vnet_solution}.

---

### FunctionAppConnectionSecretStore <a name="FunctionAppConnectionSecretStore" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

&functionappconnection.FunctionAppConnectionSecretStore {
	KeyVaultId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#key_vault_id FunctionAppConnection#key_vault_id}. |

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#key_vault_id FunctionAppConnection#key_vault_id}.

---

### FunctionAppConnectionTimeouts <a name="FunctionAppConnectionTimeouts" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

&functionappconnection.FunctionAppConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#create FunctionAppConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#delete FunctionAppConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#read FunctionAppConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#update FunctionAppConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#create FunctionAppConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#delete FunctionAppConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#read FunctionAppConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/function_app_connection#update FunctionAppConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppConnectionAuthenticationOutputReference <a name="FunctionAppConnectionAuthenticationOutputReference" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

functionappconnection.NewFunctionAppConnectionAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FunctionAppConnectionAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetPrincipalId">ResetPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPrincipalId` <a name="ResetPrincipalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetPrincipalId"></a>

```go
func ResetPrincipalId()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionAppConnectionAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a>

---


### FunctionAppConnectionSecretStoreOutputReference <a name="FunctionAppConnectionSecretStoreOutputReference" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

functionappconnection.NewFunctionAppConnectionSecretStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FunctionAppConnectionSecretStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() FunctionAppConnectionSecretStore
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a>

---


### FunctionAppConnectionTimeoutsOutputReference <a name="FunctionAppConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/functionappconnection"

functionappconnection.NewFunctionAppConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FunctionAppConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



