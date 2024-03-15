# `healthcareDicomService` Submodule <a name="`healthcareDicomService` Submodule" id="@cdktf/provider-azurerm.healthcareDicomService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareDicomService <a name="HealthcareDicomService" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service azurerm_healthcare_dicom_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.NewHealthcareDicomService(scope Construct, id *string, config HealthcareDicomServiceConfig) HealthcareDicomService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig">HealthcareDicomServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig">HealthcareDicomServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.putIdentity"></a>

```go
func PutIdentity(value HealthcareDicomServiceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity">HealthcareDicomServiceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.putTimeouts"></a>

```go
func PutTimeouts(value HealthcareDicomServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts">HealthcareDicomServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareDicomService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.HealthcareDicomService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.HealthcareDicomService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.HealthcareDicomService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.HealthcareDicomService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HealthcareDicomService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HealthcareDicomService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HealthcareDicomService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareDicomService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList">HealthcareDicomServiceAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference">HealthcareDicomServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList">HealthcareDicomServicePrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.serviceUrl">ServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference">HealthcareDicomServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity">HealthcareDicomServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.authentication"></a>

```go
func Authentication() HealthcareDicomServiceAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList">HealthcareDicomServiceAuthenticationList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.identity"></a>

```go
func Identity() HealthcareDicomServiceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference">HealthcareDicomServiceIdentityOutputReference</a>

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.privateEndpoint"></a>

```go
func PrivateEndpoint() HealthcareDicomServicePrivateEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList">HealthcareDicomServicePrivateEndpointList</a>

---

##### `ServiceUrl`<sup>Required</sup> <a name="ServiceUrl" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.serviceUrl"></a>

```go
func ServiceUrl() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.timeouts"></a>

```go
func Timeouts() HealthcareDicomServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference">HealthcareDicomServiceTimeoutsOutputReference</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.identityInput"></a>

```go
func IdentityInput() HealthcareDicomServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity">HealthcareDicomServiceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareDicomServiceAuthentication <a name="HealthcareDicomServiceAuthentication" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

&healthcaredicomservice.HealthcareDicomServiceAuthentication {

}
```


### HealthcareDicomServiceConfig <a name="HealthcareDicomServiceConfig" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

&healthcaredicomservice.HealthcareDicomServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	WorkspaceId: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.healthcareDicomService.HealthcareDicomServiceIdentity,
	PublicNetworkAccessEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#location HealthcareDicomService#location}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#name HealthcareDicomService#name}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#workspace_id HealthcareDicomService#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#id HealthcareDicomService#id}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity">HealthcareDicomServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#public_network_access_enabled HealthcareDicomService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#tags HealthcareDicomService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts">HealthcareDicomServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#location HealthcareDicomService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#name HealthcareDicomService#name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#workspace_id HealthcareDicomService#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#id HealthcareDicomService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.identity"></a>

```go
Identity HealthcareDicomServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity">HealthcareDicomServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#identity HealthcareDicomService#identity}

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#public_network_access_enabled HealthcareDicomService#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#tags HealthcareDicomService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceConfig.property.timeouts"></a>

```go
Timeouts HealthcareDicomServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts">HealthcareDicomServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#timeouts HealthcareDicomService#timeouts}

---

### HealthcareDicomServiceIdentity <a name="HealthcareDicomServiceIdentity" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

&healthcaredicomservice.HealthcareDicomServiceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#type HealthcareDicomService#type}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#identity_ids HealthcareDicomService#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#type HealthcareDicomService#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#identity_ids HealthcareDicomService#identity_ids}.

---

### HealthcareDicomServicePrivateEndpoint <a name="HealthcareDicomServicePrivateEndpoint" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

&healthcaredicomservice.HealthcareDicomServicePrivateEndpoint {

}
```


### HealthcareDicomServiceTimeouts <a name="HealthcareDicomServiceTimeouts" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

&healthcaredicomservice.HealthcareDicomServiceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#create HealthcareDicomService#create}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#delete HealthcareDicomService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#read HealthcareDicomService#read}. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#update HealthcareDicomService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#create HealthcareDicomService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#delete HealthcareDicomService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#read HealthcareDicomService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/healthcare_dicom_service#update HealthcareDicomService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareDicomServiceAuthenticationList <a name="HealthcareDicomServiceAuthenticationList" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.NewHealthcareDicomServiceAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HealthcareDicomServiceAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.get"></a>

```go
func Get(index *f64) HealthcareDicomServiceAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### HealthcareDicomServiceAuthenticationOutputReference <a name="HealthcareDicomServiceAuthenticationOutputReference" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.NewHealthcareDicomServiceAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HealthcareDicomServiceAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.property.audience">Audience</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.property.authority">Authority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthentication">HealthcareDicomServiceAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.property.audience"></a>

```go
func Audience() *[]*string
```

- *Type:* *[]*string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.property.authority"></a>

```go
func Authority() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareDicomServiceAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceAuthentication">HealthcareDicomServiceAuthentication</a>

---


### HealthcareDicomServiceIdentityOutputReference <a name="HealthcareDicomServiceIdentityOutputReference" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.NewHealthcareDicomServiceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareDicomServiceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity">HealthcareDicomServiceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareDicomServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceIdentity">HealthcareDicomServiceIdentity</a>

---


### HealthcareDicomServicePrivateEndpointList <a name="HealthcareDicomServicePrivateEndpointList" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.NewHealthcareDicomServicePrivateEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HealthcareDicomServicePrivateEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.get"></a>

```go
func Get(index *f64) HealthcareDicomServicePrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### HealthcareDicomServicePrivateEndpointOutputReference <a name="HealthcareDicomServicePrivateEndpointOutputReference" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.NewHealthcareDicomServicePrivateEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HealthcareDicomServicePrivateEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpoint">HealthcareDicomServicePrivateEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareDicomServicePrivateEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServicePrivateEndpoint">HealthcareDicomServicePrivateEndpoint</a>

---


### HealthcareDicomServiceTimeoutsOutputReference <a name="HealthcareDicomServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/healthcaredicomservice"

healthcaredicomservice.NewHealthcareDicomServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareDicomServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.healthcareDicomService.HealthcareDicomServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



