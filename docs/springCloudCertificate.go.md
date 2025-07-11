# `springCloudCertificate` Submodule <a name="`springCloudCertificate` Submodule" id="@cdktf/provider-azurerm.springCloudCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudCertificate <a name="SpringCloudCertificate" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate azurerm_spring_cloud_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springcloudcertificate"

springcloudcertificate.NewSpringCloudCertificate(scope Construct, id *string, config SpringCloudCertificateConfig) SpringCloudCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig">SpringCloudCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig">SpringCloudCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetCertificateContent">ResetCertificateContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetExcludePrivateKey">ResetExcludePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetKeyVaultCertificateId">ResetKeyVaultCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudCertificateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts">SpringCloudCertificateTimeouts</a>

---

##### `ResetCertificateContent` <a name="ResetCertificateContent" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetCertificateContent"></a>

```go
func ResetCertificateContent()
```

##### `ResetExcludePrivateKey` <a name="ResetExcludePrivateKey" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetExcludePrivateKey"></a>

```go
func ResetExcludePrivateKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyVaultCertificateId` <a name="ResetKeyVaultCertificateId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetKeyVaultCertificateId"></a>

```go
func ResetKeyVaultCertificateId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springcloudcertificate"

springcloudcertificate.SpringCloudCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springcloudcertificate"

springcloudcertificate.SpringCloudCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springcloudcertificate"

springcloudcertificate.SpringCloudCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springcloudcertificate"

springcloudcertificate.SpringCloudCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpringCloudCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpringCloudCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpringCloudCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference">SpringCloudCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.certificateContentInput">CertificateContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.excludePrivateKeyInput">ExcludePrivateKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.keyVaultCertificateIdInput">KeyVaultCertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.certificateContent">CertificateContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.excludePrivateKey">ExcludePrivateKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.timeouts"></a>

```go
func Timeouts() SpringCloudCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference">SpringCloudCertificateTimeoutsOutputReference</a>

---

##### `CertificateContentInput`<sup>Optional</sup> <a name="CertificateContentInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.certificateContentInput"></a>

```go
func CertificateContentInput() *string
```

- *Type:* *string

---

##### `ExcludePrivateKeyInput`<sup>Optional</sup> <a name="ExcludePrivateKeyInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.excludePrivateKeyInput"></a>

```go
func ExcludePrivateKeyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultCertificateIdInput`<sup>Optional</sup> <a name="KeyVaultCertificateIdInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.keyVaultCertificateIdInput"></a>

```go
func KeyVaultCertificateIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateContent`<sup>Required</sup> <a name="CertificateContent" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.certificateContent"></a>

```go
func CertificateContent() *string
```

- *Type:* *string

---

##### `ExcludePrivateKey`<sup>Required</sup> <a name="ExcludePrivateKey" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.excludePrivateKey"></a>

```go
func ExcludePrivateKey() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultCertificateId`<sup>Required</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.keyVaultCertificateId"></a>

```go
func KeyVaultCertificateId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudCertificateConfig <a name="SpringCloudCertificateConfig" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springcloudcertificate"

&springcloudcertificate.SpringCloudCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	ServiceName: *string,
	CertificateContent: *string,
	ExcludePrivateKey: interface{},
	Id: *string,
	KeyVaultCertificateId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.springCloudCertificate.SpringCloudCertificateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#name SpringCloudCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#resource_group_name SpringCloudCertificate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#service_name SpringCloudCertificate#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.certificateContent">CertificateContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#certificate_content SpringCloudCertificate#certificate_content}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.excludePrivateKey">ExcludePrivateKey</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#exclude_private_key SpringCloudCertificate#exclude_private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#id SpringCloudCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#key_vault_certificate_id SpringCloudCertificate#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts">SpringCloudCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#name SpringCloudCertificate#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#resource_group_name SpringCloudCertificate#resource_group_name}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#service_name SpringCloudCertificate#service_name}.

---

##### `CertificateContent`<sup>Optional</sup> <a name="CertificateContent" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.certificateContent"></a>

```go
CertificateContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#certificate_content SpringCloudCertificate#certificate_content}.

---

##### `ExcludePrivateKey`<sup>Optional</sup> <a name="ExcludePrivateKey" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.excludePrivateKey"></a>

```go
ExcludePrivateKey interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#exclude_private_key SpringCloudCertificate#exclude_private_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#id SpringCloudCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVaultCertificateId`<sup>Optional</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.keyVaultCertificateId"></a>

```go
KeyVaultCertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#key_vault_certificate_id SpringCloudCertificate#key_vault_certificate_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateConfig.property.timeouts"></a>

```go
Timeouts SpringCloudCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts">SpringCloudCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#timeouts SpringCloudCertificate#timeouts}

---

### SpringCloudCertificateTimeouts <a name="SpringCloudCertificateTimeouts" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springcloudcertificate"

&springcloudcertificate.SpringCloudCertificateTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#create SpringCloudCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#delete SpringCloudCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#read SpringCloudCertificate#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#create SpringCloudCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#delete SpringCloudCertificate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/spring_cloud_certificate#read SpringCloudCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudCertificateTimeoutsOutputReference <a name="SpringCloudCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springcloudcertificate"

springcloudcertificate.NewSpringCloudCertificateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudCertificateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudCertificate.SpringCloudCertificateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



