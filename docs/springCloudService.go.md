# `azurerm_spring_cloud_service`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service).

# `springCloudService` Submodule <a name="`springCloudService` Submodule" id="@cdktf/provider-azurerm.springCloudService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudService <a name="SpringCloudService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service azurerm_spring_cloud_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudService(scope Construct, id *string, config SpringCloudServiceConfig) SpringCloudService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig">SpringCloudServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig">SpringCloudServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putConfigServerGitSetting">PutConfigServerGitSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putContainerRegistry">PutContainerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putDefaultBuildService">PutDefaultBuildService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putMarketplace">PutMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTrace">PutTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetBuildAgentPoolSize">ResetBuildAgentPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetConfigServerGitSetting">ResetConfigServerGitSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetContainerRegistry">ResetContainerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetDefaultBuildService">ResetDefaultBuildService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetLogStreamPublicEndpointEnabled">ResetLogStreamPublicEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetMarketplace">ResetMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetServiceRegistryEnabled">ResetServiceRegistryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTrace">ResetTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetZoneRedundant">ResetZoneRedundant</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutConfigServerGitSetting` <a name="PutConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putConfigServerGitSetting"></a>

```go
func PutConfigServerGitSetting(value SpringCloudServiceConfigServerGitSetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putConfigServerGitSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

---

##### `PutContainerRegistry` <a name="PutContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putContainerRegistry"></a>

```go
func PutContainerRegistry(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putContainerRegistry.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultBuildService` <a name="PutDefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putDefaultBuildService"></a>

```go
func PutDefaultBuildService(value SpringCloudServiceDefaultBuildService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putDefaultBuildService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

---

##### `PutMarketplace` <a name="PutMarketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putMarketplace"></a>

```go
func PutMarketplace(value SpringCloudServiceMarketplace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putMarketplace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putNetwork"></a>

```go
func PutNetwork(value SpringCloudServiceNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a>

---

##### `PutTrace` <a name="PutTrace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTrace"></a>

```go
func PutTrace(value SpringCloudServiceTrace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTrace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

---

##### `ResetBuildAgentPoolSize` <a name="ResetBuildAgentPoolSize" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetBuildAgentPoolSize"></a>

```go
func ResetBuildAgentPoolSize()
```

##### `ResetConfigServerGitSetting` <a name="ResetConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetConfigServerGitSetting"></a>

```go
func ResetConfigServerGitSetting()
```

##### `ResetContainerRegistry` <a name="ResetContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetContainerRegistry"></a>

```go
func ResetContainerRegistry()
```

##### `ResetDefaultBuildService` <a name="ResetDefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetDefaultBuildService"></a>

```go
func ResetDefaultBuildService()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetId"></a>

```go
func ResetId()
```

##### `ResetLogStreamPublicEndpointEnabled` <a name="ResetLogStreamPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetLogStreamPublicEndpointEnabled"></a>

```go
func ResetLogStreamPublicEndpointEnabled()
```

##### `ResetMarketplace` <a name="ResetMarketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetMarketplace"></a>

```go
func ResetMarketplace()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetServiceRegistryEnabled` <a name="ResetServiceRegistryEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetServiceRegistryEnabled"></a>

```go
func ResetServiceRegistryEnabled()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetSkuName"></a>

```go
func ResetSkuName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrace` <a name="ResetTrace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTrace"></a>

```go
func ResetTrace()
```

##### `ResetZoneRedundant` <a name="ResetZoneRedundant" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetZoneRedundant"></a>

```go
func ResetZoneRedundant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.SpringCloudService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.SpringCloudService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.SpringCloudService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.SpringCloudService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpringCloudService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpringCloudService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpringCloudService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSetting">ConfigServerGitSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference">SpringCloudServiceConfigServerGitSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistry">ContainerRegistry</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList">SpringCloudServiceContainerRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildService">DefaultBuildService</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference">SpringCloudServiceDefaultBuildServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplace">Marketplace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference">SpringCloudServiceMarketplaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference">SpringCloudServiceNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.outboundPublicIpAddresses">OutboundPublicIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.requiredNetworkTrafficRules">RequiredNetworkTrafficRules</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList">SpringCloudServiceRequiredNetworkTrafficRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryId">ServiceRegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference">SpringCloudServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.trace">Trace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference">SpringCloudServiceTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSizeInput">BuildAgentPoolSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSettingInput">ConfigServerGitSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistryInput">ContainerRegistryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildServiceInput">DefaultBuildServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabledInput">LogStreamPublicEndpointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplaceInput">MarketplaceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabledInput">ServiceRegistryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.traceInput">TraceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundantInput">ZoneRedundantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSize">BuildAgentPoolSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabled">LogStreamPublicEndpointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabled">ServiceRegistryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundant">ZoneRedundant</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigServerGitSetting`<sup>Required</sup> <a name="ConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSetting"></a>

```go
func ConfigServerGitSetting() SpringCloudServiceConfigServerGitSettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference">SpringCloudServiceConfigServerGitSettingOutputReference</a>

---

##### `ContainerRegistry`<sup>Required</sup> <a name="ContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistry"></a>

```go
func ContainerRegistry() SpringCloudServiceContainerRegistryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList">SpringCloudServiceContainerRegistryList</a>

---

##### `DefaultBuildService`<sup>Required</sup> <a name="DefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildService"></a>

```go
func DefaultBuildService() SpringCloudServiceDefaultBuildServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference">SpringCloudServiceDefaultBuildServiceOutputReference</a>

---

##### `Marketplace`<sup>Required</sup> <a name="Marketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplace"></a>

```go
func Marketplace() SpringCloudServiceMarketplaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference">SpringCloudServiceMarketplaceOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.network"></a>

```go
func Network() SpringCloudServiceNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference">SpringCloudServiceNetworkOutputReference</a>

---

##### `OutboundPublicIpAddresses`<sup>Required</sup> <a name="OutboundPublicIpAddresses" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.outboundPublicIpAddresses"></a>

```go
func OutboundPublicIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredNetworkTrafficRules`<sup>Required</sup> <a name="RequiredNetworkTrafficRules" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.requiredNetworkTrafficRules"></a>

```go
func RequiredNetworkTrafficRules() SpringCloudServiceRequiredNetworkTrafficRulesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList">SpringCloudServiceRequiredNetworkTrafficRulesList</a>

---

##### `ServiceRegistryId`<sup>Required</sup> <a name="ServiceRegistryId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryId"></a>

```go
func ServiceRegistryId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeouts"></a>

```go
func Timeouts() SpringCloudServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference">SpringCloudServiceTimeoutsOutputReference</a>

---

##### `Trace`<sup>Required</sup> <a name="Trace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.trace"></a>

```go
func Trace() SpringCloudServiceTraceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference">SpringCloudServiceTraceOutputReference</a>

---

##### `BuildAgentPoolSizeInput`<sup>Optional</sup> <a name="BuildAgentPoolSizeInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSizeInput"></a>

```go
func BuildAgentPoolSizeInput() *string
```

- *Type:* *string

---

##### `ConfigServerGitSettingInput`<sup>Optional</sup> <a name="ConfigServerGitSettingInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSettingInput"></a>

```go
func ConfigServerGitSettingInput() SpringCloudServiceConfigServerGitSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

---

##### `ContainerRegistryInput`<sup>Optional</sup> <a name="ContainerRegistryInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistryInput"></a>

```go
func ContainerRegistryInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultBuildServiceInput`<sup>Optional</sup> <a name="DefaultBuildServiceInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildServiceInput"></a>

```go
func DefaultBuildServiceInput() SpringCloudServiceDefaultBuildService
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogStreamPublicEndpointEnabledInput`<sup>Optional</sup> <a name="LogStreamPublicEndpointEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabledInput"></a>

```go
func LogStreamPublicEndpointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MarketplaceInput`<sup>Optional</sup> <a name="MarketplaceInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplaceInput"></a>

```go
func MarketplaceInput() SpringCloudServiceMarketplace
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.networkInput"></a>

```go
func NetworkInput() SpringCloudServiceNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServiceRegistryEnabledInput`<sup>Optional</sup> <a name="ServiceRegistryEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabledInput"></a>

```go
func ServiceRegistryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TraceInput`<sup>Optional</sup> <a name="TraceInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.traceInput"></a>

```go
func TraceInput() SpringCloudServiceTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

---

##### `ZoneRedundantInput`<sup>Optional</sup> <a name="ZoneRedundantInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundantInput"></a>

```go
func ZoneRedundantInput() interface{}
```

- *Type:* interface{}

---

##### `BuildAgentPoolSize`<sup>Required</sup> <a name="BuildAgentPoolSize" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSize"></a>

```go
func BuildAgentPoolSize() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LogStreamPublicEndpointEnabled`<sup>Required</sup> <a name="LogStreamPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabled"></a>

```go
func LogStreamPublicEndpointEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServiceRegistryEnabled`<sup>Required</sup> <a name="ServiceRegistryEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabled"></a>

```go
func ServiceRegistryEnabled() interface{}
```

- *Type:* interface{}

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ZoneRedundant`<sup>Required</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundant"></a>

```go
func ZoneRedundant() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudServiceConfig <a name="SpringCloudServiceConfig" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceConfig {
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
	BuildAgentPoolSize: *string,
	ConfigServerGitSetting: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting,
	ContainerRegistry: interface{},
	DefaultBuildService: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudService.SpringCloudServiceDefaultBuildService,
	Id: *string,
	LogStreamPublicEndpointEnabled: interface{},
	Marketplace: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudService.SpringCloudServiceMarketplace,
	Network: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudService.SpringCloudServiceNetwork,
	ServiceRegistryEnabled: interface{},
	SkuName: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudService.SpringCloudServiceTimeouts,
	Trace: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudService.SpringCloudServiceTrace,
	ZoneRedundant: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#location SpringCloudService#location}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#name SpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#resource_group_name SpringCloudService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.buildAgentPoolSize">BuildAgentPoolSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#build_agent_pool_size SpringCloudService#build_agent_pool_size}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.configServerGitSetting">ConfigServerGitSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a></code> | config_server_git_setting block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.containerRegistry">ContainerRegistry</a></code> | <code>interface{}</code> | container_registry block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.defaultBuildService">DefaultBuildService</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a></code> | default_build_service block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#id SpringCloudService#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.logStreamPublicEndpointEnabled">LogStreamPublicEndpointEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#log_stream_public_endpoint_enabled SpringCloudService#log_stream_public_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.marketplace">Marketplace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a></code> | marketplace block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.serviceRegistryEnabled">ServiceRegistryEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#service_registry_enabled SpringCloudService#service_registry_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#sku_name SpringCloudService#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#tags SpringCloudService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.trace">Trace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a></code> | trace block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.zoneRedundant">ZoneRedundant</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#zone_redundant SpringCloudService#zone_redundant}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#location SpringCloudService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#name SpringCloudService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#resource_group_name SpringCloudService#resource_group_name}.

---

##### `BuildAgentPoolSize`<sup>Optional</sup> <a name="BuildAgentPoolSize" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.buildAgentPoolSize"></a>

```go
BuildAgentPoolSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#build_agent_pool_size SpringCloudService#build_agent_pool_size}.

---

##### `ConfigServerGitSetting`<sup>Optional</sup> <a name="ConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.configServerGitSetting"></a>

```go
ConfigServerGitSetting SpringCloudServiceConfigServerGitSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

config_server_git_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#config_server_git_setting SpringCloudService#config_server_git_setting}

---

##### `ContainerRegistry`<sup>Optional</sup> <a name="ContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.containerRegistry"></a>

```go
ContainerRegistry interface{}
```

- *Type:* interface{}

container_registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#container_registry SpringCloudService#container_registry}

---

##### `DefaultBuildService`<sup>Optional</sup> <a name="DefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.defaultBuildService"></a>

```go
DefaultBuildService SpringCloudServiceDefaultBuildService
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

default_build_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#default_build_service SpringCloudService#default_build_service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#id SpringCloudService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogStreamPublicEndpointEnabled`<sup>Optional</sup> <a name="LogStreamPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.logStreamPublicEndpointEnabled"></a>

```go
LogStreamPublicEndpointEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#log_stream_public_endpoint_enabled SpringCloudService#log_stream_public_endpoint_enabled}.

---

##### `Marketplace`<sup>Optional</sup> <a name="Marketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.marketplace"></a>

```go
Marketplace SpringCloudServiceMarketplace
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#marketplace SpringCloudService#marketplace}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.network"></a>

```go
Network SpringCloudServiceNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#network SpringCloudService#network}

---

##### `ServiceRegistryEnabled`<sup>Optional</sup> <a name="ServiceRegistryEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.serviceRegistryEnabled"></a>

```go
ServiceRegistryEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#service_registry_enabled SpringCloudService#service_registry_enabled}.

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#sku_name SpringCloudService#sku_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#tags SpringCloudService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.timeouts"></a>

```go
Timeouts SpringCloudServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#timeouts SpringCloudService#timeouts}

---

##### `Trace`<sup>Optional</sup> <a name="Trace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.trace"></a>

```go
Trace SpringCloudServiceTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#trace SpringCloudService#trace}

---

##### `ZoneRedundant`<sup>Optional</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.zoneRedundant"></a>

```go
ZoneRedundant interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#zone_redundant SpringCloudService#zone_redundant}.

---

### SpringCloudServiceConfigServerGitSetting <a name="SpringCloudServiceConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceConfigServerGitSetting {
	Uri: *string,
	HttpBasicAuth: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth,
	Label: *string,
	Repository: interface{},
	SearchPaths: *[]*string,
	SshAuth: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.httpBasicAuth">HttpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | http_basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#label SpringCloudService#label}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.repository">Repository</a></code> | <code>interface{}</code> | repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.searchPaths">SearchPaths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.sshAuth">SshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a></code> | ssh_auth block. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}.

---

##### `HttpBasicAuth`<sup>Optional</sup> <a name="HttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.httpBasicAuth"></a>

```go
HttpBasicAuth SpringCloudServiceConfigServerGitSettingHttpBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

http_basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#http_basic_auth SpringCloudService#http_basic_auth}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#label SpringCloudService#label}.

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.repository"></a>

```go
Repository interface{}
```

- *Type:* interface{}

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#repository SpringCloudService#repository}

---

##### `SearchPaths`<sup>Optional</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.searchPaths"></a>

```go
SearchPaths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}.

---

##### `SshAuth`<sup>Optional</sup> <a name="SshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.sshAuth"></a>

```go
SshAuth SpringCloudServiceConfigServerGitSettingSshAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

ssh_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#ssh_auth SpringCloudService#ssh_auth}

---

### SpringCloudServiceConfigServerGitSettingHttpBasicAuth <a name="SpringCloudServiceConfigServerGitSettingHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceConfigServerGitSettingHttpBasicAuth {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#password SpringCloudService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#username SpringCloudService#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#password SpringCloudService#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#username SpringCloudService#username}.

---

### SpringCloudServiceConfigServerGitSettingRepository <a name="SpringCloudServiceConfigServerGitSettingRepository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceConfigServerGitSettingRepository {
	Name: *string,
	Uri: *string,
	HttpBasicAuth: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth,
	Label: *string,
	Pattern: *[]*string,
	SearchPaths: *[]*string,
	SshAuth: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#name SpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.httpBasicAuth">HttpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | http_basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#label SpringCloudService#label}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.pattern">Pattern</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#pattern SpringCloudService#pattern}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.searchPaths">SearchPaths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.sshAuth">SshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | ssh_auth block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#name SpringCloudService#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}.

---

##### `HttpBasicAuth`<sup>Optional</sup> <a name="HttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.httpBasicAuth"></a>

```go
HttpBasicAuth SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

http_basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#http_basic_auth SpringCloudService#http_basic_auth}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#label SpringCloudService#label}.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.pattern"></a>

```go
Pattern *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#pattern SpringCloudService#pattern}.

---

##### `SearchPaths`<sup>Optional</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.searchPaths"></a>

```go
SearchPaths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}.

---

##### `SshAuth`<sup>Optional</sup> <a name="SshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.sshAuth"></a>

```go
SshAuth SpringCloudServiceConfigServerGitSettingRepositorySshAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

ssh_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#ssh_auth SpringCloudService#ssh_auth}

---

### SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth <a name="SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#password SpringCloudService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#username SpringCloudService#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#password SpringCloudService#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#username SpringCloudService#username}.

---

### SpringCloudServiceConfigServerGitSettingRepositorySshAuth <a name="SpringCloudServiceConfigServerGitSettingRepositorySshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceConfigServerGitSettingRepositorySshAuth {
	PrivateKey: *string,
	HostKey: *string,
	HostKeyAlgorithm: *string,
	StrictHostKeyCheckingEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKey">HostKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.strictHostKeyCheckingEnabled">StrictHostKeyCheckingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}. |

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}.

---

##### `HostKey`<sup>Optional</sup> <a name="HostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKey"></a>

```go
HostKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}.

---

##### `HostKeyAlgorithm`<sup>Optional</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKeyAlgorithm"></a>

```go
HostKeyAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}.

---

##### `StrictHostKeyCheckingEnabled`<sup>Optional</sup> <a name="StrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.strictHostKeyCheckingEnabled"></a>

```go
StrictHostKeyCheckingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}.

---

### SpringCloudServiceConfigServerGitSettingSshAuth <a name="SpringCloudServiceConfigServerGitSettingSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceConfigServerGitSettingSshAuth {
	PrivateKey: *string,
	HostKey: *string,
	HostKeyAlgorithm: *string,
	StrictHostKeyCheckingEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKey">HostKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.strictHostKeyCheckingEnabled">StrictHostKeyCheckingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}. |

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}.

---

##### `HostKey`<sup>Optional</sup> <a name="HostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKey"></a>

```go
HostKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}.

---

##### `HostKeyAlgorithm`<sup>Optional</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKeyAlgorithm"></a>

```go
HostKeyAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}.

---

##### `StrictHostKeyCheckingEnabled`<sup>Optional</sup> <a name="StrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.strictHostKeyCheckingEnabled"></a>

```go
StrictHostKeyCheckingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}.

---

### SpringCloudServiceContainerRegistry <a name="SpringCloudServiceContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceContainerRegistry {
	Name: *string,
	Password: *string,
	Server: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#name SpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#password SpringCloudService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.server">Server</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#server SpringCloudService#server}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#username SpringCloudService#username}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#name SpringCloudService#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#password SpringCloudService#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.server"></a>

```go
Server *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#server SpringCloudService#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#username SpringCloudService#username}.

---

### SpringCloudServiceDefaultBuildService <a name="SpringCloudServiceDefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceDefaultBuildService {
	ContainerRegistryName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService.property.containerRegistryName">ContainerRegistryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#container_registry_name SpringCloudService#container_registry_name}. |

---

##### `ContainerRegistryName`<sup>Optional</sup> <a name="ContainerRegistryName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService.property.containerRegistryName"></a>

```go
ContainerRegistryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#container_registry_name SpringCloudService#container_registry_name}.

---

### SpringCloudServiceMarketplace <a name="SpringCloudServiceMarketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceMarketplace {
	Plan: *string,
	Product: *string,
	Publisher: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.plan">Plan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#plan SpringCloudService#plan}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.product">Product</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#product SpringCloudService#product}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#publisher SpringCloudService#publisher}. |

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#plan SpringCloudService#plan}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.product"></a>

```go
Product *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#product SpringCloudService#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#publisher SpringCloudService#publisher}.

---

### SpringCloudServiceNetwork <a name="SpringCloudServiceNetwork" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceNetwork {
	AppSubnetId: *string,
	CidrRanges: *[]*string,
	ServiceRuntimeSubnetId: *string,
	AppNetworkResourceGroup: *string,
	OutboundType: *string,
	ReadTimeoutSeconds: *f64,
	ServiceRuntimeNetworkResourceGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appSubnetId">AppSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#app_subnet_id SpringCloudService#app_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.cidrRanges">CidrRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#cidr_ranges SpringCloudService#cidr_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeSubnetId">ServiceRuntimeSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#service_runtime_subnet_id SpringCloudService#service_runtime_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appNetworkResourceGroup">AppNetworkResourceGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#app_network_resource_group SpringCloudService#app_network_resource_group}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.outboundType">OutboundType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#outbound_type SpringCloudService#outbound_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.readTimeoutSeconds">ReadTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#read_timeout_seconds SpringCloudService#read_timeout_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeNetworkResourceGroup">ServiceRuntimeNetworkResourceGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#service_runtime_network_resource_group SpringCloudService#service_runtime_network_resource_group}. |

---

##### `AppSubnetId`<sup>Required</sup> <a name="AppSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appSubnetId"></a>

```go
AppSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#app_subnet_id SpringCloudService#app_subnet_id}.

---

##### `CidrRanges`<sup>Required</sup> <a name="CidrRanges" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.cidrRanges"></a>

```go
CidrRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#cidr_ranges SpringCloudService#cidr_ranges}.

---

##### `ServiceRuntimeSubnetId`<sup>Required</sup> <a name="ServiceRuntimeSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeSubnetId"></a>

```go
ServiceRuntimeSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#service_runtime_subnet_id SpringCloudService#service_runtime_subnet_id}.

---

##### `AppNetworkResourceGroup`<sup>Optional</sup> <a name="AppNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appNetworkResourceGroup"></a>

```go
AppNetworkResourceGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#app_network_resource_group SpringCloudService#app_network_resource_group}.

---

##### `OutboundType`<sup>Optional</sup> <a name="OutboundType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.outboundType"></a>

```go
OutboundType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#outbound_type SpringCloudService#outbound_type}.

---

##### `ReadTimeoutSeconds`<sup>Optional</sup> <a name="ReadTimeoutSeconds" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.readTimeoutSeconds"></a>

```go
ReadTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#read_timeout_seconds SpringCloudService#read_timeout_seconds}.

---

##### `ServiceRuntimeNetworkResourceGroup`<sup>Optional</sup> <a name="ServiceRuntimeNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeNetworkResourceGroup"></a>

```go
ServiceRuntimeNetworkResourceGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#service_runtime_network_resource_group SpringCloudService#service_runtime_network_resource_group}.

---

### SpringCloudServiceRequiredNetworkTrafficRules <a name="SpringCloudServiceRequiredNetworkTrafficRules" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceRequiredNetworkTrafficRules {

}
```


### SpringCloudServiceTimeouts <a name="SpringCloudServiceTimeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#create SpringCloudService#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#delete SpringCloudService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#read SpringCloudService#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#update SpringCloudService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#create SpringCloudService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#delete SpringCloudService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#read SpringCloudService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#update SpringCloudService#update}.

---

### SpringCloudServiceTrace <a name="SpringCloudServiceTrace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

&springcloudservice.SpringCloudServiceTrace {
	ConnectionString: *string,
	SampleRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#connection_string SpringCloudService#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#sample_rate SpringCloudService#sample_rate}. |

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#connection_string SpringCloudService#connection_string}.

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.sampleRate"></a>

```go
SampleRate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/spring_cloud_service#sample_rate SpringCloudService#sample_rate}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudServiceConfigServerGitSettingHttpBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---


### SpringCloudServiceConfigServerGitSettingOutputReference <a name="SpringCloudServiceConfigServerGitSettingOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceConfigServerGitSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudServiceConfigServerGitSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putHttpBasicAuth">PutHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putRepository">PutRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putSshAuth">PutSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetHttpBasicAuth">ResetHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSearchPaths">ResetSearchPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSshAuth">ResetSshAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpBasicAuth` <a name="PutHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putHttpBasicAuth"></a>

```go
func PutHttpBasicAuth(value SpringCloudServiceConfigServerGitSettingHttpBasicAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putHttpBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---

##### `PutRepository` <a name="PutRepository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putRepository"></a>

```go
func PutRepository(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putRepository.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSshAuth` <a name="PutSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putSshAuth"></a>

```go
func PutSshAuth(value SpringCloudServiceConfigServerGitSettingSshAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putSshAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

---

##### `ResetHttpBasicAuth` <a name="ResetHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetHttpBasicAuth"></a>

```go
func ResetHttpBasicAuth()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetSearchPaths` <a name="ResetSearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSearchPaths"></a>

```go
func ResetSearchPaths()
```

##### `ResetSshAuth` <a name="ResetSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSshAuth"></a>

```go
func ResetSshAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuth">HttpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repository">Repository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList">SpringCloudServiceConfigServerGitSettingRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuth">SshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference">SpringCloudServiceConfigServerGitSettingSshAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuthInput">HttpBasicAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPathsInput">SearchPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuthInput">SshAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPaths">SearchPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpBasicAuth`<sup>Required</sup> <a name="HttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuth"></a>

```go
func HttpBasicAuth() SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference</a>

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repository"></a>

```go
func Repository() SpringCloudServiceConfigServerGitSettingRepositoryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList">SpringCloudServiceConfigServerGitSettingRepositoryList</a>

---

##### `SshAuth`<sup>Required</sup> <a name="SshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuth"></a>

```go
func SshAuth() SpringCloudServiceConfigServerGitSettingSshAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference">SpringCloudServiceConfigServerGitSettingSshAuthOutputReference</a>

---

##### `HttpBasicAuthInput`<sup>Optional</sup> <a name="HttpBasicAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuthInput"></a>

```go
func HttpBasicAuthInput() SpringCloudServiceConfigServerGitSettingHttpBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() interface{}
```

- *Type:* interface{}

---

##### `SearchPathsInput`<sup>Optional</sup> <a name="SearchPathsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPathsInput"></a>

```go
func SearchPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SshAuthInput`<sup>Optional</sup> <a name="SshAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuthInput"></a>

```go
func SshAuthInput() SpringCloudServiceConfigServerGitSettingSshAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `SearchPaths`<sup>Required</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPaths"></a>

```go
func SearchPaths() *[]*string
```

- *Type:* *[]*string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudServiceConfigServerGitSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

---


### SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---


### SpringCloudServiceConfigServerGitSettingRepositoryList <a name="SpringCloudServiceConfigServerGitSettingRepositoryList" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceConfigServerGitSettingRepositoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SpringCloudServiceConfigServerGitSettingRepositoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.get"></a>

```go
func Get(index *f64) SpringCloudServiceConfigServerGitSettingRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpringCloudServiceConfigServerGitSettingRepositoryOutputReference <a name="SpringCloudServiceConfigServerGitSettingRepositoryOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceConfigServerGitSettingRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SpringCloudServiceConfigServerGitSettingRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putHttpBasicAuth">PutHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putSshAuth">PutSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetHttpBasicAuth">ResetHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSearchPaths">ResetSearchPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSshAuth">ResetSshAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpBasicAuth` <a name="PutHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putHttpBasicAuth"></a>

```go
func PutHttpBasicAuth(value SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putHttpBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---

##### `PutSshAuth` <a name="PutSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putSshAuth"></a>

```go
func PutSshAuth(value SpringCloudServiceConfigServerGitSettingRepositorySshAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putSshAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---

##### `ResetHttpBasicAuth` <a name="ResetHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetHttpBasicAuth"></a>

```go
func ResetHttpBasicAuth()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetSearchPaths` <a name="ResetSearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSearchPaths"></a>

```go
func ResetSearchPaths()
```

##### `ResetSshAuth` <a name="ResetSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSshAuth"></a>

```go
func ResetSshAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuth">HttpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuth">SshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuthInput">HttpBasicAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.patternInput">PatternInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPathsInput">SearchPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuthInput">SshAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.pattern">Pattern</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPaths">SearchPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpBasicAuth`<sup>Required</sup> <a name="HttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuth"></a>

```go
func HttpBasicAuth() SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference</a>

---

##### `SshAuth`<sup>Required</sup> <a name="SshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuth"></a>

```go
func SshAuth() SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference</a>

---

##### `HttpBasicAuthInput`<sup>Optional</sup> <a name="HttpBasicAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuthInput"></a>

```go
func HttpBasicAuthInput() SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.patternInput"></a>

```go
func PatternInput() *[]*string
```

- *Type:* *[]*string

---

##### `SearchPathsInput`<sup>Optional</sup> <a name="SearchPathsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPathsInput"></a>

```go
func SearchPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SshAuthInput`<sup>Optional</sup> <a name="SshAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuthInput"></a>

```go
func SshAuthInput() SpringCloudServiceConfigServerGitSettingRepositorySshAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.pattern"></a>

```go
func Pattern() *[]*string
```

- *Type:* *[]*string

---

##### `SearchPaths`<sup>Required</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPaths"></a>

```go
func SearchPaths() *[]*string
```

- *Type:* *[]*string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKey">ResetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKeyAlgorithm">ResetHostKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetStrictHostKeyCheckingEnabled">ResetStrictHostKeyCheckingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostKey` <a name="ResetHostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKey"></a>

```go
func ResetHostKey()
```

##### `ResetHostKeyAlgorithm` <a name="ResetHostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKeyAlgorithm"></a>

```go
func ResetHostKeyAlgorithm()
```

##### `ResetStrictHostKeyCheckingEnabled` <a name="ResetStrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetStrictHostKeyCheckingEnabled"></a>

```go
func ResetStrictHostKeyCheckingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput">HostKeyAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyInput">HostKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabledInput">StrictHostKeyCheckingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKey">HostKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabled">StrictHostKeyCheckingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostKeyAlgorithmInput`<sup>Optional</sup> <a name="HostKeyAlgorithmInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput"></a>

```go
func HostKeyAlgorithmInput() *string
```

- *Type:* *string

---

##### `HostKeyInput`<sup>Optional</sup> <a name="HostKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyInput"></a>

```go
func HostKeyInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `StrictHostKeyCheckingEnabledInput`<sup>Optional</sup> <a name="StrictHostKeyCheckingEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabledInput"></a>

```go
func StrictHostKeyCheckingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostKey`<sup>Required</sup> <a name="HostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKey"></a>

```go
func HostKey() *string
```

- *Type:* *string

---

##### `HostKeyAlgorithm`<sup>Required</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithm"></a>

```go
func HostKeyAlgorithm() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `StrictHostKeyCheckingEnabled`<sup>Required</sup> <a name="StrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabled"></a>

```go
func StrictHostKeyCheckingEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudServiceConfigServerGitSettingRepositorySshAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---


### SpringCloudServiceConfigServerGitSettingSshAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingSshAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceConfigServerGitSettingSshAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudServiceConfigServerGitSettingSshAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKey">ResetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKeyAlgorithm">ResetHostKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetStrictHostKeyCheckingEnabled">ResetStrictHostKeyCheckingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostKey` <a name="ResetHostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKey"></a>

```go
func ResetHostKey()
```

##### `ResetHostKeyAlgorithm` <a name="ResetHostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKeyAlgorithm"></a>

```go
func ResetHostKeyAlgorithm()
```

##### `ResetStrictHostKeyCheckingEnabled` <a name="ResetStrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetStrictHostKeyCheckingEnabled"></a>

```go
func ResetStrictHostKeyCheckingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithmInput">HostKeyAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyInput">HostKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabledInput">StrictHostKeyCheckingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKey">HostKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabled">StrictHostKeyCheckingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostKeyAlgorithmInput`<sup>Optional</sup> <a name="HostKeyAlgorithmInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithmInput"></a>

```go
func HostKeyAlgorithmInput() *string
```

- *Type:* *string

---

##### `HostKeyInput`<sup>Optional</sup> <a name="HostKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyInput"></a>

```go
func HostKeyInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `StrictHostKeyCheckingEnabledInput`<sup>Optional</sup> <a name="StrictHostKeyCheckingEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabledInput"></a>

```go
func StrictHostKeyCheckingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostKey`<sup>Required</sup> <a name="HostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKey"></a>

```go
func HostKey() *string
```

- *Type:* *string

---

##### `HostKeyAlgorithm`<sup>Required</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithm"></a>

```go
func HostKeyAlgorithm() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `StrictHostKeyCheckingEnabled`<sup>Required</sup> <a name="StrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabled"></a>

```go
func StrictHostKeyCheckingEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudServiceConfigServerGitSettingSshAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

---


### SpringCloudServiceContainerRegistryList <a name="SpringCloudServiceContainerRegistryList" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceContainerRegistryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SpringCloudServiceContainerRegistryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.get"></a>

```go
func Get(index *f64) SpringCloudServiceContainerRegistryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpringCloudServiceContainerRegistryOutputReference <a name="SpringCloudServiceContainerRegistryOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceContainerRegistryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SpringCloudServiceContainerRegistryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpringCloudServiceDefaultBuildServiceOutputReference <a name="SpringCloudServiceDefaultBuildServiceOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceDefaultBuildServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudServiceDefaultBuildServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resetContainerRegistryName">ResetContainerRegistryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerRegistryName` <a name="ResetContainerRegistryName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resetContainerRegistryName"></a>

```go
func ResetContainerRegistryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryNameInput">ContainerRegistryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryName">ContainerRegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerRegistryNameInput`<sup>Optional</sup> <a name="ContainerRegistryNameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryNameInput"></a>

```go
func ContainerRegistryNameInput() *string
```

- *Type:* *string

---

##### `ContainerRegistryName`<sup>Required</sup> <a name="ContainerRegistryName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryName"></a>

```go
func ContainerRegistryName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudServiceDefaultBuildService
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

---


### SpringCloudServiceMarketplaceOutputReference <a name="SpringCloudServiceMarketplaceOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceMarketplaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudServiceMarketplaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudServiceMarketplace
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

---


### SpringCloudServiceNetworkOutputReference <a name="SpringCloudServiceNetworkOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudServiceNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetAppNetworkResourceGroup">ResetAppNetworkResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetOutboundType">ResetOutboundType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetReadTimeoutSeconds">ResetReadTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetServiceRuntimeNetworkResourceGroup">ResetServiceRuntimeNetworkResourceGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppNetworkResourceGroup` <a name="ResetAppNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetAppNetworkResourceGroup"></a>

```go
func ResetAppNetworkResourceGroup()
```

##### `ResetOutboundType` <a name="ResetOutboundType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetOutboundType"></a>

```go
func ResetOutboundType()
```

##### `ResetReadTimeoutSeconds` <a name="ResetReadTimeoutSeconds" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetReadTimeoutSeconds"></a>

```go
func ResetReadTimeoutSeconds()
```

##### `ResetServiceRuntimeNetworkResourceGroup` <a name="ResetServiceRuntimeNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetServiceRuntimeNetworkResourceGroup"></a>

```go
func ResetServiceRuntimeNetworkResourceGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroupInput">AppNetworkResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetIdInput">AppSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRangesInput">CidrRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundTypeInput">OutboundTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSecondsInput">ReadTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroupInput">ServiceRuntimeNetworkResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetIdInput">ServiceRuntimeSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroup">AppNetworkResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetId">AppSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRanges">CidrRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundType">OutboundType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSeconds">ReadTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroup">ServiceRuntimeNetworkResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetId">ServiceRuntimeSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppNetworkResourceGroupInput`<sup>Optional</sup> <a name="AppNetworkResourceGroupInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroupInput"></a>

```go
func AppNetworkResourceGroupInput() *string
```

- *Type:* *string

---

##### `AppSubnetIdInput`<sup>Optional</sup> <a name="AppSubnetIdInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetIdInput"></a>

```go
func AppSubnetIdInput() *string
```

- *Type:* *string

---

##### `CidrRangesInput`<sup>Optional</sup> <a name="CidrRangesInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRangesInput"></a>

```go
func CidrRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OutboundTypeInput`<sup>Optional</sup> <a name="OutboundTypeInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundTypeInput"></a>

```go
func OutboundTypeInput() *string
```

- *Type:* *string

---

##### `ReadTimeoutSecondsInput`<sup>Optional</sup> <a name="ReadTimeoutSecondsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSecondsInput"></a>

```go
func ReadTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `ServiceRuntimeNetworkResourceGroupInput`<sup>Optional</sup> <a name="ServiceRuntimeNetworkResourceGroupInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroupInput"></a>

```go
func ServiceRuntimeNetworkResourceGroupInput() *string
```

- *Type:* *string

---

##### `ServiceRuntimeSubnetIdInput`<sup>Optional</sup> <a name="ServiceRuntimeSubnetIdInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetIdInput"></a>

```go
func ServiceRuntimeSubnetIdInput() *string
```

- *Type:* *string

---

##### `AppNetworkResourceGroup`<sup>Required</sup> <a name="AppNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroup"></a>

```go
func AppNetworkResourceGroup() *string
```

- *Type:* *string

---

##### `AppSubnetId`<sup>Required</sup> <a name="AppSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetId"></a>

```go
func AppSubnetId() *string
```

- *Type:* *string

---

##### `CidrRanges`<sup>Required</sup> <a name="CidrRanges" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRanges"></a>

```go
func CidrRanges() *[]*string
```

- *Type:* *[]*string

---

##### `OutboundType`<sup>Required</sup> <a name="OutboundType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundType"></a>

```go
func OutboundType() *string
```

- *Type:* *string

---

##### `ReadTimeoutSeconds`<sup>Required</sup> <a name="ReadTimeoutSeconds" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSeconds"></a>

```go
func ReadTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `ServiceRuntimeNetworkResourceGroup`<sup>Required</sup> <a name="ServiceRuntimeNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroup"></a>

```go
func ServiceRuntimeNetworkResourceGroup() *string
```

- *Type:* *string

---

##### `ServiceRuntimeSubnetId`<sup>Required</sup> <a name="ServiceRuntimeSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetId"></a>

```go
func ServiceRuntimeSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudServiceNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

---


### SpringCloudServiceRequiredNetworkTrafficRulesList <a name="SpringCloudServiceRequiredNetworkTrafficRulesList" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceRequiredNetworkTrafficRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SpringCloudServiceRequiredNetworkTrafficRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.get"></a>

```go
func Get(index *f64) SpringCloudServiceRequiredNetworkTrafficRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SpringCloudServiceRequiredNetworkTrafficRulesOutputReference <a name="SpringCloudServiceRequiredNetworkTrafficRulesOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceRequiredNetworkTrafficRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SpringCloudServiceRequiredNetworkTrafficRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqdns">Fqdns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules">SpringCloudServiceRequiredNetworkTrafficRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqdns"></a>

```go
func Fqdns() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudServiceRequiredNetworkTrafficRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules">SpringCloudServiceRequiredNetworkTrafficRules</a>

---


### SpringCloudServiceTimeoutsOutputReference <a name="SpringCloudServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SpringCloudServiceTraceOutputReference <a name="SpringCloudServiceTraceOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudservice"

springcloudservice.NewSpringCloudServiceTraceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudServiceTraceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetSampleRate"></a>

```go
func ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRateInput"></a>

```go
func SampleRateInput() *f64
```

- *Type:* *f64

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRate"></a>

```go
func SampleRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudServiceTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

---



