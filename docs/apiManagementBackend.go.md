# `apiManagementBackend` Submodule <a name="`apiManagementBackend` Submodule" id="@cdktf/provider-azurerm.apiManagementBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementBackend <a name="ApiManagementBackend" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend azurerm_api_management_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.NewApiManagementBackend(scope Construct, id *string, config ApiManagementBackendConfig) ApiManagementBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig">ApiManagementBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig">ApiManagementBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putServiceFabricCluster">PutServiceFabricCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetServiceFabricCluster">ResetServiceFabricCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCredentials"></a>

```go
func PutCredentials(value ApiManagementBackendCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putProxy"></a>

```go
func PutProxy(value ApiManagementBackendProxy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

---

##### `PutServiceFabricCluster` <a name="PutServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putServiceFabricCluster"></a>

```go
func PutServiceFabricCluster(value ApiManagementBackendServiceFabricCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putServiceFabricCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementBackendTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a>

---

##### `PutTls` <a name="PutTls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTls"></a>

```go
func PutTls(value ApiManagementBackendTls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

---

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetProxy"></a>

```go
func ResetProxy()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetServiceFabricCluster` <a name="ResetServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetServiceFabricCluster"></a>

```go
func ResetServiceFabricCluster()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTls"></a>

```go
func ResetTls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.ApiManagementBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.ApiManagementBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.ApiManagementBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.ApiManagementBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiManagementBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiManagementBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiManagementBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference">ApiManagementBackendCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference">ApiManagementBackendProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricCluster">ServiceFabricCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference">ApiManagementBackendServiceFabricClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference">ApiManagementBackendTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference">ApiManagementBackendTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxyInput">ProxyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricClusterInput">ServiceFabricClusterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tlsInput">TlsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentials"></a>

```go
func Credentials() ApiManagementBackendCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference">ApiManagementBackendCredentialsOutputReference</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxy"></a>

```go
func Proxy() ApiManagementBackendProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference">ApiManagementBackendProxyOutputReference</a>

---

##### `ServiceFabricCluster`<sup>Required</sup> <a name="ServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricCluster"></a>

```go
func ServiceFabricCluster() ApiManagementBackendServiceFabricClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference">ApiManagementBackendServiceFabricClusterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeouts"></a>

```go
func Timeouts() ApiManagementBackendTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference">ApiManagementBackendTimeoutsOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tls"></a>

```go
func Tls() ApiManagementBackendTlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference">ApiManagementBackendTlsOutputReference</a>

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementNameInput"></a>

```go
func ApiManagementNameInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentialsInput"></a>

```go
func CredentialsInput() ApiManagementBackendCredentials
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxyInput"></a>

```go
func ProxyInput() ApiManagementBackendProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ServiceFabricClusterInput`<sup>Optional</sup> <a name="ServiceFabricClusterInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricClusterInput"></a>

```go
func ServiceFabricClusterInput() ApiManagementBackendServiceFabricCluster
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tlsInput"></a>

```go
func TlsInput() ApiManagementBackendTls
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementName"></a>

```go
func ApiManagementName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementBackendConfig <a name="ApiManagementBackendConfig" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

&apimanagementbackend.ApiManagementBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementName: *string,
	Name: *string,
	Protocol: *string,
	ResourceGroupName: *string,
	Url: *string,
	Credentials: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.apiManagementBackend.ApiManagementBackendCredentials,
	Description: *string,
	Id: *string,
	Proxy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.apiManagementBackend.ApiManagementBackendProxy,
	ResourceId: *string,
	ServiceFabricCluster: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.apiManagementBackend.ApiManagementBackendServiceFabricCluster,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.apiManagementBackend.ApiManagementBackendTimeouts,
	Title: *string,
	Tls: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.apiManagementBackend.ApiManagementBackendTls,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#api_management_name ApiManagementBackend#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#name ApiManagementBackend#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#protocol ApiManagementBackend#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#resource_group_name ApiManagementBackend#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#url ApiManagementBackend#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#description ApiManagementBackend#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#id ApiManagementBackend#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#resource_id ApiManagementBackend#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.serviceFabricCluster">ServiceFabricCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a></code> | service_fabric_cluster block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#title ApiManagementBackend#title}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a></code> | tls block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.apiManagementName"></a>

```go
ApiManagementName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#api_management_name ApiManagementBackend#api_management_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#name ApiManagementBackend#name}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#protocol ApiManagementBackend#protocol}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#resource_group_name ApiManagementBackend#resource_group_name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#url ApiManagementBackend#url}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.credentials"></a>

```go
Credentials ApiManagementBackendCredentials
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#credentials ApiManagementBackend#credentials}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#description ApiManagementBackend#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#id ApiManagementBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.proxy"></a>

```go
Proxy ApiManagementBackendProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#proxy ApiManagementBackend#proxy}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#resource_id ApiManagementBackend#resource_id}.

---

##### `ServiceFabricCluster`<sup>Optional</sup> <a name="ServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.serviceFabricCluster"></a>

```go
ServiceFabricCluster ApiManagementBackendServiceFabricCluster
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

service_fabric_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#service_fabric_cluster ApiManagementBackend#service_fabric_cluster}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.timeouts"></a>

```go
Timeouts ApiManagementBackendTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#timeouts ApiManagementBackend#timeouts}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#title ApiManagementBackend#title}.

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.tls"></a>

```go
Tls ApiManagementBackendTls
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#tls ApiManagementBackend#tls}

---

### ApiManagementBackendCredentials <a name="ApiManagementBackendCredentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

&apimanagementbackend.ApiManagementBackendCredentials {
	Authorization: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.apiManagementBackend.ApiManagementBackendCredentialsAuthorization,
	Certificate: *[]*string,
	Header: *map[string]*string,
	Query: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.certificate">Certificate</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#certificate ApiManagementBackend#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.header">Header</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#header ApiManagementBackend#header}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.query">Query</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#query ApiManagementBackend#query}. |

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.authorization"></a>

```go
Authorization ApiManagementBackendCredentialsAuthorization
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#authorization ApiManagementBackend#authorization}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.certificate"></a>

```go
Certificate *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#certificate ApiManagementBackend#certificate}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.header"></a>

```go
Header *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#header ApiManagementBackend#header}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.query"></a>

```go
Query *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#query ApiManagementBackend#query}.

---

### ApiManagementBackendCredentialsAuthorization <a name="ApiManagementBackendCredentialsAuthorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

&apimanagementbackend.ApiManagementBackendCredentialsAuthorization {
	Parameter: *string,
	Scheme: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.parameter">Parameter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#parameter ApiManagementBackend#parameter}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#scheme ApiManagementBackend#scheme}. |

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.parameter"></a>

```go
Parameter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#parameter ApiManagementBackend#parameter}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#scheme ApiManagementBackend#scheme}.

---

### ApiManagementBackendProxy <a name="ApiManagementBackendProxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

&apimanagementbackend.ApiManagementBackendProxy {
	Url: *string,
	Username: *string,
	Password: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#url ApiManagementBackend#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#username ApiManagementBackend#username}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#password ApiManagementBackend#password}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#url ApiManagementBackend#url}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#username ApiManagementBackend#username}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#password ApiManagementBackend#password}.

---

### ApiManagementBackendServiceFabricCluster <a name="ApiManagementBackendServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

&apimanagementbackend.ApiManagementBackendServiceFabricCluster {
	ManagementEndpoints: *[]*string,
	MaxPartitionResolutionRetries: *f64,
	ClientCertificateId: *string,
	ClientCertificateThumbprint: *string,
	ServerCertificateThumbprints: *[]*string,
	ServerX509Name: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.managementEndpoints">ManagementEndpoints</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#management_endpoints ApiManagementBackend#management_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.maxPartitionResolutionRetries">MaxPartitionResolutionRetries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#max_partition_resolution_retries ApiManagementBackend#max_partition_resolution_retries}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateId">ClientCertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#client_certificate_id ApiManagementBackend#client_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateThumbprint">ClientCertificateThumbprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#client_certificate_thumbprint ApiManagementBackend#client_certificate_thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverCertificateThumbprints">ServerCertificateThumbprints</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#server_certificate_thumbprints ApiManagementBackend#server_certificate_thumbprints}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverX509Name">ServerX509Name</a></code> | <code>interface{}</code> | server_x509_name block. |

---

##### `ManagementEndpoints`<sup>Required</sup> <a name="ManagementEndpoints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.managementEndpoints"></a>

```go
ManagementEndpoints *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#management_endpoints ApiManagementBackend#management_endpoints}.

---

##### `MaxPartitionResolutionRetries`<sup>Required</sup> <a name="MaxPartitionResolutionRetries" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.maxPartitionResolutionRetries"></a>

```go
MaxPartitionResolutionRetries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#max_partition_resolution_retries ApiManagementBackend#max_partition_resolution_retries}.

---

##### `ClientCertificateId`<sup>Optional</sup> <a name="ClientCertificateId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateId"></a>

```go
ClientCertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#client_certificate_id ApiManagementBackend#client_certificate_id}.

---

##### `ClientCertificateThumbprint`<sup>Optional</sup> <a name="ClientCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateThumbprint"></a>

```go
ClientCertificateThumbprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#client_certificate_thumbprint ApiManagementBackend#client_certificate_thumbprint}.

---

##### `ServerCertificateThumbprints`<sup>Optional</sup> <a name="ServerCertificateThumbprints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverCertificateThumbprints"></a>

```go
ServerCertificateThumbprints *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#server_certificate_thumbprints ApiManagementBackend#server_certificate_thumbprints}.

---

##### `ServerX509Name`<sup>Optional</sup> <a name="ServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverX509Name"></a>

```go
ServerX509Name interface{}
```

- *Type:* interface{}

server_x509_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#server_x509_name ApiManagementBackend#server_x509_name}

---

### ApiManagementBackendServiceFabricClusterServerX509Name <a name="ApiManagementBackendServiceFabricClusterServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

&apimanagementbackend.ApiManagementBackendServiceFabricClusterServerX509Name {
	IssuerCertificateThumbprint: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.issuerCertificateThumbprint">IssuerCertificateThumbprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#issuer_certificate_thumbprint ApiManagementBackend#issuer_certificate_thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#name ApiManagementBackend#name}. |

---

##### `IssuerCertificateThumbprint`<sup>Required</sup> <a name="IssuerCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.issuerCertificateThumbprint"></a>

```go
IssuerCertificateThumbprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#issuer_certificate_thumbprint ApiManagementBackend#issuer_certificate_thumbprint}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#name ApiManagementBackend#name}.

---

### ApiManagementBackendTimeouts <a name="ApiManagementBackendTimeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

&apimanagementbackend.ApiManagementBackendTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#create ApiManagementBackend#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#delete ApiManagementBackend#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#read ApiManagementBackend#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#update ApiManagementBackend#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#create ApiManagementBackend#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#delete ApiManagementBackend#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#read ApiManagementBackend#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#update ApiManagementBackend#update}.

---

### ApiManagementBackendTls <a name="ApiManagementBackendTls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

&apimanagementbackend.ApiManagementBackendTls {
	ValidateCertificateChain: interface{},
	ValidateCertificateName: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateChain">ValidateCertificateChain</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#validate_certificate_chain ApiManagementBackend#validate_certificate_chain}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateName">ValidateCertificateName</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#validate_certificate_name ApiManagementBackend#validate_certificate_name}. |

---

##### `ValidateCertificateChain`<sup>Optional</sup> <a name="ValidateCertificateChain" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateChain"></a>

```go
ValidateCertificateChain interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#validate_certificate_chain ApiManagementBackend#validate_certificate_chain}.

---

##### `ValidateCertificateName`<sup>Optional</sup> <a name="ValidateCertificateName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateName"></a>

```go
ValidateCertificateName interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/api_management_backend#validate_certificate_name ApiManagementBackend#validate_certificate_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementBackendCredentialsAuthorizationOutputReference <a name="ApiManagementBackendCredentialsAuthorizationOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.NewApiManagementBackendCredentialsAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementBackendCredentialsAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetParameter"></a>

```go
func ResetParameter()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetScheme"></a>

```go
func ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameterInput">ParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameter">Parameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameterInput"></a>

```go
func ParameterInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameter"></a>

```go
func Parameter() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementBackendCredentialsAuthorization
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

---


### ApiManagementBackendCredentialsOutputReference <a name="ApiManagementBackendCredentialsOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.NewApiManagementBackendCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementBackendCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.putAuthorization"></a>

```go
func PutAuthorization(value ApiManagementBackendCredentialsAuthorization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference">ApiManagementBackendCredentialsAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.headerInput">HeaderInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.queryInput">QueryInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificate">Certificate</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.header">Header</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.query">Query</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorization"></a>

```go
func Authorization() ApiManagementBackendCredentialsAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference">ApiManagementBackendCredentialsAuthorizationOutputReference</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() ApiManagementBackendCredentialsAuthorization
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *[]*string
```

- *Type:* *[]*string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.headerInput"></a>

```go
func HeaderInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.queryInput"></a>

```go
func QueryInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificate"></a>

```go
func Certificate() *[]*string
```

- *Type:* *[]*string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.header"></a>

```go
func Header() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.query"></a>

```go
func Query() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementBackendCredentials
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

---


### ApiManagementBackendProxyOutputReference <a name="ApiManagementBackendProxyOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.NewApiManagementBackendProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementBackendProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resetPassword"></a>

```go
func ResetPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementBackendProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

---


### ApiManagementBackendServiceFabricClusterOutputReference <a name="ApiManagementBackendServiceFabricClusterOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.NewApiManagementBackendServiceFabricClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementBackendServiceFabricClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.putServerX509Name">PutServerX509Name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateId">ResetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateThumbprint">ResetClientCertificateThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerCertificateThumbprints">ResetServerCertificateThumbprints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerX509Name">ResetServerX509Name</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServerX509Name` <a name="PutServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.putServerX509Name"></a>

```go
func PutServerX509Name(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.putServerX509Name.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientCertificateId` <a name="ResetClientCertificateId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateId"></a>

```go
func ResetClientCertificateId()
```

##### `ResetClientCertificateThumbprint` <a name="ResetClientCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateThumbprint"></a>

```go
func ResetClientCertificateThumbprint()
```

##### `ResetServerCertificateThumbprints` <a name="ResetServerCertificateThumbprints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerCertificateThumbprints"></a>

```go
func ResetServerCertificateThumbprints()
```

##### `ResetServerX509Name` <a name="ResetServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerX509Name"></a>

```go
func ResetServerX509Name()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509Name">ServerX509Name</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList">ApiManagementBackendServiceFabricClusterServerX509NameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateIdInput">ClientCertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprintInput">ClientCertificateThumbprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpointsInput">ManagementEndpointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetriesInput">MaxPartitionResolutionRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprintsInput">ServerCertificateThumbprintsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509NameInput">ServerX509NameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateId">ClientCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprint">ClientCertificateThumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpoints">ManagementEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetries">MaxPartitionResolutionRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprints">ServerCertificateThumbprints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerX509Name`<sup>Required</sup> <a name="ServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509Name"></a>

```go
func ServerX509Name() ApiManagementBackendServiceFabricClusterServerX509NameList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList">ApiManagementBackendServiceFabricClusterServerX509NameList</a>

---

##### `ClientCertificateIdInput`<sup>Optional</sup> <a name="ClientCertificateIdInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateIdInput"></a>

```go
func ClientCertificateIdInput() *string
```

- *Type:* *string

---

##### `ClientCertificateThumbprintInput`<sup>Optional</sup> <a name="ClientCertificateThumbprintInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprintInput"></a>

```go
func ClientCertificateThumbprintInput() *string
```

- *Type:* *string

---

##### `ManagementEndpointsInput`<sup>Optional</sup> <a name="ManagementEndpointsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpointsInput"></a>

```go
func ManagementEndpointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPartitionResolutionRetriesInput`<sup>Optional</sup> <a name="MaxPartitionResolutionRetriesInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetriesInput"></a>

```go
func MaxPartitionResolutionRetriesInput() *f64
```

- *Type:* *f64

---

##### `ServerCertificateThumbprintsInput`<sup>Optional</sup> <a name="ServerCertificateThumbprintsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprintsInput"></a>

```go
func ServerCertificateThumbprintsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServerX509NameInput`<sup>Optional</sup> <a name="ServerX509NameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509NameInput"></a>

```go
func ServerX509NameInput() interface{}
```

- *Type:* interface{}

---

##### `ClientCertificateId`<sup>Required</sup> <a name="ClientCertificateId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateId"></a>

```go
func ClientCertificateId() *string
```

- *Type:* *string

---

##### `ClientCertificateThumbprint`<sup>Required</sup> <a name="ClientCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprint"></a>

```go
func ClientCertificateThumbprint() *string
```

- *Type:* *string

---

##### `ManagementEndpoints`<sup>Required</sup> <a name="ManagementEndpoints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpoints"></a>

```go
func ManagementEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPartitionResolutionRetries`<sup>Required</sup> <a name="MaxPartitionResolutionRetries" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetries"></a>

```go
func MaxPartitionResolutionRetries() *f64
```

- *Type:* *f64

---

##### `ServerCertificateThumbprints`<sup>Required</sup> <a name="ServerCertificateThumbprints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprints"></a>

```go
func ServerCertificateThumbprints() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementBackendServiceFabricCluster
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

---


### ApiManagementBackendServiceFabricClusterServerX509NameList <a name="ApiManagementBackendServiceFabricClusterServerX509NameList" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.NewApiManagementBackendServiceFabricClusterServerX509NameList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementBackendServiceFabricClusterServerX509NameList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.get"></a>

```go
func Get(index *f64) ApiManagementBackendServiceFabricClusterServerX509NameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementBackendServiceFabricClusterServerX509NameOutputReference <a name="ApiManagementBackendServiceFabricClusterServerX509NameOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.NewApiManagementBackendServiceFabricClusterServerX509NameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementBackendServiceFabricClusterServerX509NameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprintInput">IssuerCertificateThumbprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprint">IssuerCertificateThumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IssuerCertificateThumbprintInput`<sup>Optional</sup> <a name="IssuerCertificateThumbprintInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprintInput"></a>

```go
func IssuerCertificateThumbprintInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `IssuerCertificateThumbprint`<sup>Required</sup> <a name="IssuerCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprint"></a>

```go
func IssuerCertificateThumbprint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementBackendTimeoutsOutputReference <a name="ApiManagementBackendTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.NewApiManagementBackendTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementBackendTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementBackendTlsOutputReference <a name="ApiManagementBackendTlsOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/apimanagementbackend"

apimanagementbackend.NewApiManagementBackendTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementBackendTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateChain">ResetValidateCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateName">ResetValidateCertificateName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidateCertificateChain` <a name="ResetValidateCertificateChain" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateChain"></a>

```go
func ResetValidateCertificateChain()
```

##### `ResetValidateCertificateName` <a name="ResetValidateCertificateName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateName"></a>

```go
func ResetValidateCertificateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChainInput">ValidateCertificateChainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateNameInput">ValidateCertificateNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChain">ValidateCertificateChain</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateName">ValidateCertificateName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValidateCertificateChainInput`<sup>Optional</sup> <a name="ValidateCertificateChainInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChainInput"></a>

```go
func ValidateCertificateChainInput() interface{}
```

- *Type:* interface{}

---

##### `ValidateCertificateNameInput`<sup>Optional</sup> <a name="ValidateCertificateNameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateNameInput"></a>

```go
func ValidateCertificateNameInput() interface{}
```

- *Type:* interface{}

---

##### `ValidateCertificateChain`<sup>Required</sup> <a name="ValidateCertificateChain" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChain"></a>

```go
func ValidateCertificateChain() interface{}
```

- *Type:* interface{}

---

##### `ValidateCertificateName`<sup>Required</sup> <a name="ValidateCertificateName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateName"></a>

```go
func ValidateCertificateName() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementBackendTls
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

---



