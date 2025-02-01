# `apiManagementApiOperation` Submodule <a name="`apiManagementApiOperation` Submodule" id="@cdktf/provider-azurerm.apiManagementApiOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiOperation <a name="ApiManagementApiOperation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation azurerm_api_management_api_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperation(scope Construct, id *string, config ApiManagementApiOperationConfig) ApiManagementApiOperation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig">ApiManagementApiOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig">ApiManagementApiOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest">PutRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putResponse">PutResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTemplateParameter">PutTemplateParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetResponse">ResetResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTemplateParameter">ResetTemplateParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRequest` <a name="PutRequest" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest"></a>

```go
func PutRequest(value ApiManagementApiOperationRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

---

##### `PutResponse` <a name="PutResponse" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putResponse"></a>

```go
func PutResponse(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putResponse.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTemplateParameter` <a name="PutTemplateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTemplateParameter"></a>

```go
func PutTemplateParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTemplateParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementApiOperationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetId"></a>

```go
func ResetId()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetRequest"></a>

```go
func ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetResponse"></a>

```go
func ResetResponse()
```

##### `ResetTemplateParameter` <a name="ResetTemplateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTemplateParameter"></a>

```go
func ResetTemplateParameter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementApiOperation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.ApiManagementApiOperation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.ApiManagementApiOperation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.ApiManagementApiOperation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.ApiManagementApiOperation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiManagementApiOperation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiManagementApiOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiManagementApiOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApiOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.request">Request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference">ApiManagementApiOperationRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.response">Response</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList">ApiManagementApiOperationResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameter">TemplateParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList">ApiManagementApiOperationTemplateParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference">ApiManagementApiOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiNameInput">ApiNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationIdInput">OperationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.requestInput">RequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.responseInput">ResponseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameterInput">TemplateParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplateInput">UrlTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiName">ApiName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationId">OperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplate">UrlTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.request"></a>

```go
func Request() ApiManagementApiOperationRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference">ApiManagementApiOperationRequestOutputReference</a>

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.response"></a>

```go
func Response() ApiManagementApiOperationResponseList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList">ApiManagementApiOperationResponseList</a>

---

##### `TemplateParameter`<sup>Required</sup> <a name="TemplateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameter"></a>

```go
func TemplateParameter() ApiManagementApiOperationTemplateParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList">ApiManagementApiOperationTemplateParameterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeouts"></a>

```go
func Timeouts() ApiManagementApiOperationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference">ApiManagementApiOperationTimeoutsOutputReference</a>

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementNameInput"></a>

```go
func ApiManagementNameInput() *string
```

- *Type:* *string

---

##### `ApiNameInput`<sup>Optional</sup> <a name="ApiNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiNameInput"></a>

```go
func ApiNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `OperationIdInput`<sup>Optional</sup> <a name="OperationIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationIdInput"></a>

```go
func OperationIdInput() *string
```

- *Type:* *string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.requestInput"></a>

```go
func RequestInput() ApiManagementApiOperationRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.responseInput"></a>

```go
func ResponseInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateParameterInput`<sup>Optional</sup> <a name="TemplateParameterInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameterInput"></a>

```go
func TemplateParameterInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlTemplateInput`<sup>Optional</sup> <a name="UrlTemplateInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplateInput"></a>

```go
func UrlTemplateInput() *string
```

- *Type:* *string

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementName"></a>

```go
func ApiManagementName() *string
```

- *Type:* *string

---

##### `ApiName`<sup>Required</sup> <a name="ApiName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiName"></a>

```go
func ApiName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationId"></a>

```go
func OperationId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplate"></a>

```go
func UrlTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiOperationConfig <a name="ApiManagementApiOperationConfig" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementName: *string,
	ApiName: *string,
	DisplayName: *string,
	Method: *string,
	OperationId: *string,
	ResourceGroupName: *string,
	UrlTemplate: *string,
	Description: *string,
	Id: *string,
	Request: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.apiManagementApiOperation.ApiManagementApiOperationRequest,
	Response: interface{},
	TemplateParameter: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.apiManagementApiOperation.ApiManagementApiOperationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#api_management_name ApiManagementApiOperation#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiName">ApiName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#api_name ApiManagementApiOperation#api_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#display_name ApiManagementApiOperation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#method ApiManagementApiOperation#method}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.operationId">OperationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#operation_id ApiManagementApiOperation#operation_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#resource_group_name ApiManagementApiOperation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.urlTemplate">UrlTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#url_template ApiManagementApiOperation#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#id ApiManagementApiOperation#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.request">Request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a></code> | request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.response">Response</a></code> | <code>interface{}</code> | response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.templateParameter">TemplateParameter</a></code> | <code>interface{}</code> | template_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiManagementName"></a>

```go
ApiManagementName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#api_management_name ApiManagementApiOperation#api_management_name}.

---

##### `ApiName`<sup>Required</sup> <a name="ApiName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiName"></a>

```go
ApiName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#api_name ApiManagementApiOperation#api_name}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#display_name ApiManagementApiOperation#display_name}.

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#method ApiManagementApiOperation#method}.

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.operationId"></a>

```go
OperationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#operation_id ApiManagementApiOperation#operation_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#resource_group_name ApiManagementApiOperation#resource_group_name}.

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.urlTemplate"></a>

```go
UrlTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#url_template ApiManagementApiOperation#url_template}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#id ApiManagementApiOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.request"></a>

```go
Request ApiManagementApiOperationRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#request ApiManagementApiOperation#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.response"></a>

```go
Response interface{}
```

- *Type:* interface{}

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#response ApiManagementApiOperation#response}

---

##### `TemplateParameter`<sup>Optional</sup> <a name="TemplateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.templateParameter"></a>

```go
TemplateParameter interface{}
```

- *Type:* interface{}

template_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#template_parameter ApiManagementApiOperation#template_parameter}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.timeouts"></a>

```go
Timeouts ApiManagementApiOperationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#timeouts ApiManagementApiOperation#timeouts}

---

### ApiManagementApiOperationRequest <a name="ApiManagementApiOperationRequest" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationRequest {
	Description: *string,
	Header: interface{},
	QueryParameter: interface{},
	Representation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.queryParameter">QueryParameter</a></code> | <code>interface{}</code> | query_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.representation">Representation</a></code> | <code>interface{}</code> | representation block. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#header ApiManagementApiOperation#header}

---

##### `QueryParameter`<sup>Optional</sup> <a name="QueryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.queryParameter"></a>

```go
QueryParameter interface{}
```

- *Type:* interface{}

query_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#query_parameter ApiManagementApiOperation#query_parameter}

---

##### `Representation`<sup>Optional</sup> <a name="Representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.representation"></a>

```go
Representation interface{}
```

- *Type:* interface{}

representation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#representation ApiManagementApiOperation#representation}

---

### ApiManagementApiOperationRequestHeader <a name="ApiManagementApiOperationRequestHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationRequestHeader {
	Name: *string,
	Required: interface{},
	Type: *string,
	DefaultValue: *string,
	Description: *string,
	Example: interface{},
	SchemaId: *string,
	TypeName: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.example">Example</a></code> | <code>interface{}</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.schemaId">SchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.example"></a>

```go
Example interface{}
```

- *Type:* interface{}

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationRequestHeaderExample <a name="ApiManagementApiOperationRequestHeaderExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationRequestHeaderExample {
	Name: *string,
	Description: *string,
	ExternalValue: *string,
	Summary: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.externalValue">ExternalValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `ExternalValue`<sup>Optional</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.externalValue"></a>

```go
ExternalValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationRequestQueryParameter <a name="ApiManagementApiOperationRequestQueryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationRequestQueryParameter {
	Name: *string,
	Required: interface{},
	Type: *string,
	DefaultValue: *string,
	Description: *string,
	Example: interface{},
	SchemaId: *string,
	TypeName: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.example">Example</a></code> | <code>interface{}</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.schemaId">SchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.example"></a>

```go
Example interface{}
```

- *Type:* interface{}

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationRequestQueryParameterExample <a name="ApiManagementApiOperationRequestQueryParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationRequestQueryParameterExample {
	Name: *string,
	Description: *string,
	ExternalValue: *string,
	Summary: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.externalValue">ExternalValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `ExternalValue`<sup>Optional</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.externalValue"></a>

```go
ExternalValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationRequestRepresentation <a name="ApiManagementApiOperationRequestRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationRequestRepresentation {
	ContentType: *string,
	Example: interface{},
	FormParameter: interface{},
	SchemaId: *string,
	TypeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.example">Example</a></code> | <code>interface{}</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.formParameter">FormParameter</a></code> | <code>interface{}</code> | form_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.schemaId">SchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}.

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.example"></a>

```go
Example interface{}
```

- *Type:* interface{}

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `FormParameter`<sup>Optional</sup> <a name="FormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.formParameter"></a>

```go
FormParameter interface{}
```

- *Type:* interface{}

form_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#form_parameter ApiManagementApiOperation#form_parameter}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

### ApiManagementApiOperationRequestRepresentationExample <a name="ApiManagementApiOperationRequestRepresentationExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationRequestRepresentationExample {
	Name: *string,
	Description: *string,
	ExternalValue: *string,
	Summary: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.externalValue">ExternalValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `ExternalValue`<sup>Optional</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.externalValue"></a>

```go
ExternalValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationRequestRepresentationFormParameter <a name="ApiManagementApiOperationRequestRepresentationFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationRequestRepresentationFormParameter {
	Name: *string,
	Required: interface{},
	Type: *string,
	DefaultValue: *string,
	Description: *string,
	Example: interface{},
	SchemaId: *string,
	TypeName: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.example">Example</a></code> | <code>interface{}</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.schemaId">SchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.example"></a>

```go
Example interface{}
```

- *Type:* interface{}

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationRequestRepresentationFormParameterExample <a name="ApiManagementApiOperationRequestRepresentationFormParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationRequestRepresentationFormParameterExample {
	Name: *string,
	Description: *string,
	ExternalValue: *string,
	Summary: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.externalValue">ExternalValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `ExternalValue`<sup>Optional</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.externalValue"></a>

```go
ExternalValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationResponse <a name="ApiManagementApiOperationResponse" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationResponse {
	StatusCode: *f64,
	Description: *string,
	Header: interface{},
	Representation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.statusCode">StatusCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#status_code ApiManagementApiOperation#status_code}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.representation">Representation</a></code> | <code>interface{}</code> | representation block. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#status_code ApiManagementApiOperation#status_code}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#header ApiManagementApiOperation#header}

---

##### `Representation`<sup>Optional</sup> <a name="Representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.representation"></a>

```go
Representation interface{}
```

- *Type:* interface{}

representation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#representation ApiManagementApiOperation#representation}

---

### ApiManagementApiOperationResponseHeader <a name="ApiManagementApiOperationResponseHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationResponseHeader {
	Name: *string,
	Required: interface{},
	Type: *string,
	DefaultValue: *string,
	Description: *string,
	Example: interface{},
	SchemaId: *string,
	TypeName: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.example">Example</a></code> | <code>interface{}</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.schemaId">SchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.example"></a>

```go
Example interface{}
```

- *Type:* interface{}

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationResponseHeaderExample <a name="ApiManagementApiOperationResponseHeaderExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationResponseHeaderExample {
	Name: *string,
	Description: *string,
	ExternalValue: *string,
	Summary: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.externalValue">ExternalValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `ExternalValue`<sup>Optional</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.externalValue"></a>

```go
ExternalValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationResponseRepresentation <a name="ApiManagementApiOperationResponseRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationResponseRepresentation {
	ContentType: *string,
	Example: interface{},
	FormParameter: interface{},
	SchemaId: *string,
	TypeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.example">Example</a></code> | <code>interface{}</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.formParameter">FormParameter</a></code> | <code>interface{}</code> | form_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.schemaId">SchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}.

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.example"></a>

```go
Example interface{}
```

- *Type:* interface{}

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `FormParameter`<sup>Optional</sup> <a name="FormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.formParameter"></a>

```go
FormParameter interface{}
```

- *Type:* interface{}

form_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#form_parameter ApiManagementApiOperation#form_parameter}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

### ApiManagementApiOperationResponseRepresentationExample <a name="ApiManagementApiOperationResponseRepresentationExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationResponseRepresentationExample {
	Name: *string,
	Description: *string,
	ExternalValue: *string,
	Summary: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.externalValue">ExternalValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `ExternalValue`<sup>Optional</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.externalValue"></a>

```go
ExternalValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationResponseRepresentationFormParameter <a name="ApiManagementApiOperationResponseRepresentationFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationResponseRepresentationFormParameter {
	Name: *string,
	Required: interface{},
	Type: *string,
	DefaultValue: *string,
	Description: *string,
	Example: interface{},
	SchemaId: *string,
	TypeName: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.example">Example</a></code> | <code>interface{}</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.schemaId">SchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.example"></a>

```go
Example interface{}
```

- *Type:* interface{}

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationResponseRepresentationFormParameterExample <a name="ApiManagementApiOperationResponseRepresentationFormParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationResponseRepresentationFormParameterExample {
	Name: *string,
	Description: *string,
	ExternalValue: *string,
	Summary: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.externalValue">ExternalValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `ExternalValue`<sup>Optional</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.externalValue"></a>

```go
ExternalValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationTemplateParameter <a name="ApiManagementApiOperationTemplateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationTemplateParameter {
	Name: *string,
	Required: interface{},
	Type: *string,
	DefaultValue: *string,
	Description: *string,
	Example: interface{},
	SchemaId: *string,
	TypeName: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.example">Example</a></code> | <code>interface{}</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.schemaId">SchemaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.example"></a>

```go
Example interface{}
```

- *Type:* interface{}

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationTemplateParameterExample <a name="ApiManagementApiOperationTemplateParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationTemplateParameterExample {
	Name: *string,
	Description: *string,
	ExternalValue: *string,
	Summary: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.externalValue">ExternalValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `ExternalValue`<sup>Optional</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.externalValue"></a>

```go
ExternalValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationTimeouts <a name="ApiManagementApiOperationTimeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

&apimanagementapioperation.ApiManagementApiOperationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#create ApiManagementApiOperation#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#delete ApiManagementApiOperation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#read ApiManagementApiOperation#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#update ApiManagementApiOperation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#create ApiManagementApiOperation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#delete ApiManagementApiOperation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#read ApiManagementApiOperation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/api_management_api_operation#update ApiManagementApiOperation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiOperationRequestHeaderExampleList <a name="ApiManagementApiOperationRequestHeaderExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestHeaderExampleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationRequestHeaderExampleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationRequestHeaderExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestHeaderExampleOutputReference <a name="ApiManagementApiOperationRequestHeaderExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestHeaderExampleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationRequestHeaderExampleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetExternalValue">ResetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalValue` <a name="ResetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetExternalValue"></a>

```go
func ResetExternalValue()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValueInput">ExternalValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValue">ExternalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalValueInput`<sup>Optional</sup> <a name="ExternalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValueInput"></a>

```go
func ExternalValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalValue`<sup>Required</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValue"></a>

```go
func ExternalValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestHeaderList <a name="ApiManagementApiOperationRequestHeaderList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestHeaderOutputReference <a name="ApiManagementApiOperationRequestHeaderOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.putExample">PutExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExample` <a name="PutExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.putExample"></a>

```go
func PutExample(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.putExample.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.example">Example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList">ApiManagementApiOperationRequestHeaderExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.exampleInput">ExampleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.example"></a>

```go
func Example() ApiManagementApiOperationRequestHeaderExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList">ApiManagementApiOperationRequestHeaderExampleList</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.exampleInput"></a>

```go
func ExampleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestOutputReference <a name="ApiManagementApiOperationRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiOperationRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putQueryParameter">PutQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putRepresentation">PutRepresentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetQueryParameter">ResetQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetRepresentation">ResetRepresentation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryParameter` <a name="PutQueryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putQueryParameter"></a>

```go
func PutQueryParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putQueryParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRepresentation` <a name="PutRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putRepresentation"></a>

```go
func PutRepresentation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putRepresentation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetQueryParameter` <a name="ResetQueryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetQueryParameter"></a>

```go
func ResetQueryParameter()
```

##### `ResetRepresentation` <a name="ResetRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetRepresentation"></a>

```go
func ResetRepresentation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList">ApiManagementApiOperationRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameter">QueryParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList">ApiManagementApiOperationRequestQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representation">Representation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList">ApiManagementApiOperationRequestRepresentationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameterInput">QueryParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representationInput">RepresentationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.header"></a>

```go
func Header() ApiManagementApiOperationRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList">ApiManagementApiOperationRequestHeaderList</a>

---

##### `QueryParameter`<sup>Required</sup> <a name="QueryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameter"></a>

```go
func QueryParameter() ApiManagementApiOperationRequestQueryParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList">ApiManagementApiOperationRequestQueryParameterList</a>

---

##### `Representation`<sup>Required</sup> <a name="Representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representation"></a>

```go
func Representation() ApiManagementApiOperationRequestRepresentationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList">ApiManagementApiOperationRequestRepresentationList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `QueryParameterInput`<sup>Optional</sup> <a name="QueryParameterInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameterInput"></a>

```go
func QueryParameterInput() interface{}
```

- *Type:* interface{}

---

##### `RepresentationInput`<sup>Optional</sup> <a name="RepresentationInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representationInput"></a>

```go
func RepresentationInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementApiOperationRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

---


### ApiManagementApiOperationRequestQueryParameterExampleList <a name="ApiManagementApiOperationRequestQueryParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestQueryParameterExampleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationRequestQueryParameterExampleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationRequestQueryParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestQueryParameterExampleOutputReference <a name="ApiManagementApiOperationRequestQueryParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestQueryParameterExampleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationRequestQueryParameterExampleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetExternalValue">ResetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalValue` <a name="ResetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetExternalValue"></a>

```go
func ResetExternalValue()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValueInput">ExternalValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValue">ExternalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalValueInput`<sup>Optional</sup> <a name="ExternalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValueInput"></a>

```go
func ExternalValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalValue`<sup>Required</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValue"></a>

```go
func ExternalValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestQueryParameterList <a name="ApiManagementApiOperationRequestQueryParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestQueryParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationRequestQueryParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationRequestQueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestQueryParameterOutputReference <a name="ApiManagementApiOperationRequestQueryParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestQueryParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationRequestQueryParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.putExample">PutExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExample` <a name="PutExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.putExample"></a>

```go
func PutExample(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.putExample.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.example">Example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList">ApiManagementApiOperationRequestQueryParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.exampleInput">ExampleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.example"></a>

```go
func Example() ApiManagementApiOperationRequestQueryParameterExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList">ApiManagementApiOperationRequestQueryParameterExampleList</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.exampleInput"></a>

```go
func ExampleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestRepresentationExampleList <a name="ApiManagementApiOperationRequestRepresentationExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestRepresentationExampleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationRequestRepresentationExampleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationRequestRepresentationExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestRepresentationExampleOutputReference <a name="ApiManagementApiOperationRequestRepresentationExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestRepresentationExampleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationRequestRepresentationExampleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetExternalValue">ResetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalValue` <a name="ResetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetExternalValue"></a>

```go
func ResetExternalValue()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValueInput">ExternalValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValue">ExternalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalValueInput`<sup>Optional</sup> <a name="ExternalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValueInput"></a>

```go
func ExternalValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalValue`<sup>Required</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValue"></a>

```go
func ExternalValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestRepresentationFormParameterExampleList <a name="ApiManagementApiOperationRequestRepresentationFormParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestRepresentationFormParameterExampleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationRequestRepresentationFormParameterExampleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference <a name="ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetExternalValue">ResetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalValue` <a name="ResetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetExternalValue"></a>

```go
func ResetExternalValue()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValueInput">ExternalValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValue">ExternalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalValueInput`<sup>Optional</sup> <a name="ExternalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValueInput"></a>

```go
func ExternalValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalValue`<sup>Required</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValue"></a>

```go
func ExternalValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestRepresentationFormParameterList <a name="ApiManagementApiOperationRequestRepresentationFormParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestRepresentationFormParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationRequestRepresentationFormParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationRequestRepresentationFormParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestRepresentationFormParameterOutputReference <a name="ApiManagementApiOperationRequestRepresentationFormParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestRepresentationFormParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationRequestRepresentationFormParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.putExample">PutExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExample` <a name="PutExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.putExample"></a>

```go
func PutExample(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.putExample.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.example">Example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList">ApiManagementApiOperationRequestRepresentationFormParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.exampleInput">ExampleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.example"></a>

```go
func Example() ApiManagementApiOperationRequestRepresentationFormParameterExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList">ApiManagementApiOperationRequestRepresentationFormParameterExampleList</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.exampleInput"></a>

```go
func ExampleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestRepresentationList <a name="ApiManagementApiOperationRequestRepresentationList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestRepresentationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationRequestRepresentationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationRequestRepresentationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationRequestRepresentationOutputReference <a name="ApiManagementApiOperationRequestRepresentationOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationRequestRepresentationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationRequestRepresentationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putExample">PutExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putFormParameter">PutFormParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetFormParameter">ResetFormParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExample` <a name="PutExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putExample"></a>

```go
func PutExample(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putExample.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFormParameter` <a name="PutFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putFormParameter"></a>

```go
func PutFormParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putFormParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetFormParameter` <a name="ResetFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetFormParameter"></a>

```go
func ResetFormParameter()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.example">Example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList">ApiManagementApiOperationRequestRepresentationExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameter">FormParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList">ApiManagementApiOperationRequestRepresentationFormParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.exampleInput">ExampleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameterInput">FormParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.example"></a>

```go
func Example() ApiManagementApiOperationRequestRepresentationExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList">ApiManagementApiOperationRequestRepresentationExampleList</a>

---

##### `FormParameter`<sup>Required</sup> <a name="FormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameter"></a>

```go
func FormParameter() ApiManagementApiOperationRequestRepresentationFormParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList">ApiManagementApiOperationRequestRepresentationFormParameterList</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.exampleInput"></a>

```go
func ExampleInput() interface{}
```

- *Type:* interface{}

---

##### `FormParameterInput`<sup>Optional</sup> <a name="FormParameterInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameterInput"></a>

```go
func FormParameterInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseHeaderExampleList <a name="ApiManagementApiOperationResponseHeaderExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseHeaderExampleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationResponseHeaderExampleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationResponseHeaderExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseHeaderExampleOutputReference <a name="ApiManagementApiOperationResponseHeaderExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseHeaderExampleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationResponseHeaderExampleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetExternalValue">ResetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalValue` <a name="ResetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetExternalValue"></a>

```go
func ResetExternalValue()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValueInput">ExternalValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValue">ExternalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalValueInput`<sup>Optional</sup> <a name="ExternalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValueInput"></a>

```go
func ExternalValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalValue`<sup>Required</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValue"></a>

```go
func ExternalValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseHeaderList <a name="ApiManagementApiOperationResponseHeaderList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationResponseHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseHeaderOutputReference <a name="ApiManagementApiOperationResponseHeaderOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationResponseHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.putExample">PutExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExample` <a name="PutExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.putExample"></a>

```go
func PutExample(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.putExample.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.example">Example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList">ApiManagementApiOperationResponseHeaderExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.exampleInput">ExampleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.example"></a>

```go
func Example() ApiManagementApiOperationResponseHeaderExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList">ApiManagementApiOperationResponseHeaderExampleList</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.exampleInput"></a>

```go
func ExampleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseList <a name="ApiManagementApiOperationResponseList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationResponseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseOutputReference <a name="ApiManagementApiOperationResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putRepresentation">PutRepresentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetRepresentation">ResetRepresentation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRepresentation` <a name="PutRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putRepresentation"></a>

```go
func PutRepresentation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putRepresentation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetRepresentation` <a name="ResetRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetRepresentation"></a>

```go
func ResetRepresentation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList">ApiManagementApiOperationResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representation">Representation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList">ApiManagementApiOperationResponseRepresentationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representationInput">RepresentationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.header"></a>

```go
func Header() ApiManagementApiOperationResponseHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList">ApiManagementApiOperationResponseHeaderList</a>

---

##### `Representation`<sup>Required</sup> <a name="Representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representation"></a>

```go
func Representation() ApiManagementApiOperationResponseRepresentationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList">ApiManagementApiOperationResponseRepresentationList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RepresentationInput`<sup>Optional</sup> <a name="RepresentationInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representationInput"></a>

```go
func RepresentationInput() interface{}
```

- *Type:* interface{}

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseRepresentationExampleList <a name="ApiManagementApiOperationResponseRepresentationExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseRepresentationExampleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationResponseRepresentationExampleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationResponseRepresentationExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseRepresentationExampleOutputReference <a name="ApiManagementApiOperationResponseRepresentationExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseRepresentationExampleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationResponseRepresentationExampleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetExternalValue">ResetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalValue` <a name="ResetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetExternalValue"></a>

```go
func ResetExternalValue()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValueInput">ExternalValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValue">ExternalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalValueInput`<sup>Optional</sup> <a name="ExternalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValueInput"></a>

```go
func ExternalValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalValue`<sup>Required</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValue"></a>

```go
func ExternalValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseRepresentationFormParameterExampleList <a name="ApiManagementApiOperationResponseRepresentationFormParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseRepresentationFormParameterExampleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationResponseRepresentationFormParameterExampleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference <a name="ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetExternalValue">ResetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalValue` <a name="ResetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetExternalValue"></a>

```go
func ResetExternalValue()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValueInput">ExternalValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValue">ExternalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalValueInput`<sup>Optional</sup> <a name="ExternalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValueInput"></a>

```go
func ExternalValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalValue`<sup>Required</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValue"></a>

```go
func ExternalValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseRepresentationFormParameterList <a name="ApiManagementApiOperationResponseRepresentationFormParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseRepresentationFormParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationResponseRepresentationFormParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationResponseRepresentationFormParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseRepresentationFormParameterOutputReference <a name="ApiManagementApiOperationResponseRepresentationFormParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseRepresentationFormParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationResponseRepresentationFormParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.putExample">PutExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExample` <a name="PutExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.putExample"></a>

```go
func PutExample(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.putExample.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.example">Example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList">ApiManagementApiOperationResponseRepresentationFormParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.exampleInput">ExampleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.example"></a>

```go
func Example() ApiManagementApiOperationResponseRepresentationFormParameterExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList">ApiManagementApiOperationResponseRepresentationFormParameterExampleList</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.exampleInput"></a>

```go
func ExampleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseRepresentationList <a name="ApiManagementApiOperationResponseRepresentationList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseRepresentationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationResponseRepresentationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationResponseRepresentationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationResponseRepresentationOutputReference <a name="ApiManagementApiOperationResponseRepresentationOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationResponseRepresentationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationResponseRepresentationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putExample">PutExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putFormParameter">PutFormParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetFormParameter">ResetFormParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExample` <a name="PutExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putExample"></a>

```go
func PutExample(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putExample.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFormParameter` <a name="PutFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putFormParameter"></a>

```go
func PutFormParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putFormParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetFormParameter` <a name="ResetFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetFormParameter"></a>

```go
func ResetFormParameter()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.example">Example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList">ApiManagementApiOperationResponseRepresentationExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameter">FormParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList">ApiManagementApiOperationResponseRepresentationFormParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.exampleInput">ExampleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameterInput">FormParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.example"></a>

```go
func Example() ApiManagementApiOperationResponseRepresentationExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList">ApiManagementApiOperationResponseRepresentationExampleList</a>

---

##### `FormParameter`<sup>Required</sup> <a name="FormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameter"></a>

```go
func FormParameter() ApiManagementApiOperationResponseRepresentationFormParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList">ApiManagementApiOperationResponseRepresentationFormParameterList</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.exampleInput"></a>

```go
func ExampleInput() interface{}
```

- *Type:* interface{}

---

##### `FormParameterInput`<sup>Optional</sup> <a name="FormParameterInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameterInput"></a>

```go
func FormParameterInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationTemplateParameterExampleList <a name="ApiManagementApiOperationTemplateParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationTemplateParameterExampleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationTemplateParameterExampleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationTemplateParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationTemplateParameterExampleOutputReference <a name="ApiManagementApiOperationTemplateParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationTemplateParameterExampleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationTemplateParameterExampleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetExternalValue">ResetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalValue` <a name="ResetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetExternalValue"></a>

```go
func ResetExternalValue()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValueInput">ExternalValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValue">ExternalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalValueInput`<sup>Optional</sup> <a name="ExternalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValueInput"></a>

```go
func ExternalValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalValue`<sup>Required</sup> <a name="ExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValue"></a>

```go
func ExternalValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationTemplateParameterList <a name="ApiManagementApiOperationTemplateParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationTemplateParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiOperationTemplateParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.get"></a>

```go
func Get(index *f64) ApiManagementApiOperationTemplateParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationTemplateParameterOutputReference <a name="ApiManagementApiOperationTemplateParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationTemplateParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiOperationTemplateParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.putExample">PutExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExample` <a name="PutExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.putExample"></a>

```go
func PutExample(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.putExample.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetExample"></a>

```go
func ResetExample()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.example">Example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList">ApiManagementApiOperationTemplateParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.exampleInput">ExampleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.example"></a>

```go
func Example() ApiManagementApiOperationTemplateParameterExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList">ApiManagementApiOperationTemplateParameterExampleList</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.exampleInput"></a>

```go
func ExampleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiOperationTimeoutsOutputReference <a name="ApiManagementApiOperationTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/apimanagementapioperation"

apimanagementapioperation.NewApiManagementApiOperationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiOperationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



