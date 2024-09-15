# `dataFactoryCredentialServicePrincipal` Submodule <a name="`dataFactoryCredentialServicePrincipal` Submodule" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryCredentialServicePrincipal <a name="DataFactoryCredentialServicePrincipal" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal azurerm_data_factory_credential_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorycredentialserviceprincipal"

datafactorycredentialserviceprincipal.NewDataFactoryCredentialServicePrincipal(scope Construct, id *string, config DataFactoryCredentialServicePrincipalConfig) DataFactoryCredentialServicePrincipal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig">DataFactoryCredentialServicePrincipalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig">DataFactoryCredentialServicePrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putServicePrincipalKey">PutServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetServicePrincipalKey">ResetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServicePrincipalKey` <a name="PutServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putServicePrincipalKey"></a>

```go
func PutServicePrincipalKey(value DataFactoryCredentialServicePrincipalServicePrincipalKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putServicePrincipalKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryCredentialServicePrincipalTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetId"></a>

```go
func ResetId()
```

##### `ResetServicePrincipalKey` <a name="ResetServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetServicePrincipalKey"></a>

```go
func ResetServicePrincipalKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryCredentialServicePrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorycredentialserviceprincipal"

datafactorycredentialserviceprincipal.DataFactoryCredentialServicePrincipal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorycredentialserviceprincipal"

datafactorycredentialserviceprincipal.DataFactoryCredentialServicePrincipal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorycredentialserviceprincipal"

datafactorycredentialserviceprincipal.DataFactoryCredentialServicePrincipal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorycredentialserviceprincipal"

datafactorycredentialserviceprincipal.DataFactoryCredentialServicePrincipal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryCredentialServicePrincipal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryCredentialServicePrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryCredentialServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryCredentialServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference">DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference">DataFactoryCredentialServicePrincipalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKeyInput">ServicePrincipalKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServicePrincipalKey`<sup>Required</sup> <a name="ServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKey"></a>

```go
func ServicePrincipalKey() DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference">DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeouts"></a>

```go
func Timeouts() DataFactoryCredentialServicePrincipalTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference">DataFactoryCredentialServicePrincipalTimeoutsOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalKeyInput`<sup>Optional</sup> <a name="ServicePrincipalKeyInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKeyInput"></a>

```go
func ServicePrincipalKeyInput() DataFactoryCredentialServicePrincipalServicePrincipalKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryCredentialServicePrincipalConfig <a name="DataFactoryCredentialServicePrincipalConfig" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorycredentialserviceprincipal"

&datafactorycredentialserviceprincipal.DataFactoryCredentialServicePrincipalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Name: *string,
	ServicePrincipalId: *string,
	TenantId: *string,
	Annotations: *[]*string,
	Description: *string,
	Id: *string,
	ServicePrincipalKey: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | The resource ID of the parent Data Factory. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.name">Name</a></code> | <code>*string</code> | The desired name of the credential resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | The Client ID of the Service Principal. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The Tenant ID of the Service Principal. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | (Optional) List of string annotations. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.description">Description</a></code> | <code>*string</code> | (Optional) Short text description. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#id DataFactoryCredentialServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a></code> | service_principal_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

The resource ID of the parent Data Factory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#data_factory_id DataFactoryCredentialServicePrincipal#data_factory_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The desired name of the credential resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#name DataFactoryCredentialServicePrincipal#name}

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalId"></a>

```go
ServicePrincipalId *string
```

- *Type:* *string

The Client ID of the Service Principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#service_principal_id DataFactoryCredentialServicePrincipal#service_principal_id}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The Tenant ID of the Service Principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#tenant_id DataFactoryCredentialServicePrincipal#tenant_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

(Optional) List of string annotations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#annotations DataFactoryCredentialServicePrincipal#annotations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

(Optional) Short text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#description DataFactoryCredentialServicePrincipal#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#id DataFactoryCredentialServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServicePrincipalKey`<sup>Optional</sup> <a name="ServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalKey"></a>

```go
ServicePrincipalKey DataFactoryCredentialServicePrincipalServicePrincipalKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

service_principal_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#service_principal_key DataFactoryCredentialServicePrincipal#service_principal_key}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.timeouts"></a>

```go
Timeouts DataFactoryCredentialServicePrincipalTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#timeouts DataFactoryCredentialServicePrincipal#timeouts}

---

### DataFactoryCredentialServicePrincipalServicePrincipalKey <a name="DataFactoryCredentialServicePrincipalServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorycredentialserviceprincipal"

&datafactorycredentialserviceprincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey {
	LinkedServiceName: *string,
	SecretName: *string,
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#linked_service_name DataFactoryCredentialServicePrincipal#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#secret_name DataFactoryCredentialServicePrincipal#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#secret_version DataFactoryCredentialServicePrincipal#secret_version}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#linked_service_name DataFactoryCredentialServicePrincipal#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#secret_name DataFactoryCredentialServicePrincipal#secret_name}.

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#secret_version DataFactoryCredentialServicePrincipal#secret_version}.

---

### DataFactoryCredentialServicePrincipalTimeouts <a name="DataFactoryCredentialServicePrincipalTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorycredentialserviceprincipal"

&datafactorycredentialserviceprincipal.DataFactoryCredentialServicePrincipalTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#create DataFactoryCredentialServicePrincipal#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#delete DataFactoryCredentialServicePrincipal#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#read DataFactoryCredentialServicePrincipal#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#update DataFactoryCredentialServicePrincipal#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#create DataFactoryCredentialServicePrincipal#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#delete DataFactoryCredentialServicePrincipal#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#read DataFactoryCredentialServicePrincipal#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_factory_credential_service_principal#update DataFactoryCredentialServicePrincipal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference <a name="DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorycredentialserviceprincipal"

datafactorycredentialserviceprincipal.NewDataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resetSecretVersion"></a>

```go
func ResetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryCredentialServicePrincipalServicePrincipalKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

---


### DataFactoryCredentialServicePrincipalTimeoutsOutputReference <a name="DataFactoryCredentialServicePrincipalTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorycredentialserviceprincipal"

datafactorycredentialserviceprincipal.NewDataFactoryCredentialServicePrincipalTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryCredentialServicePrincipalTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



