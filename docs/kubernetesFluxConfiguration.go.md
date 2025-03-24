# `kubernetesFluxConfiguration` Submodule <a name="`kubernetesFluxConfiguration` Submodule" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFluxConfiguration <a name="KubernetesFluxConfiguration" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration azurerm_kubernetes_flux_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfiguration(scope Construct, id *string, config KubernetesFluxConfigurationConfig) KubernetesFluxConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig">KubernetesFluxConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig">KubernetesFluxConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage">PutBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket">PutBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository">PutGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations">PutKustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBlobStorage">ResetBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetContinuousReconciliationEnabled">ResetContinuousReconciliationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetGitRepository">ResetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlobStorage` <a name="PutBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage"></a>

```go
func PutBlobStorage(value KubernetesFluxConfigurationBlobStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---

##### `PutBucket` <a name="PutBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket"></a>

```go
func PutBucket(value KubernetesFluxConfigurationBucket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---

##### `PutGitRepository` <a name="PutGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository"></a>

```go
func PutGitRepository(value KubernetesFluxConfigurationGitRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---

##### `PutKustomizations` <a name="PutKustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations"></a>

```go
func PutKustomizations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value KubernetesFluxConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

---

##### `ResetBlobStorage` <a name="ResetBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBlobStorage"></a>

```go
func ResetBlobStorage()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetContinuousReconciliationEnabled` <a name="ResetContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetContinuousReconciliationEnabled"></a>

```go
func ResetContinuousReconciliationEnabled()
```

##### `ResetGitRepository` <a name="ResetGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetGitRepository"></a>

```go
func ResetGitRepository()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.KubernetesFluxConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.KubernetesFluxConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.KubernetesFluxConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.KubernetesFluxConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesFluxConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesFluxConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesFluxConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorage">BlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference">KubernetesFluxConfigurationBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucket">Bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference">KubernetesFluxConfigurationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference">KubernetesFluxConfigurationGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizations">Kustomizations</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList">KubernetesFluxConfigurationKustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference">KubernetesFluxConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorageInput">BlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucketInput">BucketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabledInput">ContinuousReconciliationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepositoryInput">GitRepositoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizationsInput">KustomizationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabled">ContinuousReconciliationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlobStorage`<sup>Required</sup> <a name="BlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorage"></a>

```go
func BlobStorage() KubernetesFluxConfigurationBlobStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference">KubernetesFluxConfigurationBlobStorageOutputReference</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucket"></a>

```go
func Bucket() KubernetesFluxConfigurationBucketOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference">KubernetesFluxConfigurationBucketOutputReference</a>

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepository"></a>

```go
func GitRepository() KubernetesFluxConfigurationGitRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference">KubernetesFluxConfigurationGitRepositoryOutputReference</a>

---

##### `Kustomizations`<sup>Required</sup> <a name="Kustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizations"></a>

```go
func Kustomizations() KubernetesFluxConfigurationKustomizationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList">KubernetesFluxConfigurationKustomizationsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeouts"></a>

```go
func Timeouts() KubernetesFluxConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference">KubernetesFluxConfigurationTimeoutsOutputReference</a>

---

##### `BlobStorageInput`<sup>Optional</sup> <a name="BlobStorageInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorageInput"></a>

```go
func BlobStorageInput() KubernetesFluxConfigurationBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucketInput"></a>

```go
func BucketInput() KubernetesFluxConfigurationBucket
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ContinuousReconciliationEnabledInput`<sup>Optional</sup> <a name="ContinuousReconciliationEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabledInput"></a>

```go
func ContinuousReconciliationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GitRepositoryInput`<sup>Optional</sup> <a name="GitRepositoryInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepositoryInput"></a>

```go
func GitRepositoryInput() KubernetesFluxConfigurationGitRepository
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KustomizationsInput`<sup>Optional</sup> <a name="KustomizationsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizationsInput"></a>

```go
func KustomizationsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ContinuousReconciliationEnabled`<sup>Required</sup> <a name="ContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabled"></a>

```go
func ContinuousReconciliationEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFluxConfigurationBlobStorage <a name="KubernetesFluxConfigurationBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

&kubernetesfluxconfiguration.KubernetesFluxConfigurationBlobStorage {
	ContainerId: *string,
	AccountKey: *string,
	LocalAuthReference: *string,
	ManagedIdentity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity,
	SasToken: *string,
	ServicePrincipal: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal,
	SyncIntervalInSeconds: *f64,
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.containerId">ContainerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#container_id KubernetesFluxConfiguration#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.accountKey">AccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#account_key KubernetesFluxConfiguration#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.localAuthReference">LocalAuthReference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.managedIdentity">ManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.sasToken">SasToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#sas_token KubernetesFluxConfiguration#sas_token}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.servicePrincipal">ServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.containerId"></a>

```go
ContainerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#container_id KubernetesFluxConfiguration#container_id}.

---

##### `AccountKey`<sup>Optional</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.accountKey"></a>

```go
AccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#account_key KubernetesFluxConfiguration#account_key}.

---

##### `LocalAuthReference`<sup>Optional</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.localAuthReference"></a>

```go
LocalAuthReference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `ManagedIdentity`<sup>Optional</sup> <a name="ManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.managedIdentity"></a>

```go
ManagedIdentity KubernetesFluxConfigurationBlobStorageManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#managed_identity KubernetesFluxConfiguration#managed_identity}

---

##### `SasToken`<sup>Optional</sup> <a name="SasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.sasToken"></a>

```go
SasToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#sas_token KubernetesFluxConfiguration#sas_token}.

---

##### `ServicePrincipal`<sup>Optional</sup> <a name="ServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.servicePrincipal"></a>

```go
ServicePrincipal KubernetesFluxConfigurationBlobStorageServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#service_principal KubernetesFluxConfiguration#service_principal}

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds"></a>

```go
SyncIntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationBlobStorageManagedIdentity <a name="KubernetesFluxConfigurationBlobStorageManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

&kubernetesfluxconfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity {
	ClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}.

---

### KubernetesFluxConfigurationBlobStorageServicePrincipal <a name="KubernetesFluxConfigurationBlobStorageServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

&kubernetesfluxconfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal {
	ClientId: *string,
	TenantId: *string,
	ClientCertificateBase64: *string,
	ClientCertificatePassword: *string,
	ClientCertificateSendChain: interface{},
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#tenant_id KubernetesFluxConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64">ClientCertificateBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_certificate_base64 KubernetesFluxConfiguration#client_certificate_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_certificate_password KubernetesFluxConfiguration#client_certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain">ClientCertificateSendChain</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_certificate_send_chain KubernetesFluxConfiguration#client_certificate_send_chain}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_secret KubernetesFluxConfiguration#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#tenant_id KubernetesFluxConfiguration#tenant_id}.

---

##### `ClientCertificateBase64`<sup>Optional</sup> <a name="ClientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64"></a>

```go
ClientCertificateBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_certificate_base64 KubernetesFluxConfiguration#client_certificate_base64}.

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword"></a>

```go
ClientCertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_certificate_password KubernetesFluxConfiguration#client_certificate_password}.

---

##### `ClientCertificateSendChain`<sup>Optional</sup> <a name="ClientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain"></a>

```go
ClientCertificateSendChain interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_certificate_send_chain KubernetesFluxConfiguration#client_certificate_send_chain}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#client_secret KubernetesFluxConfiguration#client_secret}.

---

### KubernetesFluxConfigurationBucket <a name="KubernetesFluxConfigurationBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

&kubernetesfluxconfiguration.KubernetesFluxConfigurationBucket {
	BucketName: *string,
	Url: *string,
	AccessKey: *string,
	LocalAuthReference: *string,
	SecretKeyBase64: *string,
	SyncIntervalInSeconds: *f64,
	TimeoutInSeconds: *f64,
	TlsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#bucket_name KubernetesFluxConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.accessKey">AccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#access_key KubernetesFluxConfiguration#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.localAuthReference">LocalAuthReference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.secretKeyBase64">SecretKeyBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#secret_key_base64 KubernetesFluxConfiguration#secret_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.tlsEnabled">TlsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#tls_enabled KubernetesFluxConfiguration#tls_enabled}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#bucket_name KubernetesFluxConfiguration#bucket_name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}.

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.accessKey"></a>

```go
AccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#access_key KubernetesFluxConfiguration#access_key}.

---

##### `LocalAuthReference`<sup>Optional</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.localAuthReference"></a>

```go
LocalAuthReference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `SecretKeyBase64`<sup>Optional</sup> <a name="SecretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.secretKeyBase64"></a>

```go
SecretKeyBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#secret_key_base64 KubernetesFluxConfiguration#secret_key_base64}.

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.syncIntervalInSeconds"></a>

```go
SyncIntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `TlsEnabled`<sup>Optional</sup> <a name="TlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.tlsEnabled"></a>

```go
TlsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#tls_enabled KubernetesFluxConfiguration#tls_enabled}.

---

### KubernetesFluxConfigurationConfig <a name="KubernetesFluxConfigurationConfig" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

&kubernetesfluxconfiguration.KubernetesFluxConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Kustomizations: interface{},
	Name: *string,
	Namespace: *string,
	BlobStorage: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage,
	Bucket: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket,
	ContinuousReconciliationEnabled: interface{},
	GitRepository: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository,
	Id: *string,
	Scope: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.kustomizations">Kustomizations</a></code> | <code>interface{}</code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.blobStorage">BlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.bucket">Bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled">ContinuousReconciliationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}.

---

##### `Kustomizations`<sup>Required</sup> <a name="Kustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.kustomizations"></a>

```go
Kustomizations interface{}
```

- *Type:* interface{}

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#kustomizations KubernetesFluxConfiguration#kustomizations}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}.

---

##### `BlobStorage`<sup>Optional</sup> <a name="BlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.blobStorage"></a>

```go
BlobStorage KubernetesFluxConfigurationBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#blob_storage KubernetesFluxConfiguration#blob_storage}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.bucket"></a>

```go
Bucket KubernetesFluxConfigurationBucket
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#bucket KubernetesFluxConfiguration#bucket}

---

##### `ContinuousReconciliationEnabled`<sup>Optional</sup> <a name="ContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled"></a>

```go
ContinuousReconciliationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `GitRepository`<sup>Optional</sup> <a name="GitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.gitRepository"></a>

```go
GitRepository KubernetesFluxConfigurationGitRepository
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#git_repository KubernetesFluxConfiguration#git_repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.timeouts"></a>

```go
Timeouts KubernetesFluxConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#timeouts KubernetesFluxConfiguration#timeouts}

---

### KubernetesFluxConfigurationGitRepository <a name="KubernetesFluxConfigurationGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

&kubernetesfluxconfiguration.KubernetesFluxConfigurationGitRepository {
	ReferenceType: *string,
	ReferenceValue: *string,
	Url: *string,
	HttpsCaCertBase64: *string,
	HttpsKeyBase64: *string,
	HttpsUser: *string,
	LocalAuthReference: *string,
	SshKnownHostsBase64: *string,
	SshPrivateKeyBase64: *string,
	SyncIntervalInSeconds: *f64,
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceType">ReferenceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#reference_type KubernetesFluxConfiguration#reference_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceValue">ReferenceValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#reference_value KubernetesFluxConfiguration#reference_value}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64">HttpsCaCertBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#https_ca_cert_base64 KubernetesFluxConfiguration#https_ca_cert_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsKeyBase64">HttpsKeyBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#https_key_base64 KubernetesFluxConfiguration#https_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsUser">HttpsUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#https_user KubernetesFluxConfiguration#https_user}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.localAuthReference">LocalAuthReference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64">SshKnownHostsBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#ssh_known_hosts_base64 KubernetesFluxConfiguration#ssh_known_hosts_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64">SshPrivateKeyBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#ssh_private_key_base64 KubernetesFluxConfiguration#ssh_private_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `ReferenceType`<sup>Required</sup> <a name="ReferenceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceType"></a>

```go
ReferenceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#reference_type KubernetesFluxConfiguration#reference_type}.

---

##### `ReferenceValue`<sup>Required</sup> <a name="ReferenceValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceValue"></a>

```go
ReferenceValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#reference_value KubernetesFluxConfiguration#reference_value}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}.

---

##### `HttpsCaCertBase64`<sup>Optional</sup> <a name="HttpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64"></a>

```go
HttpsCaCertBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#https_ca_cert_base64 KubernetesFluxConfiguration#https_ca_cert_base64}.

---

##### `HttpsKeyBase64`<sup>Optional</sup> <a name="HttpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsKeyBase64"></a>

```go
HttpsKeyBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#https_key_base64 KubernetesFluxConfiguration#https_key_base64}.

---

##### `HttpsUser`<sup>Optional</sup> <a name="HttpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsUser"></a>

```go
HttpsUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#https_user KubernetesFluxConfiguration#https_user}.

---

##### `LocalAuthReference`<sup>Optional</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.localAuthReference"></a>

```go
LocalAuthReference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `SshKnownHostsBase64`<sup>Optional</sup> <a name="SshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64"></a>

```go
SshKnownHostsBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#ssh_known_hosts_base64 KubernetesFluxConfiguration#ssh_known_hosts_base64}.

---

##### `SshPrivateKeyBase64`<sup>Optional</sup> <a name="SshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64"></a>

```go
SshPrivateKeyBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#ssh_private_key_base64 KubernetesFluxConfiguration#ssh_private_key_base64}.

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds"></a>

```go
SyncIntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationKustomizations <a name="KubernetesFluxConfigurationKustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

&kubernetesfluxconfiguration.KubernetesFluxConfigurationKustomizations {
	Name: *string,
	DependsOn: *[]*string,
	GarbageCollectionEnabled: interface{},
	Path: *string,
	PostBuild: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild,
	RecreatingEnabled: interface{},
	RetryIntervalInSeconds: *f64,
	SyncIntervalInSeconds: *f64,
	TimeoutInSeconds: *f64,
	Wait: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#depends_on KubernetesFluxConfiguration#depends_on}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled">GarbageCollectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#garbage_collection_enabled KubernetesFluxConfiguration#garbage_collection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#path KubernetesFluxConfiguration#path}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.postBuild">PostBuild</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild">KubernetesFluxConfigurationKustomizationsPostBuild</a></code> | post_build block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.recreatingEnabled">RecreatingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#recreating_enabled KubernetesFluxConfiguration#recreating_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds">RetryIntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#retry_interval_in_seconds KubernetesFluxConfiguration#retry_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.wait">Wait</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#wait KubernetesFluxConfiguration#wait}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}.

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.dependsOn"></a>

```go
DependsOn *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#depends_on KubernetesFluxConfiguration#depends_on}.

---

##### `GarbageCollectionEnabled`<sup>Optional</sup> <a name="GarbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled"></a>

```go
GarbageCollectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#garbage_collection_enabled KubernetesFluxConfiguration#garbage_collection_enabled}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#path KubernetesFluxConfiguration#path}.

---

##### `PostBuild`<sup>Optional</sup> <a name="PostBuild" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.postBuild"></a>

```go
PostBuild KubernetesFluxConfigurationKustomizationsPostBuild
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild">KubernetesFluxConfigurationKustomizationsPostBuild</a>

post_build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#post_build KubernetesFluxConfiguration#post_build}

---

##### `RecreatingEnabled`<sup>Optional</sup> <a name="RecreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.recreatingEnabled"></a>

```go
RecreatingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#recreating_enabled KubernetesFluxConfiguration#recreating_enabled}.

---

##### `RetryIntervalInSeconds`<sup>Optional</sup> <a name="RetryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds"></a>

```go
RetryIntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#retry_interval_in_seconds KubernetesFluxConfiguration#retry_interval_in_seconds}.

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds"></a>

```go
SyncIntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.wait"></a>

```go
Wait interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#wait KubernetesFluxConfiguration#wait}.

---

### KubernetesFluxConfigurationKustomizationsPostBuild <a name="KubernetesFluxConfigurationKustomizationsPostBuild" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

&kubernetesfluxconfiguration.KubernetesFluxConfigurationKustomizationsPostBuild {
	Substitute: *map[string]*string,
	SubstituteFrom: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild.property.substitute">Substitute</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#substitute KubernetesFluxConfiguration#substitute}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild.property.substituteFrom">SubstituteFrom</a></code> | <code>interface{}</code> | substitute_from block. |

---

##### `Substitute`<sup>Optional</sup> <a name="Substitute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild.property.substitute"></a>

```go
Substitute *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#substitute KubernetesFluxConfiguration#substitute}.

---

##### `SubstituteFrom`<sup>Optional</sup> <a name="SubstituteFrom" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild.property.substituteFrom"></a>

```go
SubstituteFrom interface{}
```

- *Type:* interface{}

substitute_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#substitute_from KubernetesFluxConfiguration#substitute_from}

---

### KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom <a name="KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

&kubernetesfluxconfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom {
	Kind: *string,
	Name: *string,
	Optional: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#kind KubernetesFluxConfiguration#kind}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom.property.optional">Optional</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#optional KubernetesFluxConfiguration#optional}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#kind KubernetesFluxConfiguration#kind}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}.

---

##### `Optional`<sup>Optional</sup> <a name="Optional" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFrom.property.optional"></a>

```go
Optional interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#optional KubernetesFluxConfiguration#optional}.

---

### KubernetesFluxConfigurationTimeouts <a name="KubernetesFluxConfigurationTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

&kubernetesfluxconfiguration.KubernetesFluxConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#create KubernetesFluxConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#delete KubernetesFluxConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#read KubernetesFluxConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#update KubernetesFluxConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#create KubernetesFluxConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#delete KubernetesFluxConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#read KubernetesFluxConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/kubernetes_flux_configuration#update KubernetesFluxConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference <a name="KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesFluxConfigurationBlobStorageManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---


### KubernetesFluxConfigurationBlobStorageOutputReference <a name="KubernetesFluxConfigurationBlobStorageOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationBlobStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFluxConfigurationBlobStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity">PutManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal">PutServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey">ResetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference">ResetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetManagedIdentity">ResetManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken">ResetSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal">ResetServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedIdentity` <a name="PutManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity"></a>

```go
func PutManagedIdentity(value KubernetesFluxConfigurationBlobStorageManagedIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---

##### `PutServicePrincipal` <a name="PutServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal"></a>

```go
func PutServicePrincipal(value KubernetesFluxConfigurationBlobStorageServicePrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `ResetAccountKey` <a name="ResetAccountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey"></a>

```go
func ResetAccountKey()
```

##### `ResetLocalAuthReference` <a name="ResetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference"></a>

```go
func ResetLocalAuthReference()
```

##### `ResetManagedIdentity` <a name="ResetManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetManagedIdentity"></a>

```go
func ResetManagedIdentity()
```

##### `ResetSasToken` <a name="ResetSasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken"></a>

```go
func ResetSasToken()
```

##### `ResetServicePrincipal` <a name="ResetServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal"></a>

```go
func ResetServicePrincipal()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds"></a>

```go
func ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentity">ManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference">KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal">ServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput">AccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput">ContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput">LocalAuthReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentityInput">ManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput">SasTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput">ServicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey">AccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerId">ContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference">LocalAuthReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken">SasToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedIdentity`<sup>Required</sup> <a name="ManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentity"></a>

```go
func ManagedIdentity() KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference">KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference</a>

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal"></a>

```go
func ServicePrincipal() KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a>

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput"></a>

```go
func AccountKeyInput() *string
```

- *Type:* *string

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput"></a>

```go
func ContainerIdInput() *string
```

- *Type:* *string

---

##### `LocalAuthReferenceInput`<sup>Optional</sup> <a name="LocalAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput"></a>

```go
func LocalAuthReferenceInput() *string
```

- *Type:* *string

---

##### `ManagedIdentityInput`<sup>Optional</sup> <a name="ManagedIdentityInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentityInput"></a>

```go
func ManagedIdentityInput() KubernetesFluxConfigurationBlobStorageManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput"></a>

```go
func SasTokenInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalInput`<sup>Optional</sup> <a name="ServicePrincipalInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput"></a>

```go
func ServicePrincipalInput() KubernetesFluxConfigurationBlobStorageServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput"></a>

```go
func SyncIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey"></a>

```go
func AccountKey() *string
```

- *Type:* *string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerId"></a>

```go
func ContainerId() *string
```

- *Type:* *string

---

##### `LocalAuthReference`<sup>Required</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference"></a>

```go
func LocalAuthReference() *string
```

- *Type:* *string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken"></a>

```go
func SasToken() *string
```

- *Type:* *string

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds"></a>

```go
func SyncIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesFluxConfigurationBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---


### KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference <a name="KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64">ResetClientCertificateBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword">ResetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain">ResetClientCertificateSendChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCertificateBase64` <a name="ResetClientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64"></a>

```go
func ResetClientCertificateBase64()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword"></a>

```go
func ResetClientCertificatePassword()
```

##### `ResetClientCertificateSendChain` <a name="ResetClientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain"></a>

```go
func ResetClientCertificateSendChain()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input">ClientCertificateBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput">ClientCertificateSendChainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64">ClientCertificateBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain">ClientCertificateSendChain</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientCertificateBase64Input`<sup>Optional</sup> <a name="ClientCertificateBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input"></a>

```go
func ClientCertificateBase64Input() *string
```

- *Type:* *string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput"></a>

```go
func ClientCertificatePasswordInput() *string
```

- *Type:* *string

---

##### `ClientCertificateSendChainInput`<sup>Optional</sup> <a name="ClientCertificateSendChainInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput"></a>

```go
func ClientCertificateSendChainInput() interface{}
```

- *Type:* interface{}

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ClientCertificateBase64`<sup>Required</sup> <a name="ClientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64"></a>

```go
func ClientCertificateBase64() *string
```

- *Type:* *string

---

##### `ClientCertificatePassword`<sup>Required</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword"></a>

```go
func ClientCertificatePassword() *string
```

- *Type:* *string

---

##### `ClientCertificateSendChain`<sup>Required</sup> <a name="ClientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain"></a>

```go
func ClientCertificateSendChain() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesFluxConfigurationBlobStorageServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---


### KubernetesFluxConfigurationBucketOutputReference <a name="KubernetesFluxConfigurationBucketOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationBucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFluxConfigurationBucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference">ResetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64">ResetSecretKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled">ResetTlsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetAccessKey"></a>

```go
func ResetAccessKey()
```

##### `ResetLocalAuthReference` <a name="ResetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference"></a>

```go
func ResetLocalAuthReference()
```

##### `ResetSecretKeyBase64` <a name="ResetSecretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64"></a>

```go
func ResetSecretKeyBase64()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds"></a>

```go
func ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```

##### `ResetTlsEnabled` <a name="ResetTlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled"></a>

```go
func ResetTlsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput">LocalAuthReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input">SecretKeyBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput">TlsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReference">LocalAuthReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64">SecretKeyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled">TlsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput"></a>

```go
func AccessKeyInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `LocalAuthReferenceInput`<sup>Optional</sup> <a name="LocalAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput"></a>

```go
func LocalAuthReferenceInput() *string
```

- *Type:* *string

---

##### `SecretKeyBase64Input`<sup>Optional</sup> <a name="SecretKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input"></a>

```go
func SecretKeyBase64Input() *string
```

- *Type:* *string

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput"></a>

```go
func SyncIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TlsEnabledInput`<sup>Optional</sup> <a name="TlsEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput"></a>

```go
func TlsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `LocalAuthReference`<sup>Required</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReference"></a>

```go
func LocalAuthReference() *string
```

- *Type:* *string

---

##### `SecretKeyBase64`<sup>Required</sup> <a name="SecretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64"></a>

```go
func SecretKeyBase64() *string
```

- *Type:* *string

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds"></a>

```go
func SyncIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `TlsEnabled`<sup>Required</sup> <a name="TlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled"></a>

```go
func TlsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesFluxConfigurationBucket
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---


### KubernetesFluxConfigurationGitRepositoryOutputReference <a name="KubernetesFluxConfigurationGitRepositoryOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationGitRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFluxConfigurationGitRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64">ResetHttpsCaCertBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64">ResetHttpsKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser">ResetHttpsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference">ResetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64">ResetSshKnownHostsBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64">ResetSshPrivateKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpsCaCertBase64` <a name="ResetHttpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64"></a>

```go
func ResetHttpsCaCertBase64()
```

##### `ResetHttpsKeyBase64` <a name="ResetHttpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64"></a>

```go
func ResetHttpsKeyBase64()
```

##### `ResetHttpsUser` <a name="ResetHttpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser"></a>

```go
func ResetHttpsUser()
```

##### `ResetLocalAuthReference` <a name="ResetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference"></a>

```go
func ResetLocalAuthReference()
```

##### `ResetSshKnownHostsBase64` <a name="ResetSshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64"></a>

```go
func ResetSshKnownHostsBase64()
```

##### `ResetSshPrivateKeyBase64` <a name="ResetSshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64"></a>

```go
func ResetSshPrivateKeyBase64()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds"></a>

```go
func ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input">HttpsCaCertBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input">HttpsKeyBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput">HttpsUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput">LocalAuthReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput">ReferenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput">ReferenceValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input">SshKnownHostsBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input">SshPrivateKeyBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64">HttpsCaCertBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64">HttpsKeyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser">HttpsUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference">LocalAuthReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType">ReferenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue">ReferenceValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64">SshKnownHostsBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64">SshPrivateKeyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpsCaCertBase64Input`<sup>Optional</sup> <a name="HttpsCaCertBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input"></a>

```go
func HttpsCaCertBase64Input() *string
```

- *Type:* *string

---

##### `HttpsKeyBase64Input`<sup>Optional</sup> <a name="HttpsKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input"></a>

```go
func HttpsKeyBase64Input() *string
```

- *Type:* *string

---

##### `HttpsUserInput`<sup>Optional</sup> <a name="HttpsUserInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput"></a>

```go
func HttpsUserInput() *string
```

- *Type:* *string

---

##### `LocalAuthReferenceInput`<sup>Optional</sup> <a name="LocalAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput"></a>

```go
func LocalAuthReferenceInput() *string
```

- *Type:* *string

---

##### `ReferenceTypeInput`<sup>Optional</sup> <a name="ReferenceTypeInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput"></a>

```go
func ReferenceTypeInput() *string
```

- *Type:* *string

---

##### `ReferenceValueInput`<sup>Optional</sup> <a name="ReferenceValueInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput"></a>

```go
func ReferenceValueInput() *string
```

- *Type:* *string

---

##### `SshKnownHostsBase64Input`<sup>Optional</sup> <a name="SshKnownHostsBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input"></a>

```go
func SshKnownHostsBase64Input() *string
```

- *Type:* *string

---

##### `SshPrivateKeyBase64Input`<sup>Optional</sup> <a name="SshPrivateKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input"></a>

```go
func SshPrivateKeyBase64Input() *string
```

- *Type:* *string

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput"></a>

```go
func SyncIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `HttpsCaCertBase64`<sup>Required</sup> <a name="HttpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64"></a>

```go
func HttpsCaCertBase64() *string
```

- *Type:* *string

---

##### `HttpsKeyBase64`<sup>Required</sup> <a name="HttpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64"></a>

```go
func HttpsKeyBase64() *string
```

- *Type:* *string

---

##### `HttpsUser`<sup>Required</sup> <a name="HttpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser"></a>

```go
func HttpsUser() *string
```

- *Type:* *string

---

##### `LocalAuthReference`<sup>Required</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference"></a>

```go
func LocalAuthReference() *string
```

- *Type:* *string

---

##### `ReferenceType`<sup>Required</sup> <a name="ReferenceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType"></a>

```go
func ReferenceType() *string
```

- *Type:* *string

---

##### `ReferenceValue`<sup>Required</sup> <a name="ReferenceValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue"></a>

```go
func ReferenceValue() *string
```

- *Type:* *string

---

##### `SshKnownHostsBase64`<sup>Required</sup> <a name="SshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64"></a>

```go
func SshKnownHostsBase64() *string
```

- *Type:* *string

---

##### `SshPrivateKeyBase64`<sup>Required</sup> <a name="SshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64"></a>

```go
func SshPrivateKeyBase64() *string
```

- *Type:* *string

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds"></a>

```go
func SyncIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesFluxConfigurationGitRepository
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---


### KubernetesFluxConfigurationKustomizationsList <a name="KubernetesFluxConfigurationKustomizationsList" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationKustomizationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesFluxConfigurationKustomizationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get"></a>

```go
func Get(index *f64) KubernetesFluxConfigurationKustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFluxConfigurationKustomizationsOutputReference <a name="KubernetesFluxConfigurationKustomizationsOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationKustomizationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesFluxConfigurationKustomizationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.putPostBuild">PutPostBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled">ResetGarbageCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetPostBuild">ResetPostBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled">ResetRecreatingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds">ResetRetryIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetWait">ResetWait</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostBuild` <a name="PutPostBuild" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.putPostBuild"></a>

```go
func PutPostBuild(value KubernetesFluxConfigurationKustomizationsPostBuild)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.putPostBuild.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild">KubernetesFluxConfigurationKustomizationsPostBuild</a>

---

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn"></a>

```go
func ResetDependsOn()
```

##### `ResetGarbageCollectionEnabled` <a name="ResetGarbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled"></a>

```go
func ResetGarbageCollectionEnabled()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPostBuild` <a name="ResetPostBuild" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetPostBuild"></a>

```go
func ResetPostBuild()
```

##### `ResetRecreatingEnabled` <a name="ResetRecreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled"></a>

```go
func ResetRecreatingEnabled()
```

##### `ResetRetryIntervalInSeconds` <a name="ResetRetryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds"></a>

```go
func ResetRetryIntervalInSeconds()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds"></a>

```go
func ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetWait"></a>

```go
func ResetWait()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.postBuild">PostBuild</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference">KubernetesFluxConfigurationKustomizationsPostBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput">GarbageCollectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.postBuildInput">PostBuildInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild">KubernetesFluxConfigurationKustomizationsPostBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput">RecreatingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput">RetryIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.waitInput">WaitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled">GarbageCollectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled">RecreatingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds">RetryIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.wait">Wait</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostBuild`<sup>Required</sup> <a name="PostBuild" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.postBuild"></a>

```go
func PostBuild() KubernetesFluxConfigurationKustomizationsPostBuildOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference">KubernetesFluxConfigurationKustomizationsPostBuildOutputReference</a>

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput"></a>

```go
func DependsOnInput() *[]*string
```

- *Type:* *[]*string

---

##### `GarbageCollectionEnabledInput`<sup>Optional</sup> <a name="GarbageCollectionEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput"></a>

```go
func GarbageCollectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PostBuildInput`<sup>Optional</sup> <a name="PostBuildInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.postBuildInput"></a>

```go
func PostBuildInput() KubernetesFluxConfigurationKustomizationsPostBuild
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild">KubernetesFluxConfigurationKustomizationsPostBuild</a>

---

##### `RecreatingEnabledInput`<sup>Optional</sup> <a name="RecreatingEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput"></a>

```go
func RecreatingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RetryIntervalInSecondsInput`<sup>Optional</sup> <a name="RetryIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput"></a>

```go
func RetryIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput"></a>

```go
func SyncIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.waitInput"></a>

```go
func WaitInput() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `GarbageCollectionEnabled`<sup>Required</sup> <a name="GarbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled"></a>

```go
func GarbageCollectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RecreatingEnabled`<sup>Required</sup> <a name="RecreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled"></a>

```go
func RecreatingEnabled() interface{}
```

- *Type:* interface{}

---

##### `RetryIntervalInSeconds`<sup>Required</sup> <a name="RetryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds"></a>

```go
func RetryIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds"></a>

```go
func SyncIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.wait"></a>

```go
func Wait() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFluxConfigurationKustomizationsPostBuildOutputReference <a name="KubernetesFluxConfigurationKustomizationsPostBuildOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationKustomizationsPostBuildOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFluxConfigurationKustomizationsPostBuildOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.putSubstituteFrom">PutSubstituteFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.resetSubstitute">ResetSubstitute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.resetSubstituteFrom">ResetSubstituteFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubstituteFrom` <a name="PutSubstituteFrom" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.putSubstituteFrom"></a>

```go
func PutSubstituteFrom(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.putSubstituteFrom.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSubstitute` <a name="ResetSubstitute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.resetSubstitute"></a>

```go
func ResetSubstitute()
```

##### `ResetSubstituteFrom` <a name="ResetSubstituteFrom" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.resetSubstituteFrom"></a>

```go
func ResetSubstituteFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.substituteFrom">SubstituteFrom</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList">KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.substituteFromInput">SubstituteFromInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.substituteInput">SubstituteInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.substitute">Substitute</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild">KubernetesFluxConfigurationKustomizationsPostBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubstituteFrom`<sup>Required</sup> <a name="SubstituteFrom" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.substituteFrom"></a>

```go
func SubstituteFrom() KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList">KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList</a>

---

##### `SubstituteFromInput`<sup>Optional</sup> <a name="SubstituteFromInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.substituteFromInput"></a>

```go
func SubstituteFromInput() interface{}
```

- *Type:* interface{}

---

##### `SubstituteInput`<sup>Optional</sup> <a name="SubstituteInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.substituteInput"></a>

```go
func SubstituteInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Substitute`<sup>Required</sup> <a name="Substitute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.substitute"></a>

```go
func Substitute() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesFluxConfigurationKustomizationsPostBuild
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuild">KubernetesFluxConfigurationKustomizationsPostBuild</a>

---


### KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList <a name="KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.get"></a>

```go
func Get(index *f64) KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference <a name="KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.resetOptional">ResetOptional</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptional` <a name="ResetOptional" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.resetOptional"></a>

```go
func ResetOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.optionalInput">OptionalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.optional">Optional</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionalInput`<sup>Optional</sup> <a name="OptionalInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.optionalInput"></a>

```go
func OptionalInput() interface{}
```

- *Type:* interface{}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.optional"></a>

```go
func Optional() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsPostBuildSubstituteFromOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesFluxConfigurationTimeoutsOutputReference <a name="KubernetesFluxConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/kubernetesfluxconfiguration"

kubernetesfluxconfiguration.NewKubernetesFluxConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesFluxConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



