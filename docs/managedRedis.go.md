# `managedRedis` Submodule <a name="`managedRedis` Submodule" id="@cdktf/provider-azurerm.managedRedis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedRedis <a name="ManagedRedis" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis azurerm_managed_redis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.NewManagedRedis(scope Construct, id *string, config ManagedRedisConfig) ManagedRedis
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig">ManagedRedisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig">ManagedRedisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putCustomerManagedKey">PutCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putDefaultDatabase">PutDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetDefaultDatabase">ResetDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetHighAvailabilityEnabled">ResetHighAvailabilityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerManagedKey` <a name="PutCustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putCustomerManagedKey"></a>

```go
func PutCustomerManagedKey(value ManagedRedisCustomerManagedKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

---

##### `PutDefaultDatabase` <a name="PutDefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putDefaultDatabase"></a>

```go
func PutDefaultDatabase(value ManagedRedisDefaultDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putDefaultDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putIdentity"></a>

```go
func PutIdentity(value ManagedRedisIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putTimeouts"></a>

```go
func PutTimeouts(value ManagedRedisTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

---

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetCustomerManagedKey"></a>

```go
func ResetCustomerManagedKey()
```

##### `ResetDefaultDatabase` <a name="ResetDefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetDefaultDatabase"></a>

```go
func ResetDefaultDatabase()
```

##### `ResetHighAvailabilityEnabled` <a name="ResetHighAvailabilityEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetHighAvailabilityEnabled"></a>

```go
func ResetHighAvailabilityEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedRedis resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.ManagedRedis_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.ManagedRedis_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.ManagedRedis_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.ManagedRedis_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedRedis resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedRedis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedRedis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedRedis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference">ManagedRedisCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabase">DefaultDatabase</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference">ManagedRedisDefaultDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference">ManagedRedisIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference">ManagedRedisTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabaseInput">DefaultDatabaseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabledInput">HighAvailabilityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabled">HighAvailabilityEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKey"></a>

```go
func CustomerManagedKey() ManagedRedisCustomerManagedKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference">ManagedRedisCustomerManagedKeyOutputReference</a>

---

##### `DefaultDatabase`<sup>Required</sup> <a name="DefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabase"></a>

```go
func DefaultDatabase() ManagedRedisDefaultDatabaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference">ManagedRedisDefaultDatabaseOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identity"></a>

```go
func Identity() ManagedRedisIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference">ManagedRedisIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeouts"></a>

```go
func Timeouts() ManagedRedisTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference">ManagedRedisTimeoutsOutputReference</a>

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.customerManagedKeyInput"></a>

```go
func CustomerManagedKeyInput() ManagedRedisCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

---

##### `DefaultDatabaseInput`<sup>Optional</sup> <a name="DefaultDatabaseInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.defaultDatabaseInput"></a>

```go
func DefaultDatabaseInput() ManagedRedisDefaultDatabase
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

---

##### `HighAvailabilityEnabledInput`<sup>Optional</sup> <a name="HighAvailabilityEnabledInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabledInput"></a>

```go
func HighAvailabilityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.identityInput"></a>

```go
func IdentityInput() ManagedRedisIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `HighAvailabilityEnabled`<sup>Required</sup> <a name="HighAvailabilityEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.highAvailabilityEnabled"></a>

```go
func HighAvailabilityEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.managedRedis.ManagedRedis.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedRedisConfig <a name="ManagedRedisConfig" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

&managedredis.ManagedRedisConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SkuName: *string,
	CustomerManagedKey: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.managedRedis.ManagedRedisCustomerManagedKey,
	DefaultDatabase: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.managedRedis.ManagedRedisDefaultDatabase,
	HighAvailabilityEnabled: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.managedRedis.ManagedRedisIdentity,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.managedRedis.ManagedRedisTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#location ManagedRedis#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#name ManagedRedis#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#resource_group_name ManagedRedis#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#sku_name ManagedRedis#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.defaultDatabase">DefaultDatabase</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a></code> | default_database block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.highAvailabilityEnabled">HighAvailabilityEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#high_availability_enabled ManagedRedis#high_availability_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#id ManagedRedis#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#tags ManagedRedis#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#location ManagedRedis#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#name ManagedRedis#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#resource_group_name ManagedRedis#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#sku_name ManagedRedis#sku_name}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.customerManagedKey"></a>

```go
CustomerManagedKey ManagedRedisCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#customer_managed_key ManagedRedis#customer_managed_key}

---

##### `DefaultDatabase`<sup>Optional</sup> <a name="DefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.defaultDatabase"></a>

```go
DefaultDatabase ManagedRedisDefaultDatabase
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

default_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#default_database ManagedRedis#default_database}

---

##### `HighAvailabilityEnabled`<sup>Optional</sup> <a name="HighAvailabilityEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.highAvailabilityEnabled"></a>

```go
HighAvailabilityEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#high_availability_enabled ManagedRedis#high_availability_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#id ManagedRedis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.identity"></a>

```go
Identity ManagedRedisIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#identity ManagedRedis#identity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#tags ManagedRedis#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisConfig.property.timeouts"></a>

```go
Timeouts ManagedRedisTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts">ManagedRedisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#timeouts ManagedRedis#timeouts}

---

### ManagedRedisCustomerManagedKey <a name="ManagedRedisCustomerManagedKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

&managedredis.ManagedRedisCustomerManagedKey {
	KeyVaultKeyId: *string,
	UserAssignedIdentityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#key_vault_key_id ManagedRedis#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#user_assigned_identity_id ManagedRedis#user_assigned_identity_id}. |

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#key_vault_key_id ManagedRedis#key_vault_key_id}.

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey.property.userAssignedIdentityId"></a>

```go
UserAssignedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#user_assigned_identity_id ManagedRedis#user_assigned_identity_id}.

---

### ManagedRedisDefaultDatabase <a name="ManagedRedisDefaultDatabase" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

&managedredis.ManagedRedisDefaultDatabase {
	AccessKeysAuthenticationEnabled: interface{},
	ClientProtocol: *string,
	ClusteringPolicy: *string,
	EvictionPolicy: *string,
	GeoReplicationGroupName: *string,
	Module: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.accessKeysAuthenticationEnabled">AccessKeysAuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#access_keys_authentication_enabled ManagedRedis#access_keys_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clientProtocol">ClientProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#client_protocol ManagedRedis#client_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clusteringPolicy">ClusteringPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#clustering_policy ManagedRedis#clustering_policy}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#eviction_policy ManagedRedis#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.geoReplicationGroupName">GeoReplicationGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#geo_replication_group_name ManagedRedis#geo_replication_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.module">Module</a></code> | <code>interface{}</code> | module block. |

---

##### `AccessKeysAuthenticationEnabled`<sup>Optional</sup> <a name="AccessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.accessKeysAuthenticationEnabled"></a>

```go
AccessKeysAuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#access_keys_authentication_enabled ManagedRedis#access_keys_authentication_enabled}.

---

##### `ClientProtocol`<sup>Optional</sup> <a name="ClientProtocol" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clientProtocol"></a>

```go
ClientProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#client_protocol ManagedRedis#client_protocol}.

---

##### `ClusteringPolicy`<sup>Optional</sup> <a name="ClusteringPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.clusteringPolicy"></a>

```go
ClusteringPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#clustering_policy ManagedRedis#clustering_policy}.

---

##### `EvictionPolicy`<sup>Optional</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.evictionPolicy"></a>

```go
EvictionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#eviction_policy ManagedRedis#eviction_policy}.

---

##### `GeoReplicationGroupName`<sup>Optional</sup> <a name="GeoReplicationGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.geoReplicationGroupName"></a>

```go
GeoReplicationGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#geo_replication_group_name ManagedRedis#geo_replication_group_name}.

---

##### `Module`<sup>Optional</sup> <a name="Module" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase.property.module"></a>

```go
Module interface{}
```

- *Type:* interface{}

module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#module ManagedRedis#module}

---

### ManagedRedisDefaultDatabaseModule <a name="ManagedRedisDefaultDatabaseModule" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

&managedredis.ManagedRedisDefaultDatabaseModule {
	Name: *string,
	Args: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#name ManagedRedis#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.args">Args</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#args ManagedRedis#args}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#name ManagedRedis#name}.

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModule.property.args"></a>

```go
Args *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#args ManagedRedis#args}.

---

### ManagedRedisIdentity <a name="ManagedRedisIdentity" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

&managedredis.ManagedRedisIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#type ManagedRedis#type}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#identity_ids ManagedRedis#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#type ManagedRedis#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#identity_ids ManagedRedis#identity_ids}.

---

### ManagedRedisTimeouts <a name="ManagedRedisTimeouts" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

&managedredis.ManagedRedisTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#create ManagedRedis#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#delete ManagedRedis#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#read ManagedRedis#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#update ManagedRedis#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#create ManagedRedis#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#delete ManagedRedis#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#read ManagedRedis#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/resources/managed_redis#update ManagedRedis#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedRedisCustomerManagedKeyOutputReference <a name="ManagedRedisCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.NewManagedRedisCustomerManagedKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedRedisCustomerManagedKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```go
func UserAssignedIdentityIdInput() *string
```

- *Type:* *string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```go
func UserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedRedisCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisCustomerManagedKey">ManagedRedisCustomerManagedKey</a>

---


### ManagedRedisDefaultDatabaseModuleList <a name="ManagedRedisDefaultDatabaseModuleList" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.NewManagedRedisDefaultDatabaseModuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedRedisDefaultDatabaseModuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.get"></a>

```go
func Get(index *f64) ManagedRedisDefaultDatabaseModuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedRedisDefaultDatabaseModuleOutputReference <a name="ManagedRedisDefaultDatabaseModuleOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.NewManagedRedisDefaultDatabaseModuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedRedisDefaultDatabaseModuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.resetArgs"></a>

```go
func ResetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.argsInput">ArgsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.args">Args</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.argsInput"></a>

```go
func ArgsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.args"></a>

```go
func Args() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedRedisDefaultDatabaseOutputReference <a name="ManagedRedisDefaultDatabaseOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.NewManagedRedisDefaultDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedRedisDefaultDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.putModule">PutModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetAccessKeysAuthenticationEnabled">ResetAccessKeysAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClientProtocol">ResetClientProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClusteringPolicy">ResetClusteringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetEvictionPolicy">ResetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetGeoReplicationGroupName">ResetGeoReplicationGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetModule">ResetModule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModule` <a name="PutModule" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.putModule"></a>

```go
func PutModule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.putModule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessKeysAuthenticationEnabled` <a name="ResetAccessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetAccessKeysAuthenticationEnabled"></a>

```go
func ResetAccessKeysAuthenticationEnabled()
```

##### `ResetClientProtocol` <a name="ResetClientProtocol" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClientProtocol"></a>

```go
func ResetClientProtocol()
```

##### `ResetClusteringPolicy` <a name="ResetClusteringPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetClusteringPolicy"></a>

```go
func ResetClusteringPolicy()
```

##### `ResetEvictionPolicy` <a name="ResetEvictionPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetEvictionPolicy"></a>

```go
func ResetEvictionPolicy()
```

##### `ResetGeoReplicationGroupName` <a name="ResetGeoReplicationGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetGeoReplicationGroupName"></a>

```go
func ResetGeoReplicationGroupName()
```

##### `ResetModule` <a name="ResetModule" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.resetModule"></a>

```go
func ResetModule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.module">Module</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList">ManagedRedisDefaultDatabaseModuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabledInput">AccessKeysAuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocolInput">ClientProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicyInput">ClusteringPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupNameInput">GeoReplicationGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.moduleInput">ModuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabled">AccessKeysAuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocol">ClientProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicy">ClusteringPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupName">GeoReplicationGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Module`<sup>Required</sup> <a name="Module" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.module"></a>

```go
func Module() ManagedRedisDefaultDatabaseModuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseModuleList">ManagedRedisDefaultDatabaseModuleList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.primaryAccessKey"></a>

```go
func PrimaryAccessKey() *string
```

- *Type:* *string

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.secondaryAccessKey"></a>

```go
func SecondaryAccessKey() *string
```

- *Type:* *string

---

##### `AccessKeysAuthenticationEnabledInput`<sup>Optional</sup> <a name="AccessKeysAuthenticationEnabledInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabledInput"></a>

```go
func AccessKeysAuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ClientProtocolInput`<sup>Optional</sup> <a name="ClientProtocolInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocolInput"></a>

```go
func ClientProtocolInput() *string
```

- *Type:* *string

---

##### `ClusteringPolicyInput`<sup>Optional</sup> <a name="ClusteringPolicyInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicyInput"></a>

```go
func ClusteringPolicyInput() *string
```

- *Type:* *string

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicyInput"></a>

```go
func EvictionPolicyInput() *string
```

- *Type:* *string

---

##### `GeoReplicationGroupNameInput`<sup>Optional</sup> <a name="GeoReplicationGroupNameInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupNameInput"></a>

```go
func GeoReplicationGroupNameInput() *string
```

- *Type:* *string

---

##### `ModuleInput`<sup>Optional</sup> <a name="ModuleInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.moduleInput"></a>

```go
func ModuleInput() interface{}
```

- *Type:* interface{}

---

##### `AccessKeysAuthenticationEnabled`<sup>Required</sup> <a name="AccessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.accessKeysAuthenticationEnabled"></a>

```go
func AccessKeysAuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ClientProtocol`<sup>Required</sup> <a name="ClientProtocol" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clientProtocol"></a>

```go
func ClientProtocol() *string
```

- *Type:* *string

---

##### `ClusteringPolicy`<sup>Required</sup> <a name="ClusteringPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.clusteringPolicy"></a>

```go
func ClusteringPolicy() *string
```

- *Type:* *string

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.evictionPolicy"></a>

```go
func EvictionPolicy() *string
```

- *Type:* *string

---

##### `GeoReplicationGroupName`<sup>Required</sup> <a name="GeoReplicationGroupName" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.geoReplicationGroupName"></a>

```go
func GeoReplicationGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedRedisDefaultDatabase
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisDefaultDatabase">ManagedRedisDefaultDatabase</a>

---


### ManagedRedisIdentityOutputReference <a name="ManagedRedisIdentityOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.NewManagedRedisIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedRedisIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedRedisIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisIdentity">ManagedRedisIdentity</a>

---


### ManagedRedisTimeoutsOutputReference <a name="ManagedRedisTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/managedredis"

managedredis.NewManagedRedisTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedRedisTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedRedis.ManagedRedisTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



