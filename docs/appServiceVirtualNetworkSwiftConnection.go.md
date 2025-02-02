# `appServiceVirtualNetworkSwiftConnection` Submodule <a name="`appServiceVirtualNetworkSwiftConnection` Submodule" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceVirtualNetworkSwiftConnection <a name="AppServiceVirtualNetworkSwiftConnection" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection azurerm_app_service_virtual_network_swift_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appservicevirtualnetworkswiftconnection"

appservicevirtualnetworkswiftconnection.NewAppServiceVirtualNetworkSwiftConnection(scope Construct, id *string, config AppServiceVirtualNetworkSwiftConnectionConfig) AppServiceVirtualNetworkSwiftConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig">AppServiceVirtualNetworkSwiftConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig">AppServiceVirtualNetworkSwiftConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.putTimeouts"></a>

```go
func PutTimeouts(value AppServiceVirtualNetworkSwiftConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceVirtualNetworkSwiftConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appservicevirtualnetworkswiftconnection"

appservicevirtualnetworkswiftconnection.AppServiceVirtualNetworkSwiftConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appservicevirtualnetworkswiftconnection"

appservicevirtualnetworkswiftconnection.AppServiceVirtualNetworkSwiftConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appservicevirtualnetworkswiftconnection"

appservicevirtualnetworkswiftconnection.AppServiceVirtualNetworkSwiftConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appservicevirtualnetworkswiftconnection"

appservicevirtualnetworkswiftconnection.AppServiceVirtualNetworkSwiftConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppServiceVirtualNetworkSwiftConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppServiceVirtualNetworkSwiftConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppServiceVirtualNetworkSwiftConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceVirtualNetworkSwiftConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceIdInput">AppServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceId">AppServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeouts"></a>

```go
func Timeouts() AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference</a>

---

##### `AppServiceIdInput`<sup>Optional</sup> <a name="AppServiceIdInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceIdInput"></a>

```go
func AppServiceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AppServiceId`<sup>Required</sup> <a name="AppServiceId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceId"></a>

```go
func AppServiceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceVirtualNetworkSwiftConnectionConfig <a name="AppServiceVirtualNetworkSwiftConnectionConfig" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appservicevirtualnetworkswiftconnection"

&appservicevirtualnetworkswiftconnection.AppServiceVirtualNetworkSwiftConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppServiceId: *string,
	SubnetId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.appServiceId">AppServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#app_service_id AppServiceVirtualNetworkSwiftConnection#app_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#subnet_id AppServiceVirtualNetworkSwiftConnection#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#id AppServiceVirtualNetworkSwiftConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppServiceId`<sup>Required</sup> <a name="AppServiceId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.appServiceId"></a>

```go
AppServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#app_service_id AppServiceVirtualNetworkSwiftConnection#app_service_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#subnet_id AppServiceVirtualNetworkSwiftConnection#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#id AppServiceVirtualNetworkSwiftConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.timeouts"></a>

```go
Timeouts AppServiceVirtualNetworkSwiftConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#timeouts AppServiceVirtualNetworkSwiftConnection#timeouts}

---

### AppServiceVirtualNetworkSwiftConnectionTimeouts <a name="AppServiceVirtualNetworkSwiftConnectionTimeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appservicevirtualnetworkswiftconnection"

&appservicevirtualnetworkswiftconnection.AppServiceVirtualNetworkSwiftConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#create AppServiceVirtualNetworkSwiftConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#delete AppServiceVirtualNetworkSwiftConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#read AppServiceVirtualNetworkSwiftConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#update AppServiceVirtualNetworkSwiftConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#create AppServiceVirtualNetworkSwiftConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#delete AppServiceVirtualNetworkSwiftConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#read AppServiceVirtualNetworkSwiftConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/app_service_virtual_network_swift_connection#update AppServiceVirtualNetworkSwiftConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference <a name="AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appservicevirtualnetworkswiftconnection"

appservicevirtualnetworkswiftconnection.NewAppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



