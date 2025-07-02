# `staticWebAppFunctionAppRegistration` Submodule <a name="`staticWebAppFunctionAppRegistration` Submodule" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StaticWebAppFunctionAppRegistration <a name="StaticWebAppFunctionAppRegistration" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration azurerm_static_web_app_function_app_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/staticwebappfunctionappregistration"

staticwebappfunctionappregistration.NewStaticWebAppFunctionAppRegistration(scope Construct, id *string, config StaticWebAppFunctionAppRegistrationConfig) StaticWebAppFunctionAppRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig">StaticWebAppFunctionAppRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig">StaticWebAppFunctionAppRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.putTimeouts"></a>

```go
func PutTimeouts(value StaticWebAppFunctionAppRegistrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts">StaticWebAppFunctionAppRegistrationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StaticWebAppFunctionAppRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/staticwebappfunctionappregistration"

staticwebappfunctionappregistration.StaticWebAppFunctionAppRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/staticwebappfunctionappregistration"

staticwebappfunctionappregistration.StaticWebAppFunctionAppRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/staticwebappfunctionappregistration"

staticwebappfunctionappregistration.StaticWebAppFunctionAppRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/staticwebappfunctionappregistration"

staticwebappfunctionappregistration.StaticWebAppFunctionAppRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StaticWebAppFunctionAppRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StaticWebAppFunctionAppRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StaticWebAppFunctionAppRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StaticWebAppFunctionAppRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference">StaticWebAppFunctionAppRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.functionAppIdInput">FunctionAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.staticWebAppIdInput">StaticWebAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.functionAppId">FunctionAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.staticWebAppId">StaticWebAppId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.timeouts"></a>

```go
func Timeouts() StaticWebAppFunctionAppRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference">StaticWebAppFunctionAppRegistrationTimeoutsOutputReference</a>

---

##### `FunctionAppIdInput`<sup>Optional</sup> <a name="FunctionAppIdInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.functionAppIdInput"></a>

```go
func FunctionAppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StaticWebAppIdInput`<sup>Optional</sup> <a name="StaticWebAppIdInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.staticWebAppIdInput"></a>

```go
func StaticWebAppIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionAppId`<sup>Required</sup> <a name="FunctionAppId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.functionAppId"></a>

```go
func FunctionAppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StaticWebAppId`<sup>Required</sup> <a name="StaticWebAppId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.staticWebAppId"></a>

```go
func StaticWebAppId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StaticWebAppFunctionAppRegistrationConfig <a name="StaticWebAppFunctionAppRegistrationConfig" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/staticwebappfunctionappregistration"

&staticwebappfunctionappregistration.StaticWebAppFunctionAppRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FunctionAppId: *string,
	StaticWebAppId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.functionAppId">FunctionAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#function_app_id StaticWebAppFunctionAppRegistration#function_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.staticWebAppId">StaticWebAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#static_web_app_id StaticWebAppFunctionAppRegistration#static_web_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#id StaticWebAppFunctionAppRegistration#id}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts">StaticWebAppFunctionAppRegistrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionAppId`<sup>Required</sup> <a name="FunctionAppId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.functionAppId"></a>

```go
FunctionAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#function_app_id StaticWebAppFunctionAppRegistration#function_app_id}.

---

##### `StaticWebAppId`<sup>Required</sup> <a name="StaticWebAppId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.staticWebAppId"></a>

```go
StaticWebAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#static_web_app_id StaticWebAppFunctionAppRegistration#static_web_app_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#id StaticWebAppFunctionAppRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.timeouts"></a>

```go
Timeouts StaticWebAppFunctionAppRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts">StaticWebAppFunctionAppRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#timeouts StaticWebAppFunctionAppRegistration#timeouts}

---

### StaticWebAppFunctionAppRegistrationTimeouts <a name="StaticWebAppFunctionAppRegistrationTimeouts" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/staticwebappfunctionappregistration"

&staticwebappfunctionappregistration.StaticWebAppFunctionAppRegistrationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#create StaticWebAppFunctionAppRegistration#create}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#delete StaticWebAppFunctionAppRegistration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#read StaticWebAppFunctionAppRegistration#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#create StaticWebAppFunctionAppRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#delete StaticWebAppFunctionAppRegistration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/static_web_app_function_app_registration#read StaticWebAppFunctionAppRegistration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### StaticWebAppFunctionAppRegistrationTimeoutsOutputReference <a name="StaticWebAppFunctionAppRegistrationTimeoutsOutputReference" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/staticwebappfunctionappregistration"

staticwebappfunctionappregistration.NewStaticWebAppFunctionAppRegistrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StaticWebAppFunctionAppRegistrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



