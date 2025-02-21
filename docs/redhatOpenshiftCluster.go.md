# `redhatOpenshiftCluster` Submodule <a name="`redhatOpenshiftCluster` Submodule" id="@cdktf/provider-azurerm.redhatOpenshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedhatOpenshiftCluster <a name="RedhatOpenshiftCluster" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster azurerm_redhat_openshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.NewRedhatOpenshiftCluster(scope Construct, id *string, config RedhatOpenshiftClusterConfig) RedhatOpenshiftCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig">RedhatOpenshiftClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig">RedhatOpenshiftClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile">PutApiServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile">PutClusterProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile">PutIngressProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile">PutMainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile">PutNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal">PutServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile">PutWorkerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApiServerProfile` <a name="PutApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile"></a>

```go
func PutApiServerProfile(value RedhatOpenshiftClusterApiServerProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---

##### `PutClusterProfile` <a name="PutClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile"></a>

```go
func PutClusterProfile(value RedhatOpenshiftClusterClusterProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---

##### `PutIngressProfile` <a name="PutIngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile"></a>

```go
func PutIngressProfile(value RedhatOpenshiftClusterIngressProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---

##### `PutMainProfile` <a name="PutMainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile"></a>

```go
func PutMainProfile(value RedhatOpenshiftClusterMainProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---

##### `PutNetworkProfile` <a name="PutNetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile"></a>

```go
func PutNetworkProfile(value RedhatOpenshiftClusterNetworkProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---

##### `PutServicePrincipal` <a name="PutServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal"></a>

```go
func PutServicePrincipal(value RedhatOpenshiftClusterServicePrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts"></a>

```go
func PutTimeouts(value RedhatOpenshiftClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

---

##### `PutWorkerProfile` <a name="PutWorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile"></a>

```go
func PutWorkerProfile(value RedhatOpenshiftClusterWorkerProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedhatOpenshiftCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.RedhatOpenshiftCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.RedhatOpenshiftCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.RedhatOpenshiftCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.RedhatOpenshiftCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RedhatOpenshiftCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedhatOpenshiftCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedhatOpenshiftCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RedhatOpenshiftCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfile">ApiServerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference">RedhatOpenshiftClusterApiServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfile">ClusterProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference">RedhatOpenshiftClusterClusterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.consoleUrl">ConsoleUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfile">IngressProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference">RedhatOpenshiftClusterIngressProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfile">MainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference">RedhatOpenshiftClusterMainProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfile">NetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference">RedhatOpenshiftClusterNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipal">ServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference">RedhatOpenshiftClusterServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference">RedhatOpenshiftClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfile">WorkerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference">RedhatOpenshiftClusterWorkerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfileInput">ApiServerProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfileInput">ClusterProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfileInput">IngressProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfileInput">MainProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfileInput">NetworkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipalInput">ServicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfileInput">WorkerProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiServerProfile`<sup>Required</sup> <a name="ApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfile"></a>

```go
func ApiServerProfile() RedhatOpenshiftClusterApiServerProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference">RedhatOpenshiftClusterApiServerProfileOutputReference</a>

---

##### `ClusterProfile`<sup>Required</sup> <a name="ClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfile"></a>

```go
func ClusterProfile() RedhatOpenshiftClusterClusterProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference">RedhatOpenshiftClusterClusterProfileOutputReference</a>

---

##### `ConsoleUrl`<sup>Required</sup> <a name="ConsoleUrl" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.consoleUrl"></a>

```go
func ConsoleUrl() *string
```

- *Type:* *string

---

##### `IngressProfile`<sup>Required</sup> <a name="IngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfile"></a>

```go
func IngressProfile() RedhatOpenshiftClusterIngressProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference">RedhatOpenshiftClusterIngressProfileOutputReference</a>

---

##### `MainProfile`<sup>Required</sup> <a name="MainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfile"></a>

```go
func MainProfile() RedhatOpenshiftClusterMainProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference">RedhatOpenshiftClusterMainProfileOutputReference</a>

---

##### `NetworkProfile`<sup>Required</sup> <a name="NetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfile"></a>

```go
func NetworkProfile() RedhatOpenshiftClusterNetworkProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference">RedhatOpenshiftClusterNetworkProfileOutputReference</a>

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipal"></a>

```go
func ServicePrincipal() RedhatOpenshiftClusterServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference">RedhatOpenshiftClusterServicePrincipalOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeouts"></a>

```go
func Timeouts() RedhatOpenshiftClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference">RedhatOpenshiftClusterTimeoutsOutputReference</a>

---

##### `WorkerProfile`<sup>Required</sup> <a name="WorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfile"></a>

```go
func WorkerProfile() RedhatOpenshiftClusterWorkerProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference">RedhatOpenshiftClusterWorkerProfileOutputReference</a>

---

##### `ApiServerProfileInput`<sup>Optional</sup> <a name="ApiServerProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfileInput"></a>

```go
func ApiServerProfileInput() RedhatOpenshiftClusterApiServerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---

##### `ClusterProfileInput`<sup>Optional</sup> <a name="ClusterProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfileInput"></a>

```go
func ClusterProfileInput() RedhatOpenshiftClusterClusterProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressProfileInput`<sup>Optional</sup> <a name="IngressProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfileInput"></a>

```go
func IngressProfileInput() RedhatOpenshiftClusterIngressProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MainProfileInput`<sup>Optional</sup> <a name="MainProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfileInput"></a>

```go
func MainProfileInput() RedhatOpenshiftClusterMainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkProfileInput`<sup>Optional</sup> <a name="NetworkProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfileInput"></a>

```go
func NetworkProfileInput() RedhatOpenshiftClusterNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalInput`<sup>Optional</sup> <a name="ServicePrincipalInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipalInput"></a>

```go
func ServicePrincipalInput() RedhatOpenshiftClusterServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerProfileInput`<sup>Optional</sup> <a name="WorkerProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfileInput"></a>

```go
func WorkerProfileInput() RedhatOpenshiftClusterWorkerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedhatOpenshiftClusterApiServerProfile <a name="RedhatOpenshiftClusterApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

&redhatopenshiftcluster.RedhatOpenshiftClusterApiServerProfile {
	Visibility: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.property.visibility">Visibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}. |

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}.

---

### RedhatOpenshiftClusterClusterProfile <a name="RedhatOpenshiftClusterClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

&redhatopenshiftcluster.RedhatOpenshiftClusterClusterProfile {
	Domain: *string,
	Version: *string,
	FipsEnabled: interface{},
	ManagedResourceGroupName: *string,
	PullSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#domain RedhatOpenshiftCluster#domain}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#version RedhatOpenshiftCluster#version}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.fipsEnabled">FipsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#fips_enabled RedhatOpenshiftCluster#fips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#managed_resource_group_name RedhatOpenshiftCluster#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.pullSecret">PullSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#pull_secret RedhatOpenshiftCluster#pull_secret}. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#domain RedhatOpenshiftCluster#domain}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#version RedhatOpenshiftCluster#version}.

---

##### `FipsEnabled`<sup>Optional</sup> <a name="FipsEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.fipsEnabled"></a>

```go
FipsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#fips_enabled RedhatOpenshiftCluster#fips_enabled}.

---

##### `ManagedResourceGroupName`<sup>Optional</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.managedResourceGroupName"></a>

```go
ManagedResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#managed_resource_group_name RedhatOpenshiftCluster#managed_resource_group_name}.

---

##### `PullSecret`<sup>Optional</sup> <a name="PullSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.pullSecret"></a>

```go
PullSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#pull_secret RedhatOpenshiftCluster#pull_secret}.

---

### RedhatOpenshiftClusterConfig <a name="RedhatOpenshiftClusterConfig" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

&redhatopenshiftcluster.RedhatOpenshiftClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiServerProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile,
	ClusterProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile,
	IngressProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile,
	Location: *string,
	MainProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile,
	Name: *string,
	NetworkProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile,
	ResourceGroupName: *string,
	ServicePrincipal: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal,
	WorkerProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.apiServerProfile">ApiServerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | api_server_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.clusterProfile">ClusterProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | cluster_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.ingressProfile">IngressProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | ingress_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.mainProfile">MainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | main_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.networkProfile">NetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.servicePrincipal">ServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.workerProfile">WorkerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | worker_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiServerProfile`<sup>Required</sup> <a name="ApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.apiServerProfile"></a>

```go
ApiServerProfile RedhatOpenshiftClusterApiServerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

api_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#api_server_profile RedhatOpenshiftCluster#api_server_profile}

---

##### `ClusterProfile`<sup>Required</sup> <a name="ClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.clusterProfile"></a>

```go
ClusterProfile RedhatOpenshiftClusterClusterProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

cluster_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#cluster_profile RedhatOpenshiftCluster#cluster_profile}

---

##### `IngressProfile`<sup>Required</sup> <a name="IngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.ingressProfile"></a>

```go
IngressProfile RedhatOpenshiftClusterIngressProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

ingress_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#ingress_profile RedhatOpenshiftCluster#ingress_profile}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}.

---

##### `MainProfile`<sup>Required</sup> <a name="MainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.mainProfile"></a>

```go
MainProfile RedhatOpenshiftClusterMainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

main_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#main_profile RedhatOpenshiftCluster#main_profile}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}.

---

##### `NetworkProfile`<sup>Required</sup> <a name="NetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.networkProfile"></a>

```go
NetworkProfile RedhatOpenshiftClusterNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#network_profile RedhatOpenshiftCluster#network_profile}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}.

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.servicePrincipal"></a>

```go
ServicePrincipal RedhatOpenshiftClusterServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#service_principal RedhatOpenshiftCluster#service_principal}

---

##### `WorkerProfile`<sup>Required</sup> <a name="WorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.workerProfile"></a>

```go
WorkerProfile RedhatOpenshiftClusterWorkerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

worker_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#worker_profile RedhatOpenshiftCluster#worker_profile}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.timeouts"></a>

```go
Timeouts RedhatOpenshiftClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#timeouts RedhatOpenshiftCluster#timeouts}

---

### RedhatOpenshiftClusterIngressProfile <a name="RedhatOpenshiftClusterIngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

&redhatopenshiftcluster.RedhatOpenshiftClusterIngressProfile {
	Visibility: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.property.visibility">Visibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}. |

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}.

---

### RedhatOpenshiftClusterMainProfile <a name="RedhatOpenshiftClusterMainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

&redhatopenshiftcluster.RedhatOpenshiftClusterMainProfile {
	SubnetId: *string,
	VmSize: *string,
	DiskEncryptionSetId: *string,
	EncryptionAtHostEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.vmSize">VmSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.vmSize"></a>

```go
VmSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.diskEncryptionSetId"></a>

```go
DiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.encryptionAtHostEnabled"></a>

```go
EncryptionAtHostEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}.

---

### RedhatOpenshiftClusterNetworkProfile <a name="RedhatOpenshiftClusterNetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

&redhatopenshiftcluster.RedhatOpenshiftClusterNetworkProfile {
	PodCidr: *string,
	ServiceCidr: *string,
	OutboundType: *string,
	PreconfiguredNetworkSecurityGroupEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.podCidr">PodCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#pod_cidr RedhatOpenshiftCluster#pod_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.serviceCidr">ServiceCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#service_cidr RedhatOpenshiftCluster#service_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.outboundType">OutboundType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#outbound_type RedhatOpenshiftCluster#outbound_type}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.preconfiguredNetworkSecurityGroupEnabled">PreconfiguredNetworkSecurityGroupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#preconfigured_network_security_group_enabled RedhatOpenshiftCluster#preconfigured_network_security_group_enabled}. |

---

##### `PodCidr`<sup>Required</sup> <a name="PodCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.podCidr"></a>

```go
PodCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#pod_cidr RedhatOpenshiftCluster#pod_cidr}.

---

##### `ServiceCidr`<sup>Required</sup> <a name="ServiceCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.serviceCidr"></a>

```go
ServiceCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#service_cidr RedhatOpenshiftCluster#service_cidr}.

---

##### `OutboundType`<sup>Optional</sup> <a name="OutboundType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.outboundType"></a>

```go
OutboundType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#outbound_type RedhatOpenshiftCluster#outbound_type}.

---

##### `PreconfiguredNetworkSecurityGroupEnabled`<sup>Optional</sup> <a name="PreconfiguredNetworkSecurityGroupEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.preconfiguredNetworkSecurityGroupEnabled"></a>

```go
PreconfiguredNetworkSecurityGroupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#preconfigured_network_security_group_enabled RedhatOpenshiftCluster#preconfigured_network_security_group_enabled}.

---

### RedhatOpenshiftClusterServicePrincipal <a name="RedhatOpenshiftClusterServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

&redhatopenshiftcluster.RedhatOpenshiftClusterServicePrincipal {
	ClientId: *string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#client_id RedhatOpenshiftCluster#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#client_secret RedhatOpenshiftCluster#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#client_id RedhatOpenshiftCluster#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#client_secret RedhatOpenshiftCluster#client_secret}.

---

### RedhatOpenshiftClusterTimeouts <a name="RedhatOpenshiftClusterTimeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

&redhatopenshiftcluster.RedhatOpenshiftClusterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#create RedhatOpenshiftCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#delete RedhatOpenshiftCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#read RedhatOpenshiftCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#update RedhatOpenshiftCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#create RedhatOpenshiftCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#delete RedhatOpenshiftCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#read RedhatOpenshiftCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#update RedhatOpenshiftCluster#update}.

---

### RedhatOpenshiftClusterWorkerProfile <a name="RedhatOpenshiftClusterWorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

&redhatopenshiftcluster.RedhatOpenshiftClusterWorkerProfile {
	DiskSizeGb: *f64,
	NodeCount: *f64,
	SubnetId: *string,
	VmSize: *string,
	DiskEncryptionSetId: *string,
	EncryptionAtHostEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_size_gb RedhatOpenshiftCluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#node_count RedhatOpenshiftCluster#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.vmSize">VmSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}. |

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_size_gb RedhatOpenshiftCluster#disk_size_gb}.

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#node_count RedhatOpenshiftCluster#node_count}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.vmSize"></a>

```go
VmSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskEncryptionSetId"></a>

```go
DiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.encryptionAtHostEnabled"></a>

```go
EncryptionAtHostEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedhatOpenshiftClusterApiServerProfileOutputReference <a name="RedhatOpenshiftClusterApiServerProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.NewRedhatOpenshiftClusterApiServerProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedhatOpenshiftClusterApiServerProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() RedhatOpenshiftClusterApiServerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---


### RedhatOpenshiftClusterClusterProfileOutputReference <a name="RedhatOpenshiftClusterClusterProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.NewRedhatOpenshiftClusterClusterProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedhatOpenshiftClusterClusterProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetFipsEnabled">ResetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetManagedResourceGroupName">ResetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetPullSecret">ResetPullSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFipsEnabled` <a name="ResetFipsEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetFipsEnabled"></a>

```go
func ResetFipsEnabled()
```

##### `ResetManagedResourceGroupName` <a name="ResetManagedResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetManagedResourceGroupName"></a>

```go
func ResetManagedResourceGroupName()
```

##### `ResetPullSecret` <a name="ResetPullSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetPullSecret"></a>

```go
func ResetPullSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.resourceGroupId">ResourceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabledInput">FipsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupNameInput">ManagedResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecretInput">PullSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabled">FipsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecret">PullSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.resourceGroupId"></a>

```go
func ResourceGroupId() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `FipsEnabledInput`<sup>Optional</sup> <a name="FipsEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabledInput"></a>

```go
func FipsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedResourceGroupNameInput`<sup>Optional</sup> <a name="ManagedResourceGroupNameInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupNameInput"></a>

```go
func ManagedResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `PullSecretInput`<sup>Optional</sup> <a name="PullSecretInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecretInput"></a>

```go
func PullSecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `FipsEnabled`<sup>Required</sup> <a name="FipsEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabled"></a>

```go
func FipsEnabled() interface{}
```

- *Type:* interface{}

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupName"></a>

```go
func ManagedResourceGroupName() *string
```

- *Type:* *string

---

##### `PullSecret`<sup>Required</sup> <a name="PullSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecret"></a>

```go
func PullSecret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() RedhatOpenshiftClusterClusterProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---


### RedhatOpenshiftClusterIngressProfileOutputReference <a name="RedhatOpenshiftClusterIngressProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.NewRedhatOpenshiftClusterIngressProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedhatOpenshiftClusterIngressProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() RedhatOpenshiftClusterIngressProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---


### RedhatOpenshiftClusterMainProfileOutputReference <a name="RedhatOpenshiftClusterMainProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.NewRedhatOpenshiftClusterMainProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedhatOpenshiftClusterMainProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetDiskEncryptionSetId"></a>

```go
func ResetDiskEncryptionSetId()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetEncryptionAtHostEnabled"></a>

```go
func ResetEncryptionAtHostEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSize">VmSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetIdInput"></a>

```go
func DiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabledInput"></a>

```go
func EncryptionAtHostEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSizeInput"></a>

```go
func VmSizeInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetId"></a>

```go
func DiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabled"></a>

```go
func EncryptionAtHostEnabled() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSize"></a>

```go
func VmSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() RedhatOpenshiftClusterMainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---


### RedhatOpenshiftClusterNetworkProfileOutputReference <a name="RedhatOpenshiftClusterNetworkProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.NewRedhatOpenshiftClusterNetworkProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedhatOpenshiftClusterNetworkProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetOutboundType">ResetOutboundType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetPreconfiguredNetworkSecurityGroupEnabled">ResetPreconfiguredNetworkSecurityGroupEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutboundType` <a name="ResetOutboundType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetOutboundType"></a>

```go
func ResetOutboundType()
```

##### `ResetPreconfiguredNetworkSecurityGroupEnabled` <a name="ResetPreconfiguredNetworkSecurityGroupEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetPreconfiguredNetworkSecurityGroupEnabled"></a>

```go
func ResetPreconfiguredNetworkSecurityGroupEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundTypeInput">OutboundTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidrInput">PodCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabledInput">PreconfiguredNetworkSecurityGroupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidrInput">ServiceCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundType">OutboundType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidr">PodCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabled">PreconfiguredNetworkSecurityGroupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidr">ServiceCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutboundTypeInput`<sup>Optional</sup> <a name="OutboundTypeInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundTypeInput"></a>

```go
func OutboundTypeInput() *string
```

- *Type:* *string

---

##### `PodCidrInput`<sup>Optional</sup> <a name="PodCidrInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidrInput"></a>

```go
func PodCidrInput() *string
```

- *Type:* *string

---

##### `PreconfiguredNetworkSecurityGroupEnabledInput`<sup>Optional</sup> <a name="PreconfiguredNetworkSecurityGroupEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabledInput"></a>

```go
func PreconfiguredNetworkSecurityGroupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceCidrInput`<sup>Optional</sup> <a name="ServiceCidrInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidrInput"></a>

```go
func ServiceCidrInput() *string
```

- *Type:* *string

---

##### `OutboundType`<sup>Required</sup> <a name="OutboundType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundType"></a>

```go
func OutboundType() *string
```

- *Type:* *string

---

##### `PodCidr`<sup>Required</sup> <a name="PodCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidr"></a>

```go
func PodCidr() *string
```

- *Type:* *string

---

##### `PreconfiguredNetworkSecurityGroupEnabled`<sup>Required</sup> <a name="PreconfiguredNetworkSecurityGroupEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabled"></a>

```go
func PreconfiguredNetworkSecurityGroupEnabled() interface{}
```

- *Type:* interface{}

---

##### `ServiceCidr`<sup>Required</sup> <a name="ServiceCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidr"></a>

```go
func ServiceCidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() RedhatOpenshiftClusterNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---


### RedhatOpenshiftClusterServicePrincipalOutputReference <a name="RedhatOpenshiftClusterServicePrincipalOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.NewRedhatOpenshiftClusterServicePrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedhatOpenshiftClusterServicePrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() RedhatOpenshiftClusterServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---


### RedhatOpenshiftClusterTimeoutsOutputReference <a name="RedhatOpenshiftClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.NewRedhatOpenshiftClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedhatOpenshiftClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedhatOpenshiftClusterWorkerProfileOutputReference <a name="RedhatOpenshiftClusterWorkerProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/redhatopenshiftcluster"

redhatopenshiftcluster.NewRedhatOpenshiftClusterWorkerProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedhatOpenshiftClusterWorkerProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetDiskEncryptionSetId"></a>

```go
func ResetDiskEncryptionSetId()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetEncryptionAtHostEnabled"></a>

```go
func ResetEncryptionAtHostEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSize">VmSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetIdInput"></a>

```go
func DiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabledInput"></a>

```go
func EncryptionAtHostEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSizeInput"></a>

```go
func VmSizeInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetId"></a>

```go
func DiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabled"></a>

```go
func EncryptionAtHostEnabled() interface{}
```

- *Type:* interface{}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSize"></a>

```go
func VmSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() RedhatOpenshiftClusterWorkerProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---



