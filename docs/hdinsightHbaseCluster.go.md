# `hdinsightHbaseCluster` Submodule <a name="`hdinsightHbaseCluster` Submodule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HdinsightHbaseCluster <a name="HdinsightHbaseCluster" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster azurerm_hdinsight_hbase_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseCluster(scope Construct, id *string, config HdinsightHbaseClusterConfig) HdinsightHbaseCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig">HdinsightHbaseClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig">HdinsightHbaseClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComponentVersion">PutComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComputeIsolation">PutComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putDiskEncryption">PutDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putExtension">PutExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putGateway">PutGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores">PutMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMonitor">PutMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile">PutSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccount">PutStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2">PutStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetComputeIsolation">ResetComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetDiskEncryption">ResetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMetastores">ResetMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetSecurityProfile">ResetSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccount">ResetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccountGen2">ResetStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponentVersion` <a name="PutComponentVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComponentVersion"></a>

```go
func PutComponentVersion(value HdinsightHbaseClusterComponentVersion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComponentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

---

##### `PutComputeIsolation` <a name="PutComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComputeIsolation"></a>

```go
func PutComputeIsolation(value HdinsightHbaseClusterComputeIsolation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putComputeIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

---

##### `PutDiskEncryption` <a name="PutDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putDiskEncryption"></a>

```go
func PutDiskEncryption(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putDiskEncryption.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putExtension"></a>

```go
func PutExtension(value HdinsightHbaseClusterExtension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putExtension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

---

##### `PutGateway` <a name="PutGateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putGateway"></a>

```go
func PutGateway(value HdinsightHbaseClusterGateway)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

---

##### `PutMetastores` <a name="PutMetastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores"></a>

```go
func PutMetastores(value HdinsightHbaseClusterMetastores)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMetastores.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

---

##### `PutMonitor` <a name="PutMonitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMonitor"></a>

```go
func PutMonitor(value HdinsightHbaseClusterMonitor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putNetwork"></a>

```go
func PutNetwork(value HdinsightHbaseClusterNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

---

##### `PutRoles` <a name="PutRoles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles"></a>

```go
func PutRoles(value HdinsightHbaseClusterRoles)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putRoles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

---

##### `PutSecurityProfile` <a name="PutSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile"></a>

```go
func PutSecurityProfile(value HdinsightHbaseClusterSecurityProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putSecurityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

---

##### `PutStorageAccount` <a name="PutStorageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccount"></a>

```go
func PutStorageAccount(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccount.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorageAccountGen2` <a name="PutStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2"></a>

```go
func PutStorageAccountGen2(value HdinsightHbaseClusterStorageAccountGen2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putStorageAccountGen2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts"></a>

```go
func PutTimeouts(value HdinsightHbaseClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>

---

##### `ResetComputeIsolation` <a name="ResetComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetComputeIsolation"></a>

```go
func ResetComputeIsolation()
```

##### `ResetDiskEncryption` <a name="ResetDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetDiskEncryption"></a>

```go
func ResetDiskEncryption()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetExtension"></a>

```go
func ResetExtension()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetMetastores` <a name="ResetMetastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMetastores"></a>

```go
func ResetMetastores()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetMonitor"></a>

```go
func ResetMonitor()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetSecurityProfile` <a name="ResetSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetSecurityProfile"></a>

```go
func ResetSecurityProfile()
```

##### `ResetStorageAccount` <a name="ResetStorageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccount"></a>

```go
func ResetStorageAccount()
```

##### `ResetStorageAccountGen2` <a name="ResetStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetStorageAccountGen2"></a>

```go
func ResetStorageAccountGen2()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.resetTlsMinVersion"></a>

```go
func ResetTlsMinVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HdinsightHbaseCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.HdinsightHbaseCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.HdinsightHbaseCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.HdinsightHbaseCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.HdinsightHbaseCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HdinsightHbaseCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HdinsightHbaseCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HdinsightHbaseCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HdinsightHbaseCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersion">ComponentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference">HdinsightHbaseClusterComponentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolation">ComputeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference">HdinsightHbaseClusterComputeIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryption">DiskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList">HdinsightHbaseClusterDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference">HdinsightHbaseClusterExtensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference">HdinsightHbaseClusterGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.httpsEndpoint">HttpsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastores">Metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference">HdinsightHbaseClusterMetastoresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference">HdinsightHbaseClusterMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference">HdinsightHbaseClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference">HdinsightHbaseClusterRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfile">SecurityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference">HdinsightHbaseClusterSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.sshEndpoint">SshEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList">HdinsightHbaseClusterStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2">StorageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference">HdinsightHbaseClusterStorageAccountGen2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference">HdinsightHbaseClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersionInput">ComponentVersionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolationInput">ComputeIsolationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryptionInput">DiskEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extensionInput">ExtensionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gatewayInput">GatewayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastoresInput">MetastoresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitorInput">MonitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.rolesInput">RolesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfileInput">SecurityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2Input">StorageAccountGen2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountInput">StorageAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersion"></a>

```go
func ComponentVersion() HdinsightHbaseClusterComponentVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference">HdinsightHbaseClusterComponentVersionOutputReference</a>

---

##### `ComputeIsolation`<sup>Required</sup> <a name="ComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolation"></a>

```go
func ComputeIsolation() HdinsightHbaseClusterComputeIsolationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference">HdinsightHbaseClusterComputeIsolationOutputReference</a>

---

##### `DiskEncryption`<sup>Required</sup> <a name="DiskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryption"></a>

```go
func DiskEncryption() HdinsightHbaseClusterDiskEncryptionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList">HdinsightHbaseClusterDiskEncryptionList</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extension"></a>

```go
func Extension() HdinsightHbaseClusterExtensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference">HdinsightHbaseClusterExtensionOutputReference</a>

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gateway"></a>

```go
func Gateway() HdinsightHbaseClusterGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference">HdinsightHbaseClusterGatewayOutputReference</a>

---

##### `HttpsEndpoint`<sup>Required</sup> <a name="HttpsEndpoint" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.httpsEndpoint"></a>

```go
func HttpsEndpoint() *string
```

- *Type:* *string

---

##### `Metastores`<sup>Required</sup> <a name="Metastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastores"></a>

```go
func Metastores() HdinsightHbaseClusterMetastoresOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference">HdinsightHbaseClusterMetastoresOutputReference</a>

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitor"></a>

```go
func Monitor() HdinsightHbaseClusterMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference">HdinsightHbaseClusterMonitorOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.network"></a>

```go
func Network() HdinsightHbaseClusterNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference">HdinsightHbaseClusterNetworkOutputReference</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.roles"></a>

```go
func Roles() HdinsightHbaseClusterRolesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference">HdinsightHbaseClusterRolesOutputReference</a>

---

##### `SecurityProfile`<sup>Required</sup> <a name="SecurityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfile"></a>

```go
func SecurityProfile() HdinsightHbaseClusterSecurityProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference">HdinsightHbaseClusterSecurityProfileOutputReference</a>

---

##### `SshEndpoint`<sup>Required</sup> <a name="SshEndpoint" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.sshEndpoint"></a>

```go
func SshEndpoint() *string
```

- *Type:* *string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccount"></a>

```go
func StorageAccount() HdinsightHbaseClusterStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList">HdinsightHbaseClusterStorageAccountList</a>

---

##### `StorageAccountGen2`<sup>Required</sup> <a name="StorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2"></a>

```go
func StorageAccountGen2() HdinsightHbaseClusterStorageAccountGen2OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference">HdinsightHbaseClusterStorageAccountGen2OutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeouts"></a>

```go
func Timeouts() HdinsightHbaseClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference">HdinsightHbaseClusterTimeoutsOutputReference</a>

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersionInput"></a>

```go
func ClusterVersionInput() *string
```

- *Type:* *string

---

##### `ComponentVersionInput`<sup>Optional</sup> <a name="ComponentVersionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.componentVersionInput"></a>

```go
func ComponentVersionInput() HdinsightHbaseClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

---

##### `ComputeIsolationInput`<sup>Optional</sup> <a name="ComputeIsolationInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.computeIsolationInput"></a>

```go
func ComputeIsolationInput() HdinsightHbaseClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

---

##### `DiskEncryptionInput`<sup>Optional</sup> <a name="DiskEncryptionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.diskEncryptionInput"></a>

```go
func DiskEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.extensionInput"></a>

```go
func ExtensionInput() HdinsightHbaseClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.gatewayInput"></a>

```go
func GatewayInput() HdinsightHbaseClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetastoresInput`<sup>Optional</sup> <a name="MetastoresInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.metastoresInput"></a>

```go
func MetastoresInput() HdinsightHbaseClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.monitorInput"></a>

```go
func MonitorInput() HdinsightHbaseClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.networkInput"></a>

```go
func NetworkInput() HdinsightHbaseClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.rolesInput"></a>

```go
func RolesInput() HdinsightHbaseClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

---

##### `SecurityProfileInput`<sup>Optional</sup> <a name="SecurityProfileInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.securityProfileInput"></a>

```go
func SecurityProfileInput() HdinsightHbaseClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

---

##### `StorageAccountGen2Input`<sup>Optional</sup> <a name="StorageAccountGen2Input" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountGen2Input"></a>

```go
func StorageAccountGen2Input() HdinsightHbaseClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.storageAccountInput"></a>

```go
func StorageAccountInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersionInput"></a>

```go
func TlsMinVersionInput() *string
```

- *Type:* *string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.clusterVersion"></a>

```go
func ClusterVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tlsMinVersion"></a>

```go
func TlsMinVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HdinsightHbaseClusterComponentVersion <a name="HdinsightHbaseClusterComponentVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterComponentVersion {
	Hbase: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion.property.hbase">Hbase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#hbase HdinsightHbaseCluster#hbase}. |

---

##### `Hbase`<sup>Required</sup> <a name="Hbase" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion.property.hbase"></a>

```go
Hbase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#hbase HdinsightHbaseCluster#hbase}.

---

### HdinsightHbaseClusterComputeIsolation <a name="HdinsightHbaseClusterComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterComputeIsolation {
	ComputeIsolationEnabled: interface{},
	HostSku: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.computeIsolationEnabled">ComputeIsolationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#compute_isolation_enabled HdinsightHbaseCluster#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.hostSku">HostSku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#host_sku HdinsightHbaseCluster#host_sku}. |

---

##### `ComputeIsolationEnabled`<sup>Optional</sup> <a name="ComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.computeIsolationEnabled"></a>

```go
ComputeIsolationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#compute_isolation_enabled HdinsightHbaseCluster#compute_isolation_enabled}.

---

##### `HostSku`<sup>Optional</sup> <a name="HostSku" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation.property.hostSku"></a>

```go
HostSku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#host_sku HdinsightHbaseCluster#host_sku}.

---

### HdinsightHbaseClusterConfig <a name="HdinsightHbaseClusterConfig" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterVersion: *string,
	ComponentVersion: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion,
	Gateway: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterGateway,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Roles: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterRoles,
	Tier: *string,
	ComputeIsolation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation,
	DiskEncryption: interface{},
	Extension: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterExtension,
	Id: *string,
	Metastores: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores,
	Monitor: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor,
	Network: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork,
	SecurityProfile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile,
	StorageAccount: interface{},
	StorageAccountGen2: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts,
	TlsMinVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#cluster_version HdinsightHbaseCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.componentVersion">ComponentVersion</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a></code> | component_version block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#location HdinsightHbaseCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#resource_group_name HdinsightHbaseCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a></code> | roles block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tier">Tier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#tier HdinsightHbaseCluster#tier}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.computeIsolation">ComputeIsolation</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a></code> | compute_isolation block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.diskEncryption">DiskEncryption</a></code> | <code>interface{}</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a></code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#id HdinsightHbaseCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.metastores">Metastores</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a></code> | metastores block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.securityProfile">SecurityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a></code> | security_profile block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccount">StorageAccount</a></code> | <code>interface{}</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccountGen2">StorageAccountGen2</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a></code> | storage_account_gen2 block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#tags HdinsightHbaseCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#tls_min_version HdinsightHbaseCluster#tls_min_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.clusterVersion"></a>

```go
ClusterVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#cluster_version HdinsightHbaseCluster#cluster_version}.

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.componentVersion"></a>

```go
ComponentVersion HdinsightHbaseClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

component_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#component_version HdinsightHbaseCluster#component_version}

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.gateway"></a>

```go
Gateway HdinsightHbaseClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#gateway HdinsightHbaseCluster#gateway}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#location HdinsightHbaseCluster#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#resource_group_name HdinsightHbaseCluster#resource_group_name}.

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.roles"></a>

```go
Roles HdinsightHbaseClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#roles HdinsightHbaseCluster#roles}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#tier HdinsightHbaseCluster#tier}.

---

##### `ComputeIsolation`<sup>Optional</sup> <a name="ComputeIsolation" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.computeIsolation"></a>

```go
ComputeIsolation HdinsightHbaseClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

compute_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#compute_isolation HdinsightHbaseCluster#compute_isolation}

---

##### `DiskEncryption`<sup>Optional</sup> <a name="DiskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.diskEncryption"></a>

```go
DiskEncryption interface{}
```

- *Type:* interface{}

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#disk_encryption HdinsightHbaseCluster#disk_encryption}

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.extension"></a>

```go
Extension HdinsightHbaseClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#extension HdinsightHbaseCluster#extension}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#id HdinsightHbaseCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metastores`<sup>Optional</sup> <a name="Metastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.metastores"></a>

```go
Metastores HdinsightHbaseClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#metastores HdinsightHbaseCluster#metastores}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.monitor"></a>

```go
Monitor HdinsightHbaseClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#monitor HdinsightHbaseCluster#monitor}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.network"></a>

```go
Network HdinsightHbaseClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#network HdinsightHbaseCluster#network}

---

##### `SecurityProfile`<sup>Optional</sup> <a name="SecurityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.securityProfile"></a>

```go
SecurityProfile HdinsightHbaseClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

security_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#security_profile HdinsightHbaseCluster#security_profile}

---

##### `StorageAccount`<sup>Optional</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccount"></a>

```go
StorageAccount interface{}
```

- *Type:* interface{}

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#storage_account HdinsightHbaseCluster#storage_account}

---

##### `StorageAccountGen2`<sup>Optional</sup> <a name="StorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.storageAccountGen2"></a>

```go
StorageAccountGen2 HdinsightHbaseClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

storage_account_gen2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#storage_account_gen2 HdinsightHbaseCluster#storage_account_gen2}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#tags HdinsightHbaseCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.timeouts"></a>

```go
Timeouts HdinsightHbaseClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts">HdinsightHbaseClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#timeouts HdinsightHbaseCluster#timeouts}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterConfig.property.tlsMinVersion"></a>

```go
TlsMinVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#tls_min_version HdinsightHbaseCluster#tls_min_version}.

---

### HdinsightHbaseClusterDiskEncryption <a name="HdinsightHbaseClusterDiskEncryption" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterDiskEncryption {
	EncryptionAlgorithm: *string,
	EncryptionAtHostEnabled: interface{},
	KeyVaultKeyId: *string,
	KeyVaultManagedIdentityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#encryption_algorithm HdinsightHbaseCluster#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#encryption_at_host_enabled HdinsightHbaseCluster#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#key_vault_key_id HdinsightHbaseCluster#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultManagedIdentityId">KeyVaultManagedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#key_vault_managed_identity_id HdinsightHbaseCluster#key_vault_managed_identity_id}. |

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAlgorithm"></a>

```go
EncryptionAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#encryption_algorithm HdinsightHbaseCluster#encryption_algorithm}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.encryptionAtHostEnabled"></a>

```go
EncryptionAtHostEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#encryption_at_host_enabled HdinsightHbaseCluster#encryption_at_host_enabled}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#key_vault_key_id HdinsightHbaseCluster#key_vault_key_id}.

---

##### `KeyVaultManagedIdentityId`<sup>Optional</sup> <a name="KeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryption.property.keyVaultManagedIdentityId"></a>

```go
KeyVaultManagedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#key_vault_managed_identity_id HdinsightHbaseCluster#key_vault_managed_identity_id}.

---

### HdinsightHbaseClusterExtension <a name="HdinsightHbaseClusterExtension" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterExtension {
	LogAnalyticsWorkspaceId: *string,
	PrimaryKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}. |

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension.property.primaryKey"></a>

```go
PrimaryKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}.

---

### HdinsightHbaseClusterGateway <a name="HdinsightHbaseClusterGateway" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterGateway {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMetastores <a name="HdinsightHbaseClusterMetastores" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterMetastores {
	Ambari: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari,
	Hive: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive,
	Oozie: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.ambari">Ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a></code> | ambari block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.hive">Hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a></code> | hive block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.oozie">Oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a></code> | oozie block. |

---

##### `Ambari`<sup>Optional</sup> <a name="Ambari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.ambari"></a>

```go
Ambari HdinsightHbaseClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

ambari block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#ambari HdinsightHbaseCluster#ambari}

---

##### `Hive`<sup>Optional</sup> <a name="Hive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.hive"></a>

```go
Hive HdinsightHbaseClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

hive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#hive HdinsightHbaseCluster#hive}

---

##### `Oozie`<sup>Optional</sup> <a name="Oozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores.property.oozie"></a>

```go
Oozie HdinsightHbaseClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

oozie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#oozie HdinsightHbaseCluster#oozie}

---

### HdinsightHbaseClusterMetastoresAmbari <a name="HdinsightHbaseClusterMetastoresAmbari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterMetastoresAmbari {
	DatabaseName: *string,
	Password: *string,
	Server: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.server">Server</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.server"></a>

```go
Server *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMetastoresHive <a name="HdinsightHbaseClusterMetastoresHive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterMetastoresHive {
	DatabaseName: *string,
	Password: *string,
	Server: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.server">Server</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.server"></a>

```go
Server *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMetastoresOozie <a name="HdinsightHbaseClusterMetastoresOozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterMetastoresOozie {
	DatabaseName: *string,
	Password: *string,
	Server: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.server">Server</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#database_name HdinsightHbaseCluster#database_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.server"></a>

```go
Server *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#server HdinsightHbaseCluster#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

### HdinsightHbaseClusterMonitor <a name="HdinsightHbaseClusterMonitor" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterMonitor {
	LogAnalyticsWorkspaceId: *string,
	PrimaryKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}. |

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#log_analytics_workspace_id HdinsightHbaseCluster#log_analytics_workspace_id}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor.property.primaryKey"></a>

```go
PrimaryKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#primary_key HdinsightHbaseCluster#primary_key}.

---

### HdinsightHbaseClusterNetwork <a name="HdinsightHbaseClusterNetwork" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterNetwork {
	ConnectionDirection: *string,
	PrivateLinkEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.connectionDirection">ConnectionDirection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#connection_direction HdinsightHbaseCluster#connection_direction}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.privateLinkEnabled">PrivateLinkEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#private_link_enabled HdinsightHbaseCluster#private_link_enabled}. |

---

##### `ConnectionDirection`<sup>Optional</sup> <a name="ConnectionDirection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.connectionDirection"></a>

```go
ConnectionDirection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#connection_direction HdinsightHbaseCluster#connection_direction}.

---

##### `PrivateLinkEnabled`<sup>Optional</sup> <a name="PrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork.property.privateLinkEnabled"></a>

```go
PrivateLinkEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#private_link_enabled HdinsightHbaseCluster#private_link_enabled}.

---

### HdinsightHbaseClusterRoles <a name="HdinsightHbaseClusterRoles" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterRoles {
	HeadNode: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode,
	WorkerNode: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode,
	ZookeeperNode: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.headNode">HeadNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a></code> | head_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.workerNode">WorkerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a></code> | worker_node block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.zookeeperNode">ZookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a></code> | zookeeper_node block. |

---

##### `HeadNode`<sup>Required</sup> <a name="HeadNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.headNode"></a>

```go
HeadNode HdinsightHbaseClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

head_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#head_node HdinsightHbaseCluster#head_node}

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.workerNode"></a>

```go
WorkerNode HdinsightHbaseClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#worker_node HdinsightHbaseCluster#worker_node}

---

##### `ZookeeperNode`<sup>Required</sup> <a name="ZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles.property.zookeeperNode"></a>

```go
ZookeeperNode HdinsightHbaseClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

zookeeper_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#zookeeper_node HdinsightHbaseCluster#zookeeper_node}

---

### HdinsightHbaseClusterRolesHeadNode <a name="HdinsightHbaseClusterRolesHeadNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterRolesHeadNode {
	Username: *string,
	VmSize: *string,
	Password: *string,
	ScriptActions: interface{},
	SshKeys: *[]*string,
	SubnetId: *string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.vmSize">VmSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.scriptActions">ScriptActions</a></code> | <code>interface{}</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.vmSize"></a>

```go
VmSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.scriptActions"></a>

```go
ScriptActions interface{}
```

- *Type:* interface{}

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

### HdinsightHbaseClusterRolesHeadNodeScriptActions <a name="HdinsightHbaseClusterRolesHeadNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterRolesHeadNodeScriptActions {
	Name: *string,
	Uri: *string,
	Parameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActions.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}.

---

### HdinsightHbaseClusterRolesWorkerNode <a name="HdinsightHbaseClusterRolesWorkerNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterRolesWorkerNode {
	TargetInstanceCount: *f64,
	Username: *string,
	VmSize: *string,
	Autoscale: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale,
	Password: *string,
	ScriptActions: interface{},
	SshKeys: *[]*string,
	SubnetId: *string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.vmSize">VmSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.scriptActions">ScriptActions</a></code> | <code>interface{}</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}. |

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.targetInstanceCount"></a>

```go
TargetInstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.vmSize"></a>

```go
VmSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.autoscale"></a>

```go
Autoscale HdinsightHbaseClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#autoscale HdinsightHbaseCluster#autoscale}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.scriptActions"></a>

```go
ScriptActions interface{}
```

- *Type:* interface{}

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

### HdinsightHbaseClusterRolesWorkerNodeAutoscale <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale {
	Recurrence: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | recurrence block. |

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale.property.recurrence"></a>

```go
Recurrence HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#recurrence HdinsightHbaseCluster#recurrence}

---

### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence {
	Schedule: interface{},
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule">Schedule</a></code> | <code>interface{}</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#timezone HdinsightHbaseCluster#timezone}. |

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.schedule"></a>

```go
Schedule interface{}
```

- *Type:* interface{}

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#schedule HdinsightHbaseCluster#schedule}

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#timezone HdinsightHbaseCluster#timezone}.

---

### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule {
	Days: *[]*string,
	TargetInstanceCount: *f64,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days">Days</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#days HdinsightHbaseCluster#days}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time">Time</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#time HdinsightHbaseCluster#time}. |

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.days"></a>

```go
Days *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#days HdinsightHbaseCluster#days}.

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.targetInstanceCount"></a>

```go
TargetInstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#target_instance_count HdinsightHbaseCluster#target_instance_count}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceSchedule.property.time"></a>

```go
Time *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#time HdinsightHbaseCluster#time}.

---

### HdinsightHbaseClusterRolesWorkerNodeScriptActions <a name="HdinsightHbaseClusterRolesWorkerNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions {
	Name: *string,
	Uri: *string,
	Parameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActions.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}.

---

### HdinsightHbaseClusterRolesZookeeperNode <a name="HdinsightHbaseClusterRolesZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterRolesZookeeperNode {
	Username: *string,
	VmSize: *string,
	Password: *string,
	ScriptActions: interface{},
	SshKeys: *[]*string,
	SubnetId: *string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.vmSize">VmSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.scriptActions">ScriptActions</a></code> | <code>interface{}</code> | script_actions block. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#username HdinsightHbaseCluster#username}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.vmSize"></a>

```go
VmSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#vm_size HdinsightHbaseCluster#vm_size}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#password HdinsightHbaseCluster#password}.

---

##### `ScriptActions`<sup>Optional</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.scriptActions"></a>

```go
ScriptActions interface{}
```

- *Type:* interface{}

script_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#script_actions HdinsightHbaseCluster#script_actions}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#ssh_keys HdinsightHbaseCluster#ssh_keys}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#subnet_id HdinsightHbaseCluster#subnet_id}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#virtual_network_id HdinsightHbaseCluster#virtual_network_id}.

---

### HdinsightHbaseClusterRolesZookeeperNodeScriptActions <a name="HdinsightHbaseClusterRolesZookeeperNodeScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions {
	Name: *string,
	Uri: *string,
	Parameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#name HdinsightHbaseCluster#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#uri HdinsightHbaseCluster#uri}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActions.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#parameters HdinsightHbaseCluster#parameters}.

---

### HdinsightHbaseClusterSecurityProfile <a name="HdinsightHbaseClusterSecurityProfile" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterSecurityProfile {
	AaddsResourceId: *string,
	DomainName: *string,
	DomainUsername: *string,
	DomainUserPassword: *string,
	LdapsUrls: *[]*string,
	MsiResourceId: *string,
	ClusterUsersGroupDns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.aaddsResourceId">AaddsResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#aadds_resource_id HdinsightHbaseCluster#aadds_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#domain_name HdinsightHbaseCluster#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUsername">DomainUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#domain_username HdinsightHbaseCluster#domain_username}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUserPassword">DomainUserPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#domain_user_password HdinsightHbaseCluster#domain_user_password}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.ldapsUrls">LdapsUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#ldaps_urls HdinsightHbaseCluster#ldaps_urls}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.msiResourceId">MsiResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#msi_resource_id HdinsightHbaseCluster#msi_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.clusterUsersGroupDns">ClusterUsersGroupDns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#cluster_users_group_dns HdinsightHbaseCluster#cluster_users_group_dns}. |

---

##### `AaddsResourceId`<sup>Required</sup> <a name="AaddsResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.aaddsResourceId"></a>

```go
AaddsResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#aadds_resource_id HdinsightHbaseCluster#aadds_resource_id}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#domain_name HdinsightHbaseCluster#domain_name}.

---

##### `DomainUsername`<sup>Required</sup> <a name="DomainUsername" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUsername"></a>

```go
DomainUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#domain_username HdinsightHbaseCluster#domain_username}.

---

##### `DomainUserPassword`<sup>Required</sup> <a name="DomainUserPassword" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.domainUserPassword"></a>

```go
DomainUserPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#domain_user_password HdinsightHbaseCluster#domain_user_password}.

---

##### `LdapsUrls`<sup>Required</sup> <a name="LdapsUrls" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.ldapsUrls"></a>

```go
LdapsUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#ldaps_urls HdinsightHbaseCluster#ldaps_urls}.

---

##### `MsiResourceId`<sup>Required</sup> <a name="MsiResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.msiResourceId"></a>

```go
MsiResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#msi_resource_id HdinsightHbaseCluster#msi_resource_id}.

---

##### `ClusterUsersGroupDns`<sup>Optional</sup> <a name="ClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile.property.clusterUsersGroupDns"></a>

```go
ClusterUsersGroupDns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#cluster_users_group_dns HdinsightHbaseCluster#cluster_users_group_dns}.

---

### HdinsightHbaseClusterStorageAccount <a name="HdinsightHbaseClusterStorageAccount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterStorageAccount {
	IsDefault: interface{},
	StorageAccountKey: *string,
	StorageContainerId: *string,
	StorageResourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageAccountKey">StorageAccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#storage_account_key HdinsightHbaseCluster#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageContainerId">StorageContainerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#storage_container_id HdinsightHbaseCluster#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageResourceId">StorageResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}. |

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.isDefault"></a>

```go
IsDefault interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}.

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageAccountKey"></a>

```go
StorageAccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#storage_account_key HdinsightHbaseCluster#storage_account_key}.

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageContainerId"></a>

```go
StorageContainerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#storage_container_id HdinsightHbaseCluster#storage_container_id}.

---

##### `StorageResourceId`<sup>Optional</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccount.property.storageResourceId"></a>

```go
StorageResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}.

---

### HdinsightHbaseClusterStorageAccountGen2 <a name="HdinsightHbaseClusterStorageAccountGen2" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterStorageAccountGen2 {
	FilesystemId: *string,
	IsDefault: interface{},
	ManagedIdentityResourceId: *string,
	StorageResourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.filesystemId">FilesystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#filesystem_id HdinsightHbaseCluster#filesystem_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.managedIdentityResourceId">ManagedIdentityResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#managed_identity_resource_id HdinsightHbaseCluster#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.storageResourceId">StorageResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}. |

---

##### `FilesystemId`<sup>Required</sup> <a name="FilesystemId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.filesystemId"></a>

```go
FilesystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#filesystem_id HdinsightHbaseCluster#filesystem_id}.

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.isDefault"></a>

```go
IsDefault interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#is_default HdinsightHbaseCluster#is_default}.

---

##### `ManagedIdentityResourceId`<sup>Required</sup> <a name="ManagedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.managedIdentityResourceId"></a>

```go
ManagedIdentityResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#managed_identity_resource_id HdinsightHbaseCluster#managed_identity_resource_id}.

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2.property.storageResourceId"></a>

```go
StorageResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#storage_resource_id HdinsightHbaseCluster#storage_resource_id}.

---

### HdinsightHbaseClusterTimeouts <a name="HdinsightHbaseClusterTimeouts" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

&hdinsighthbasecluster.HdinsightHbaseClusterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#create HdinsightHbaseCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#delete HdinsightHbaseCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#read HdinsightHbaseCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#update HdinsightHbaseCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#create HdinsightHbaseCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#delete HdinsightHbaseCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#read HdinsightHbaseCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/hdinsight_hbase_cluster#update HdinsightHbaseCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HdinsightHbaseClusterComponentVersionOutputReference <a name="HdinsightHbaseClusterComponentVersionOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterComponentVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterComponentVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbaseInput">HbaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbase">Hbase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HbaseInput`<sup>Optional</sup> <a name="HbaseInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbaseInput"></a>

```go
func HbaseInput() *string
```

- *Type:* *string

---

##### `Hbase`<sup>Required</sup> <a name="Hbase" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.hbase"></a>

```go
func Hbase() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterComponentVersion
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComponentVersion">HdinsightHbaseClusterComponentVersion</a>

---


### HdinsightHbaseClusterComputeIsolationOutputReference <a name="HdinsightHbaseClusterComputeIsolationOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterComputeIsolationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterComputeIsolationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetComputeIsolationEnabled">ResetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetHostSku">ResetHostSku</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeIsolationEnabled` <a name="ResetComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetComputeIsolationEnabled"></a>

```go
func ResetComputeIsolationEnabled()
```

##### `ResetHostSku` <a name="ResetHostSku" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.resetHostSku"></a>

```go
func ResetHostSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput">ComputeIsolationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSkuInput">HostSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabled">ComputeIsolationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSku">HostSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeIsolationEnabledInput`<sup>Optional</sup> <a name="ComputeIsolationEnabledInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabledInput"></a>

```go
func ComputeIsolationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostSkuInput`<sup>Optional</sup> <a name="HostSkuInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSkuInput"></a>

```go
func HostSkuInput() *string
```

- *Type:* *string

---

##### `ComputeIsolationEnabled`<sup>Required</sup> <a name="ComputeIsolationEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.computeIsolationEnabled"></a>

```go
func ComputeIsolationEnabled() interface{}
```

- *Type:* interface{}

---

##### `HostSku`<sup>Required</sup> <a name="HostSku" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.hostSku"></a>

```go
func HostSku() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolationOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterComputeIsolation
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterComputeIsolation">HdinsightHbaseClusterComputeIsolation</a>

---


### HdinsightHbaseClusterDiskEncryptionList <a name="HdinsightHbaseClusterDiskEncryptionList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterDiskEncryptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HdinsightHbaseClusterDiskEncryptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.get"></a>

```go
func Get(index *f64) HdinsightHbaseClusterDiskEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterDiskEncryptionOutputReference <a name="HdinsightHbaseClusterDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterDiskEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HdinsightHbaseClusterDiskEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId">ResetKeyVaultManagedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```go
func ResetEncryptionAlgorithm()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetEncryptionAtHostEnabled"></a>

```go
func ResetEncryptionAtHostEnabled()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultKeyId"></a>

```go
func ResetKeyVaultKeyId()
```

##### `ResetKeyVaultManagedIdentityId` <a name="ResetKeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.resetKeyVaultManagedIdentityId"></a>

```go
func ResetKeyVaultManagedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput">KeyVaultManagedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId">KeyVaultManagedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```go
func EncryptionAlgorithmInput() *string
```

- *Type:* *string

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabledInput"></a>

```go
func EncryptionAtHostEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `KeyVaultManagedIdentityIdInput`<sup>Optional</sup> <a name="KeyVaultManagedIdentityIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityIdInput"></a>

```go
func KeyVaultManagedIdentityIdInput() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAlgorithm"></a>

```go
func EncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.encryptionAtHostEnabled"></a>

```go
func EncryptionAtHostEnabled() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `KeyVaultManagedIdentityId`<sup>Required</sup> <a name="KeyVaultManagedIdentityId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.keyVaultManagedIdentityId"></a>

```go
func KeyVaultManagedIdentityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterDiskEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterExtensionOutputReference <a name="HdinsightHbaseClusterExtensionOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterExtensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterExtensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKeyInput"></a>

```go
func PrimaryKeyInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtensionOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterExtension
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterExtension">HdinsightHbaseClusterExtension</a>

---


### HdinsightHbaseClusterGatewayOutputReference <a name="HdinsightHbaseClusterGatewayOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterGateway">HdinsightHbaseClusterGateway</a>

---


### HdinsightHbaseClusterMetastoresAmbariOutputReference <a name="HdinsightHbaseClusterMetastoresAmbariOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterMetastoresAmbariOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterMetastoresAmbariOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

---


### HdinsightHbaseClusterMetastoresHiveOutputReference <a name="HdinsightHbaseClusterMetastoresHiveOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterMetastoresHiveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterMetastoresHiveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

---


### HdinsightHbaseClusterMetastoresOozieOutputReference <a name="HdinsightHbaseClusterMetastoresOozieOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterMetastoresOozieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterMetastoresOozieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

---


### HdinsightHbaseClusterMetastoresOutputReference <a name="HdinsightHbaseClusterMetastoresOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterMetastoresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterMetastoresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari">PutAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive">PutHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie">PutOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetAmbari">ResetAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetHive">ResetHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetOozie">ResetOozie</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmbari` <a name="PutAmbari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari"></a>

```go
func PutAmbari(value HdinsightHbaseClusterMetastoresAmbari)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putAmbari.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

---

##### `PutHive` <a name="PutHive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive"></a>

```go
func PutHive(value HdinsightHbaseClusterMetastoresHive)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putHive.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

---

##### `PutOozie` <a name="PutOozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie"></a>

```go
func PutOozie(value HdinsightHbaseClusterMetastoresOozie)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.putOozie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

---

##### `ResetAmbari` <a name="ResetAmbari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetAmbari"></a>

```go
func ResetAmbari()
```

##### `ResetHive` <a name="ResetHive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetHive"></a>

```go
func ResetHive()
```

##### `ResetOozie` <a name="ResetOozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.resetOozie"></a>

```go
func ResetOozie()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambari">Ambari</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference">HdinsightHbaseClusterMetastoresAmbariOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hive">Hive</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference">HdinsightHbaseClusterMetastoresHiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozie">Oozie</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference">HdinsightHbaseClusterMetastoresOozieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambariInput">AmbariInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hiveInput">HiveInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozieInput">OozieInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ambari`<sup>Required</sup> <a name="Ambari" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambari"></a>

```go
func Ambari() HdinsightHbaseClusterMetastoresAmbariOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbariOutputReference">HdinsightHbaseClusterMetastoresAmbariOutputReference</a>

---

##### `Hive`<sup>Required</sup> <a name="Hive" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hive"></a>

```go
func Hive() HdinsightHbaseClusterMetastoresHiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHiveOutputReference">HdinsightHbaseClusterMetastoresHiveOutputReference</a>

---

##### `Oozie`<sup>Required</sup> <a name="Oozie" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozie"></a>

```go
func Oozie() HdinsightHbaseClusterMetastoresOozieOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozieOutputReference">HdinsightHbaseClusterMetastoresOozieOutputReference</a>

---

##### `AmbariInput`<sup>Optional</sup> <a name="AmbariInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.ambariInput"></a>

```go
func AmbariInput() HdinsightHbaseClusterMetastoresAmbari
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresAmbari">HdinsightHbaseClusterMetastoresAmbari</a>

---

##### `HiveInput`<sup>Optional</sup> <a name="HiveInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.hiveInput"></a>

```go
func HiveInput() HdinsightHbaseClusterMetastoresHive
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresHive">HdinsightHbaseClusterMetastoresHive</a>

---

##### `OozieInput`<sup>Optional</sup> <a name="OozieInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.oozieInput"></a>

```go
func OozieInput() HdinsightHbaseClusterMetastoresOozie
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOozie">HdinsightHbaseClusterMetastoresOozie</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastoresOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterMetastores
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMetastores">HdinsightHbaseClusterMetastores</a>

---


### HdinsightHbaseClusterMonitorOutputReference <a name="HdinsightHbaseClusterMonitorOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterMonitorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterMonitorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKeyInput"></a>

```go
func PrimaryKeyInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitorOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterMonitor">HdinsightHbaseClusterMonitor</a>

---


### HdinsightHbaseClusterNetworkOutputReference <a name="HdinsightHbaseClusterNetworkOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetConnectionDirection">ResetConnectionDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetPrivateLinkEnabled">ResetPrivateLinkEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionDirection` <a name="ResetConnectionDirection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetConnectionDirection"></a>

```go
func ResetConnectionDirection()
```

##### `ResetPrivateLinkEnabled` <a name="ResetPrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.resetPrivateLinkEnabled"></a>

```go
func ResetPrivateLinkEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirectionInput">ConnectionDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabledInput">PrivateLinkEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirection">ConnectionDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabled">PrivateLinkEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionDirectionInput`<sup>Optional</sup> <a name="ConnectionDirectionInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirectionInput"></a>

```go
func ConnectionDirectionInput() *string
```

- *Type:* *string

---

##### `PrivateLinkEnabledInput`<sup>Optional</sup> <a name="PrivateLinkEnabledInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabledInput"></a>

```go
func PrivateLinkEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionDirection`<sup>Required</sup> <a name="ConnectionDirection" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.connectionDirection"></a>

```go
func ConnectionDirection() *string
```

- *Type:* *string

---

##### `PrivateLinkEnabled`<sup>Required</sup> <a name="PrivateLinkEnabled" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.privateLinkEnabled"></a>

```go
func PrivateLinkEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterNetwork">HdinsightHbaseClusterNetwork</a>

---


### HdinsightHbaseClusterRolesHeadNodeOutputReference <a name="HdinsightHbaseClusterRolesHeadNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesHeadNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterRolesHeadNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.putScriptActions"></a>

```go
func PutScriptActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetScriptActions"></a>

```go
func ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList">HdinsightHbaseClusterRolesHeadNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSize">VmSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActions"></a>

```go
func ScriptActions() HdinsightHbaseClusterRolesHeadNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList">HdinsightHbaseClusterRolesHeadNodeScriptActionsList</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.scriptActionsInput"></a>

```go
func ScriptActionsInput() interface{}
```

- *Type:* interface{}

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSizeInput"></a>

```go
func VmSizeInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.vmSize"></a>

```go
func VmSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

---


### HdinsightHbaseClusterRolesHeadNodeScriptActionsList <a name="HdinsightHbaseClusterRolesHeadNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesHeadNodeScriptActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HdinsightHbaseClusterRolesHeadNodeScriptActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.get"></a>

```go
func Get(index *f64) HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference <a name="HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeScriptActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterRolesOutputReference <a name="HdinsightHbaseClusterRolesOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode">PutHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode">PutWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode">PutZookeeperNode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeadNode` <a name="PutHeadNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode"></a>

```go
func PutHeadNode(value HdinsightHbaseClusterRolesHeadNode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putHeadNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

---

##### `PutWorkerNode` <a name="PutWorkerNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode"></a>

```go
func PutWorkerNode(value HdinsightHbaseClusterRolesWorkerNode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putWorkerNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

---

##### `PutZookeeperNode` <a name="PutZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode"></a>

```go
func PutZookeeperNode(value HdinsightHbaseClusterRolesZookeeperNode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.putZookeeperNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNode">HeadNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference">HdinsightHbaseClusterRolesHeadNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNode">WorkerNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference">HdinsightHbaseClusterRolesWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNode">ZookeeperNode</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference">HdinsightHbaseClusterRolesZookeeperNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNodeInput">HeadNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNodeInput">WorkerNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNodeInput">ZookeeperNodeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeadNode`<sup>Required</sup> <a name="HeadNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNode"></a>

```go
func HeadNode() HdinsightHbaseClusterRolesHeadNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNodeOutputReference">HdinsightHbaseClusterRolesHeadNodeOutputReference</a>

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNode"></a>

```go
func WorkerNode() HdinsightHbaseClusterRolesWorkerNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference">HdinsightHbaseClusterRolesWorkerNodeOutputReference</a>

---

##### `ZookeeperNode`<sup>Required</sup> <a name="ZookeeperNode" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNode"></a>

```go
func ZookeeperNode() HdinsightHbaseClusterRolesZookeeperNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference">HdinsightHbaseClusterRolesZookeeperNodeOutputReference</a>

---

##### `HeadNodeInput`<sup>Optional</sup> <a name="HeadNodeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.headNodeInput"></a>

```go
func HeadNodeInput() HdinsightHbaseClusterRolesHeadNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesHeadNode">HdinsightHbaseClusterRolesHeadNode</a>

---

##### `WorkerNodeInput`<sup>Optional</sup> <a name="WorkerNodeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.workerNodeInput"></a>

```go
func WorkerNodeInput() HdinsightHbaseClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

---

##### `ZookeeperNodeInput`<sup>Optional</sup> <a name="ZookeeperNodeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.zookeeperNodeInput"></a>

```go
func ZookeeperNodeInput() HdinsightHbaseClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterRoles
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRoles">HdinsightHbaseClusterRoles</a>

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence"></a>

```go
func PutRecurrence(value HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.resetRecurrence"></a>

```go
func ResetRecurrence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrence"></a>

```go
func Recurrence() HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference</a>

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.recurrenceInput"></a>

```go
func RecurrenceInput() HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule"></a>

```go
func PutSchedule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.putSchedule.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.schedule"></a>

```go
func Schedule() HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence">HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrence</a>

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get"></a>

```go
func Get(index *f64) HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput">DaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput">TargetInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days">Days</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.daysInput"></a>

```go
func DaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetInstanceCountInput`<sup>Optional</sup> <a name="TargetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCountInput"></a>

```go
func TargetInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.days"></a>

```go
func Days() *[]*string
```

- *Type:* *[]*string

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.targetInstanceCount"></a>

```go
func TargetInstanceCount() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleRecurrenceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterRolesWorkerNodeOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesWorkerNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterRolesWorkerNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putAutoscale"></a>

```go
func PutAutoscale(value HdinsightHbaseClusterRolesWorkerNodeAutoscale)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

---

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putScriptActions"></a>

```go
func PutScriptActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetAutoscale"></a>

```go
func ResetAutoscale()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetScriptActions"></a>

```go
func ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList">HdinsightHbaseClusterRolesWorkerNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput">TargetInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSize">VmSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscale"></a>

```go
func Autoscale() HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference">HdinsightHbaseClusterRolesWorkerNodeAutoscaleOutputReference</a>

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActions"></a>

```go
func ScriptActions() HdinsightHbaseClusterRolesWorkerNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList">HdinsightHbaseClusterRolesWorkerNodeScriptActionsList</a>

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.autoscaleInput"></a>

```go
func AutoscaleInput() HdinsightHbaseClusterRolesWorkerNodeAutoscale
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeAutoscale">HdinsightHbaseClusterRolesWorkerNodeAutoscale</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.scriptActionsInput"></a>

```go
func ScriptActionsInput() interface{}
```

- *Type:* interface{}

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TargetInstanceCountInput`<sup>Optional</sup> <a name="TargetInstanceCountInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCountInput"></a>

```go
func TargetInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSizeInput"></a>

```go
func VmSizeInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.targetInstanceCount"></a>

```go
func TargetInstanceCount() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.vmSize"></a>

```go
func VmSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterRolesWorkerNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNode">HdinsightHbaseClusterRolesWorkerNode</a>

---


### HdinsightHbaseClusterRolesWorkerNodeScriptActionsList <a name="HdinsightHbaseClusterRolesWorkerNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesWorkerNodeScriptActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HdinsightHbaseClusterRolesWorkerNodeScriptActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.get"></a>

```go
func Get(index *f64) HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference <a name="HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesWorkerNodeScriptActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterRolesZookeeperNodeOutputReference <a name="HdinsightHbaseClusterRolesZookeeperNodeOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesZookeeperNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterRolesZookeeperNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.putScriptActions">PutScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetScriptActions">ResetScriptActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptActions` <a name="PutScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.putScriptActions"></a>

```go
func PutScriptActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.putScriptActions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetScriptActions` <a name="ResetScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetScriptActions"></a>

```go
func ResetScriptActions()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActions">ScriptActions</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList">HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput">ScriptActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSize">VmSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptActions`<sup>Required</sup> <a name="ScriptActions" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActions"></a>

```go
func ScriptActions() HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList">HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ScriptActionsInput`<sup>Optional</sup> <a name="ScriptActionsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.scriptActionsInput"></a>

```go
func ScriptActionsInput() interface{}
```

- *Type:* interface{}

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSizeInput"></a>

```go
func VmSizeInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.vmSize"></a>

```go
func VmSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterRolesZookeeperNode
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNode">HdinsightHbaseClusterRolesZookeeperNode</a>

---


### HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList <a name="HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesZookeeperNodeScriptActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.get"></a>

```go
func Get(index *f64) HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference <a name="HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterRolesZookeeperNodeScriptActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterSecurityProfileOutputReference <a name="HdinsightHbaseClusterSecurityProfileOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterSecurityProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterSecurityProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resetClusterUsersGroupDns">ResetClusterUsersGroupDns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterUsersGroupDns` <a name="ResetClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.resetClusterUsersGroupDns"></a>

```go
func ResetClusterUsersGroupDns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceIdInput">AaddsResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput">ClusterUsersGroupDnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsernameInput">DomainUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPasswordInput">DomainUserPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrlsInput">LdapsUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceIdInput">MsiResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceId">AaddsResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDns">ClusterUsersGroupDns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsername">DomainUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPassword">DomainUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrls">LdapsUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceId">MsiResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AaddsResourceIdInput`<sup>Optional</sup> <a name="AaddsResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceIdInput"></a>

```go
func AaddsResourceIdInput() *string
```

- *Type:* *string

---

##### `ClusterUsersGroupDnsInput`<sup>Optional</sup> <a name="ClusterUsersGroupDnsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDnsInput"></a>

```go
func ClusterUsersGroupDnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `DomainUsernameInput`<sup>Optional</sup> <a name="DomainUsernameInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsernameInput"></a>

```go
func DomainUsernameInput() *string
```

- *Type:* *string

---

##### `DomainUserPasswordInput`<sup>Optional</sup> <a name="DomainUserPasswordInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPasswordInput"></a>

```go
func DomainUserPasswordInput() *string
```

- *Type:* *string

---

##### `LdapsUrlsInput`<sup>Optional</sup> <a name="LdapsUrlsInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrlsInput"></a>

```go
func LdapsUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MsiResourceIdInput`<sup>Optional</sup> <a name="MsiResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceIdInput"></a>

```go
func MsiResourceIdInput() *string
```

- *Type:* *string

---

##### `AaddsResourceId`<sup>Required</sup> <a name="AaddsResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.aaddsResourceId"></a>

```go
func AaddsResourceId() *string
```

- *Type:* *string

---

##### `ClusterUsersGroupDns`<sup>Required</sup> <a name="ClusterUsersGroupDns" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.clusterUsersGroupDns"></a>

```go
func ClusterUsersGroupDns() *[]*string
```

- *Type:* *[]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `DomainUsername`<sup>Required</sup> <a name="DomainUsername" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUsername"></a>

```go
func DomainUsername() *string
```

- *Type:* *string

---

##### `DomainUserPassword`<sup>Required</sup> <a name="DomainUserPassword" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.domainUserPassword"></a>

```go
func DomainUserPassword() *string
```

- *Type:* *string

---

##### `LdapsUrls`<sup>Required</sup> <a name="LdapsUrls" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.ldapsUrls"></a>

```go
func LdapsUrls() *[]*string
```

- *Type:* *[]*string

---

##### `MsiResourceId`<sup>Required</sup> <a name="MsiResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.msiResourceId"></a>

```go
func MsiResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterSecurityProfile">HdinsightHbaseClusterSecurityProfile</a>

---


### HdinsightHbaseClusterStorageAccountGen2OutputReference <a name="HdinsightHbaseClusterStorageAccountGen2OutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterStorageAccountGen2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterStorageAccountGen2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemIdInput">FilesystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefaultInput">IsDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput">ManagedIdentityResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceIdInput">StorageResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemId">FilesystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId">ManagedIdentityResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceId">StorageResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilesystemIdInput`<sup>Optional</sup> <a name="FilesystemIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemIdInput"></a>

```go
func FilesystemIdInput() *string
```

- *Type:* *string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefaultInput"></a>

```go
func IsDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedIdentityResourceIdInput`<sup>Optional</sup> <a name="ManagedIdentityResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceIdInput"></a>

```go
func ManagedIdentityResourceIdInput() *string
```

- *Type:* *string

---

##### `StorageResourceIdInput`<sup>Optional</sup> <a name="StorageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceIdInput"></a>

```go
func StorageResourceIdInput() *string
```

- *Type:* *string

---

##### `FilesystemId`<sup>Required</sup> <a name="FilesystemId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.filesystemId"></a>

```go
func FilesystemId() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.isDefault"></a>

```go
func IsDefault() interface{}
```

- *Type:* interface{}

---

##### `ManagedIdentityResourceId`<sup>Required</sup> <a name="ManagedIdentityResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.managedIdentityResourceId"></a>

```go
func ManagedIdentityResourceId() *string
```

- *Type:* *string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.storageResourceId"></a>

```go
func StorageResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2OutputReference.property.internalValue"></a>

```go
func InternalValue() HdinsightHbaseClusterStorageAccountGen2
```

- *Type:* <a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountGen2">HdinsightHbaseClusterStorageAccountGen2</a>

---


### HdinsightHbaseClusterStorageAccountList <a name="HdinsightHbaseClusterStorageAccountList" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterStorageAccountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HdinsightHbaseClusterStorageAccountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.get"></a>

```go
func Get(index *f64) HdinsightHbaseClusterStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterStorageAccountOutputReference <a name="HdinsightHbaseClusterStorageAccountOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterStorageAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HdinsightHbaseClusterStorageAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resetStorageResourceId">ResetStorageResourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageResourceId` <a name="ResetStorageResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.resetStorageResourceId"></a>

```go
func ResetStorageResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefaultInput">IsDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerIdInput">StorageContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceIdInput">StorageResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKey">StorageAccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerId">StorageContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceId">StorageResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefaultInput"></a>

```go
func IsDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKeyInput"></a>

```go
func StorageAccountKeyInput() *string
```

- *Type:* *string

---

##### `StorageContainerIdInput`<sup>Optional</sup> <a name="StorageContainerIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerIdInput"></a>

```go
func StorageContainerIdInput() *string
```

- *Type:* *string

---

##### `StorageResourceIdInput`<sup>Optional</sup> <a name="StorageResourceIdInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceIdInput"></a>

```go
func StorageResourceIdInput() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.isDefault"></a>

```go
func IsDefault() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageAccountKey"></a>

```go
func StorageAccountKey() *string
```

- *Type:* *string

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageContainerId"></a>

```go
func StorageContainerId() *string
```

- *Type:* *string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.storageResourceId"></a>

```go
func StorageResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterStorageAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HdinsightHbaseClusterTimeoutsOutputReference <a name="HdinsightHbaseClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/hdinsighthbasecluster"

hdinsighthbasecluster.NewHdinsightHbaseClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HdinsightHbaseClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hdinsightHbaseCluster.HdinsightHbaseClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



