# `activeDirectoryDomainServiceTrust` Submodule <a name="`activeDirectoryDomainServiceTrust` Submodule" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainServiceTrust <a name="ActiveDirectoryDomainServiceTrust" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust azurerm_active_directory_domain_service_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/activedirectorydomainservicetrust"

activedirectorydomainservicetrust.NewActiveDirectoryDomainServiceTrust(scope Construct, id *string, config ActiveDirectoryDomainServiceTrustConfig) ActiveDirectoryDomainServiceTrust
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig">ActiveDirectoryDomainServiceTrustConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig">ActiveDirectoryDomainServiceTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.putTimeouts"></a>

```go
func PutTimeouts(value ActiveDirectoryDomainServiceTrustTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActiveDirectoryDomainServiceTrust resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/activedirectorydomainservicetrust"

activedirectorydomainservicetrust.ActiveDirectoryDomainServiceTrust_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/activedirectorydomainservicetrust"

activedirectorydomainservicetrust.ActiveDirectoryDomainServiceTrust_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/activedirectorydomainservicetrust"

activedirectorydomainservicetrust.ActiveDirectoryDomainServiceTrust_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/activedirectorydomainservicetrust"

activedirectorydomainservicetrust.ActiveDirectoryDomainServiceTrust_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ActiveDirectoryDomainServiceTrust resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ActiveDirectoryDomainServiceTrust to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ActiveDirectoryDomainServiceTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ActiveDirectoryDomainServiceTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference">ActiveDirectoryDomainServiceTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceIdInput">DomainServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIpsInput">TrustedDomainDnsIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdnInput">TrustedDomainFqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceId">DomainServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIps">TrustedDomainDnsIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdn">TrustedDomainFqdn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeouts"></a>

```go
func Timeouts() ActiveDirectoryDomainServiceTrustTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference">ActiveDirectoryDomainServiceTrustTimeoutsOutputReference</a>

---

##### `DomainServiceIdInput`<sup>Optional</sup> <a name="DomainServiceIdInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceIdInput"></a>

```go
func DomainServiceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrustedDomainDnsIpsInput`<sup>Optional</sup> <a name="TrustedDomainDnsIpsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIpsInput"></a>

```go
func TrustedDomainDnsIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedDomainFqdnInput`<sup>Optional</sup> <a name="TrustedDomainFqdnInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdnInput"></a>

```go
func TrustedDomainFqdnInput() *string
```

- *Type:* *string

---

##### `DomainServiceId`<sup>Required</sup> <a name="DomainServiceId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.domainServiceId"></a>

```go
func DomainServiceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `TrustedDomainDnsIps`<sup>Required</sup> <a name="TrustedDomainDnsIps" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainDnsIps"></a>

```go
func TrustedDomainDnsIps() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedDomainFqdn`<sup>Required</sup> <a name="TrustedDomainFqdn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.trustedDomainFqdn"></a>

```go
func TrustedDomainFqdn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrust.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainServiceTrustConfig <a name="ActiveDirectoryDomainServiceTrustConfig" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/activedirectorydomainservicetrust"

&activedirectorydomainservicetrust.ActiveDirectoryDomainServiceTrustConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainServiceId: *string,
	Name: *string,
	Password: *string,
	TrustedDomainDnsIps: *[]*string,
	TrustedDomainFqdn: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.domainServiceId">DomainServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#domain_service_id ActiveDirectoryDomainServiceTrust#domain_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#name ActiveDirectoryDomainServiceTrust#name}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#password ActiveDirectoryDomainServiceTrust#password}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainDnsIps">TrustedDomainDnsIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#trusted_domain_dns_ips ActiveDirectoryDomainServiceTrust#trusted_domain_dns_ips}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainFqdn">TrustedDomainFqdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#trusted_domain_fqdn ActiveDirectoryDomainServiceTrust#trusted_domain_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#id ActiveDirectoryDomainServiceTrust#id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainServiceId`<sup>Required</sup> <a name="DomainServiceId" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.domainServiceId"></a>

```go
DomainServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#domain_service_id ActiveDirectoryDomainServiceTrust#domain_service_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#name ActiveDirectoryDomainServiceTrust#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#password ActiveDirectoryDomainServiceTrust#password}.

---

##### `TrustedDomainDnsIps`<sup>Required</sup> <a name="TrustedDomainDnsIps" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainDnsIps"></a>

```go
TrustedDomainDnsIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#trusted_domain_dns_ips ActiveDirectoryDomainServiceTrust#trusted_domain_dns_ips}.

---

##### `TrustedDomainFqdn`<sup>Required</sup> <a name="TrustedDomainFqdn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.trustedDomainFqdn"></a>

```go
TrustedDomainFqdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#trusted_domain_fqdn ActiveDirectoryDomainServiceTrust#trusted_domain_fqdn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#id ActiveDirectoryDomainServiceTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustConfig.property.timeouts"></a>

```go
Timeouts ActiveDirectoryDomainServiceTrustTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts">ActiveDirectoryDomainServiceTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#timeouts ActiveDirectoryDomainServiceTrust#timeouts}

---

### ActiveDirectoryDomainServiceTrustTimeouts <a name="ActiveDirectoryDomainServiceTrustTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/activedirectorydomainservicetrust"

&activedirectorydomainservicetrust.ActiveDirectoryDomainServiceTrustTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#create ActiveDirectoryDomainServiceTrust#create}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#delete ActiveDirectoryDomainServiceTrust#delete}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#read ActiveDirectoryDomainServiceTrust#read}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#update ActiveDirectoryDomainServiceTrust#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#create ActiveDirectoryDomainServiceTrust#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#delete ActiveDirectoryDomainServiceTrust#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#read ActiveDirectoryDomainServiceTrust#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/active_directory_domain_service_trust#update ActiveDirectoryDomainServiceTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainServiceTrustTimeoutsOutputReference <a name="ActiveDirectoryDomainServiceTrustTimeoutsOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/activedirectorydomainservicetrust"

activedirectorydomainservicetrust.NewActiveDirectoryDomainServiceTrustTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActiveDirectoryDomainServiceTrustTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainServiceTrust.ActiveDirectoryDomainServiceTrustTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



