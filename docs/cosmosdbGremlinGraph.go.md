# `azurerm_cosmosdb_gremlin_graph`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_gremlin_graph`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph).

# `cosmosdbGremlinGraph` Submodule <a name="`cosmosdbGremlinGraph` Submodule" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbGremlinGraph <a name="CosmosdbGremlinGraph" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph azurerm_cosmosdb_gremlin_graph}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraph(scope Construct, id *string, config CosmosdbGremlinGraphConfig) CosmosdbGremlinGraph
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig">CosmosdbGremlinGraphConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig">CosmosdbGremlinGraphConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putAutoscaleSettings">PutAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putConflictResolutionPolicy">PutConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putIndexPolicy">PutIndexPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putUniqueKey">PutUniqueKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetAutoscaleSettings">ResetAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetConflictResolutionPolicy">ResetConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetIndexPolicy">ResetIndexPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetPartitionKeyVersion">ResetPartitionKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetUniqueKey">ResetUniqueKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoscaleSettings` <a name="PutAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putAutoscaleSettings"></a>

```go
func PutAutoscaleSettings(value CosmosdbGremlinGraphAutoscaleSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putAutoscaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

---

##### `PutConflictResolutionPolicy` <a name="PutConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putConflictResolutionPolicy"></a>

```go
func PutConflictResolutionPolicy(value CosmosdbGremlinGraphConflictResolutionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putConflictResolutionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

---

##### `PutIndexPolicy` <a name="PutIndexPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putIndexPolicy"></a>

```go
func PutIndexPolicy(value CosmosdbGremlinGraphIndexPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putIndexPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putTimeouts"></a>

```go
func PutTimeouts(value CosmosdbGremlinGraphTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a>

---

##### `PutUniqueKey` <a name="PutUniqueKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putUniqueKey"></a>

```go
func PutUniqueKey(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putUniqueKey.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoscaleSettings` <a name="ResetAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetAutoscaleSettings"></a>

```go
func ResetAutoscaleSettings()
```

##### `ResetConflictResolutionPolicy` <a name="ResetConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetConflictResolutionPolicy"></a>

```go
func ResetConflictResolutionPolicy()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexPolicy` <a name="ResetIndexPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetIndexPolicy"></a>

```go
func ResetIndexPolicy()
```

##### `ResetPartitionKeyVersion` <a name="ResetPartitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetPartitionKeyVersion"></a>

```go
func ResetPartitionKeyVersion()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUniqueKey` <a name="ResetUniqueKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetUniqueKey"></a>

```go
func ResetUniqueKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.CosmosdbGremlinGraph_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.CosmosdbGremlinGraph_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.CosmosdbGremlinGraph_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettings">AutoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference">CosmosdbGremlinGraphAutoscaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicy">ConflictResolutionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference">CosmosdbGremlinGraphConflictResolutionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicy">IndexPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference">CosmosdbGremlinGraphIndexPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference">CosmosdbGremlinGraphTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKey">UniqueKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList">CosmosdbGremlinGraphUniqueKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettingsInput">AutoscaleSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicyInput">ConflictResolutionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicyInput">IndexPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPathInput">PartitionKeyPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersionInput">PartitionKeyVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKeyInput">UniqueKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPath">PartitionKeyPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersion">PartitionKeyVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoscaleSettings`<sup>Required</sup> <a name="AutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettings"></a>

```go
func AutoscaleSettings() CosmosdbGremlinGraphAutoscaleSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference">CosmosdbGremlinGraphAutoscaleSettingsOutputReference</a>

---

##### `ConflictResolutionPolicy`<sup>Required</sup> <a name="ConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicy"></a>

```go
func ConflictResolutionPolicy() CosmosdbGremlinGraphConflictResolutionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference">CosmosdbGremlinGraphConflictResolutionPolicyOutputReference</a>

---

##### `IndexPolicy`<sup>Required</sup> <a name="IndexPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicy"></a>

```go
func IndexPolicy() CosmosdbGremlinGraphIndexPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference">CosmosdbGremlinGraphIndexPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeouts"></a>

```go
func Timeouts() CosmosdbGremlinGraphTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference">CosmosdbGremlinGraphTimeoutsOutputReference</a>

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKey"></a>

```go
func UniqueKey() CosmosdbGremlinGraphUniqueKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList">CosmosdbGremlinGraphUniqueKeyList</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `AutoscaleSettingsInput`<sup>Optional</sup> <a name="AutoscaleSettingsInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettingsInput"></a>

```go
func AutoscaleSettingsInput() CosmosdbGremlinGraphAutoscaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

---

##### `ConflictResolutionPolicyInput`<sup>Optional</sup> <a name="ConflictResolutionPolicyInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicyInput"></a>

```go
func ConflictResolutionPolicyInput() CosmosdbGremlinGraphConflictResolutionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexPolicyInput`<sup>Optional</sup> <a name="IndexPolicyInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicyInput"></a>

```go
func IndexPolicyInput() CosmosdbGremlinGraphIndexPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionKeyPathInput`<sup>Optional</sup> <a name="PartitionKeyPathInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPathInput"></a>

```go
func PartitionKeyPathInput() *string
```

- *Type:* *string

---

##### `PartitionKeyVersionInput`<sup>Optional</sup> <a name="PartitionKeyVersionInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersionInput"></a>

```go
func PartitionKeyVersionInput() *f64
```

- *Type:* *f64

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UniqueKeyInput`<sup>Optional</sup> <a name="UniqueKeyInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKeyInput"></a>

```go
func UniqueKeyInput() interface{}
```

- *Type:* interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartitionKeyPath`<sup>Required</sup> <a name="PartitionKeyPath" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPath"></a>

```go
func PartitionKeyPath() *string
```

- *Type:* *string

---

##### `PartitionKeyVersion`<sup>Required</sup> <a name="PartitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersion"></a>

```go
func PartitionKeyVersion() *f64
```

- *Type:* *f64

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbGremlinGraphAutoscaleSettings <a name="CosmosdbGremlinGraphAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

&cosmosdbgremlingraph.CosmosdbGremlinGraphAutoscaleSettings {
	MaxThroughput: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings.property.maxThroughput">MaxThroughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#max_throughput CosmosdbGremlinGraph#max_throughput}. |

---

##### `MaxThroughput`<sup>Optional</sup> <a name="MaxThroughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings.property.maxThroughput"></a>

```go
MaxThroughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#max_throughput CosmosdbGremlinGraph#max_throughput}.

---

### CosmosdbGremlinGraphConfig <a name="CosmosdbGremlinGraphConfig" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

&cosmosdbgremlingraph.CosmosdbGremlinGraphConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountName: *string,
	DatabaseName: *string,
	Name: *string,
	PartitionKeyPath: *string,
	ResourceGroupName: *string,
	AutoscaleSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings,
	ConflictResolutionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy,
	DefaultTtl: *f64,
	Id: *string,
	IndexPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy,
	PartitionKeyVersion: *f64,
	Throughput: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts,
	UniqueKey: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#account_name CosmosdbGremlinGraph#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#database_name CosmosdbGremlinGraph#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#name CosmosdbGremlinGraph#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyPath">PartitionKeyPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#partition_key_path CosmosdbGremlinGraph#partition_key_path}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#resource_group_name CosmosdbGremlinGraph#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.autoscaleSettings">AutoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.conflictResolutionPolicy">ConflictResolutionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a></code> | conflict_resolution_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#default_ttl CosmosdbGremlinGraph#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#id CosmosdbGremlinGraph#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.indexPolicy">IndexPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a></code> | index_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyVersion">PartitionKeyVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#partition_key_version CosmosdbGremlinGraph#partition_key_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#throughput CosmosdbGremlinGraph#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.uniqueKey">UniqueKey</a></code> | <code>interface{}</code> | unique_key block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#account_name CosmosdbGremlinGraph#account_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#database_name CosmosdbGremlinGraph#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#name CosmosdbGremlinGraph#name}.

---

##### `PartitionKeyPath`<sup>Required</sup> <a name="PartitionKeyPath" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyPath"></a>

```go
PartitionKeyPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#partition_key_path CosmosdbGremlinGraph#partition_key_path}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#resource_group_name CosmosdbGremlinGraph#resource_group_name}.

---

##### `AutoscaleSettings`<sup>Optional</sup> <a name="AutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.autoscaleSettings"></a>

```go
AutoscaleSettings CosmosdbGremlinGraphAutoscaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#autoscale_settings CosmosdbGremlinGraph#autoscale_settings}

---

##### `ConflictResolutionPolicy`<sup>Optional</sup> <a name="ConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.conflictResolutionPolicy"></a>

```go
ConflictResolutionPolicy CosmosdbGremlinGraphConflictResolutionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

conflict_resolution_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_policy CosmosdbGremlinGraph#conflict_resolution_policy}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#default_ttl CosmosdbGremlinGraph#default_ttl}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#id CosmosdbGremlinGraph#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexPolicy`<sup>Optional</sup> <a name="IndexPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.indexPolicy"></a>

```go
IndexPolicy CosmosdbGremlinGraphIndexPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

index_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#index_policy CosmosdbGremlinGraph#index_policy}

---

##### `PartitionKeyVersion`<sup>Optional</sup> <a name="PartitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyVersion"></a>

```go
PartitionKeyVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#partition_key_version CosmosdbGremlinGraph#partition_key_version}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#throughput CosmosdbGremlinGraph#throughput}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.timeouts"></a>

```go
Timeouts CosmosdbGremlinGraphTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#timeouts CosmosdbGremlinGraph#timeouts}

---

##### `UniqueKey`<sup>Optional</sup> <a name="UniqueKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.uniqueKey"></a>

```go
UniqueKey interface{}
```

- *Type:* interface{}

unique_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#unique_key CosmosdbGremlinGraph#unique_key}

---

### CosmosdbGremlinGraphConflictResolutionPolicy <a name="CosmosdbGremlinGraphConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

&cosmosdbgremlingraph.CosmosdbGremlinGraphConflictResolutionPolicy {
	Mode: *string,
	ConflictResolutionPath: *string,
	ConflictResolutionProcedure: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#mode CosmosdbGremlinGraph#mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionPath">ConflictResolutionPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_path CosmosdbGremlinGraph#conflict_resolution_path}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionProcedure">ConflictResolutionProcedure</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_procedure CosmosdbGremlinGraph#conflict_resolution_procedure}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#mode CosmosdbGremlinGraph#mode}.

---

##### `ConflictResolutionPath`<sup>Optional</sup> <a name="ConflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionPath"></a>

```go
ConflictResolutionPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_path CosmosdbGremlinGraph#conflict_resolution_path}.

---

##### `ConflictResolutionProcedure`<sup>Optional</sup> <a name="ConflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionProcedure"></a>

```go
ConflictResolutionProcedure *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_procedure CosmosdbGremlinGraph#conflict_resolution_procedure}.

---

### CosmosdbGremlinGraphIndexPolicy <a name="CosmosdbGremlinGraphIndexPolicy" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

&cosmosdbgremlingraph.CosmosdbGremlinGraphIndexPolicy {
	IndexingMode: *string,
	Automatic: interface{},
	CompositeIndex: interface{},
	ExcludedPaths: *[]*string,
	IncludedPaths: *[]*string,
	SpatialIndex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.indexingMode">IndexingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#indexing_mode CosmosdbGremlinGraph#indexing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.automatic">Automatic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#automatic CosmosdbGremlinGraph#automatic}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.compositeIndex">CompositeIndex</a></code> | <code>interface{}</code> | composite_index block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.excludedPaths">ExcludedPaths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#excluded_paths CosmosdbGremlinGraph#excluded_paths}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.includedPaths">IncludedPaths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#included_paths CosmosdbGremlinGraph#included_paths}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.spatialIndex">SpatialIndex</a></code> | <code>interface{}</code> | spatial_index block. |

---

##### `IndexingMode`<sup>Required</sup> <a name="IndexingMode" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.indexingMode"></a>

```go
IndexingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#indexing_mode CosmosdbGremlinGraph#indexing_mode}.

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.automatic"></a>

```go
Automatic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#automatic CosmosdbGremlinGraph#automatic}.

---

##### `CompositeIndex`<sup>Optional</sup> <a name="CompositeIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.compositeIndex"></a>

```go
CompositeIndex interface{}
```

- *Type:* interface{}

composite_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#composite_index CosmosdbGremlinGraph#composite_index}

---

##### `ExcludedPaths`<sup>Optional</sup> <a name="ExcludedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.excludedPaths"></a>

```go
ExcludedPaths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#excluded_paths CosmosdbGremlinGraph#excluded_paths}.

---

##### `IncludedPaths`<sup>Optional</sup> <a name="IncludedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.includedPaths"></a>

```go
IncludedPaths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#included_paths CosmosdbGremlinGraph#included_paths}.

---

##### `SpatialIndex`<sup>Optional</sup> <a name="SpatialIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.spatialIndex"></a>

```go
SpatialIndex interface{}
```

- *Type:* interface{}

spatial_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#spatial_index CosmosdbGremlinGraph#spatial_index}

---

### CosmosdbGremlinGraphIndexPolicyCompositeIndex <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

&cosmosdbgremlingraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex {
	Index: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex.property.index">Index</a></code> | <code>interface{}</code> | index block. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex.property.index"></a>

```go
Index interface{}
```

- *Type:* interface{}

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#index CosmosdbGremlinGraph#index}

---

### CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

&cosmosdbgremlingraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex {
	Order: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.order">Order</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#order CosmosdbGremlinGraph#order}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}. |

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.order"></a>

```go
Order *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#order CosmosdbGremlinGraph#order}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}.

---

### CosmosdbGremlinGraphIndexPolicySpatialIndex <a name="CosmosdbGremlinGraphIndexPolicySpatialIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

&cosmosdbgremlingraph.CosmosdbGremlinGraphIndexPolicySpatialIndex {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}.

---

### CosmosdbGremlinGraphTimeouts <a name="CosmosdbGremlinGraphTimeouts" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

&cosmosdbgremlingraph.CosmosdbGremlinGraphTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#create CosmosdbGremlinGraph#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#delete CosmosdbGremlinGraph#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#read CosmosdbGremlinGraph#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#update CosmosdbGremlinGraph#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#create CosmosdbGremlinGraph#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#delete CosmosdbGremlinGraph#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#read CosmosdbGremlinGraph#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#update CosmosdbGremlinGraph#update}.

---

### CosmosdbGremlinGraphUniqueKey <a name="CosmosdbGremlinGraphUniqueKey" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

&cosmosdbgremlingraph.CosmosdbGremlinGraphUniqueKey {
	Paths: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey.property.paths">Paths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#paths CosmosdbGremlinGraph#paths}. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_gremlin_graph#paths CosmosdbGremlinGraph#paths}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbGremlinGraphAutoscaleSettingsOutputReference <a name="CosmosdbGremlinGraphAutoscaleSettingsOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphAutoscaleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbGremlinGraphAutoscaleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resetMaxThroughput">ResetMaxThroughput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxThroughput` <a name="ResetMaxThroughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resetMaxThroughput"></a>

```go
func ResetMaxThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughputInput">MaxThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughput">MaxThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxThroughputInput`<sup>Optional</sup> <a name="MaxThroughputInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughputInput"></a>

```go
func MaxThroughputInput() *f64
```

- *Type:* *f64

---

##### `MaxThroughput`<sup>Required</sup> <a name="MaxThroughput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```go
func MaxThroughput() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbGremlinGraphAutoscaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

---


### CosmosdbGremlinGraphConflictResolutionPolicyOutputReference <a name="CosmosdbGremlinGraphConflictResolutionPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphConflictResolutionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbGremlinGraphConflictResolutionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionPath">ResetConflictResolutionPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionProcedure">ResetConflictResolutionProcedure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConflictResolutionPath` <a name="ResetConflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionPath"></a>

```go
func ResetConflictResolutionPath()
```

##### `ResetConflictResolutionProcedure` <a name="ResetConflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionProcedure"></a>

```go
func ResetConflictResolutionProcedure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPathInput">ConflictResolutionPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedureInput">ConflictResolutionProcedureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPath">ConflictResolutionPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedure">ConflictResolutionProcedure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConflictResolutionPathInput`<sup>Optional</sup> <a name="ConflictResolutionPathInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPathInput"></a>

```go
func ConflictResolutionPathInput() *string
```

- *Type:* *string

---

##### `ConflictResolutionProcedureInput`<sup>Optional</sup> <a name="ConflictResolutionProcedureInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedureInput"></a>

```go
func ConflictResolutionProcedureInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ConflictResolutionPath`<sup>Required</sup> <a name="ConflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPath"></a>

```go
func ConflictResolutionPath() *string
```

- *Type:* *string

---

##### `ConflictResolutionProcedure`<sup>Required</sup> <a name="ConflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedure"></a>

```go
func ConflictResolutionProcedure() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbGremlinGraphConflictResolutionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.get"></a>

```go
func Get(index *f64) CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexList <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexList" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphIndexPolicyCompositeIndexList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CosmosdbGremlinGraphIndexPolicyCompositeIndexList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.get"></a>

```go
func Get(index *f64) CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.putIndex">PutIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIndex` <a name="PutIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.putIndex"></a>

```go
func PutIndex(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.putIndex.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.index">Index</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.indexInput">IndexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.index"></a>

```go
func Index() CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList</a>

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.indexInput"></a>

```go
func IndexInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbGremlinGraphIndexPolicyOutputReference <a name="CosmosdbGremlinGraphIndexPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphIndexPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbGremlinGraphIndexPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putCompositeIndex">PutCompositeIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putSpatialIndex">PutSpatialIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetAutomatic">ResetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetCompositeIndex">ResetCompositeIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetExcludedPaths">ResetExcludedPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetIncludedPaths">ResetIncludedPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetSpatialIndex">ResetSpatialIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompositeIndex` <a name="PutCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putCompositeIndex"></a>

```go
func PutCompositeIndex(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putCompositeIndex.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSpatialIndex` <a name="PutSpatialIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putSpatialIndex"></a>

```go
func PutSpatialIndex(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putSpatialIndex.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetAutomatic"></a>

```go
func ResetAutomatic()
```

##### `ResetCompositeIndex` <a name="ResetCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetCompositeIndex"></a>

```go
func ResetCompositeIndex()
```

##### `ResetExcludedPaths` <a name="ResetExcludedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetExcludedPaths"></a>

```go
func ResetExcludedPaths()
```

##### `ResetIncludedPaths` <a name="ResetIncludedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetIncludedPaths"></a>

```go
func ResetIncludedPaths()
```

##### `ResetSpatialIndex` <a name="ResetSpatialIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetSpatialIndex"></a>

```go
func ResetSpatialIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndex">CompositeIndex</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndex">SpatialIndex</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList">CosmosdbGremlinGraphIndexPolicySpatialIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automaticInput">AutomaticInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndexInput">CompositeIndexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPathsInput">ExcludedPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPathsInput">IncludedPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingModeInput">IndexingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndexInput">SpatialIndexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automatic">Automatic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPaths">ExcludedPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPaths">IncludedPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingMode">IndexingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompositeIndex`<sup>Required</sup> <a name="CompositeIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndex"></a>

```go
func CompositeIndex() CosmosdbGremlinGraphIndexPolicyCompositeIndexList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexList</a>

---

##### `SpatialIndex`<sup>Required</sup> <a name="SpatialIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndex"></a>

```go
func SpatialIndex() CosmosdbGremlinGraphIndexPolicySpatialIndexList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList">CosmosdbGremlinGraphIndexPolicySpatialIndexList</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automaticInput"></a>

```go
func AutomaticInput() interface{}
```

- *Type:* interface{}

---

##### `CompositeIndexInput`<sup>Optional</sup> <a name="CompositeIndexInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndexInput"></a>

```go
func CompositeIndexInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedPathsInput`<sup>Optional</sup> <a name="ExcludedPathsInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPathsInput"></a>

```go
func ExcludedPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedPathsInput`<sup>Optional</sup> <a name="IncludedPathsInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPathsInput"></a>

```go
func IncludedPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IndexingModeInput`<sup>Optional</sup> <a name="IndexingModeInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingModeInput"></a>

```go
func IndexingModeInput() *string
```

- *Type:* *string

---

##### `SpatialIndexInput`<sup>Optional</sup> <a name="SpatialIndexInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndexInput"></a>

```go
func SpatialIndexInput() interface{}
```

- *Type:* interface{}

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automatic"></a>

```go
func Automatic() interface{}
```

- *Type:* interface{}

---

##### `ExcludedPaths`<sup>Required</sup> <a name="ExcludedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPaths"></a>

```go
func ExcludedPaths() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedPaths`<sup>Required</sup> <a name="IncludedPaths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPaths"></a>

```go
func IncludedPaths() *[]*string
```

- *Type:* *[]*string

---

##### `IndexingMode`<sup>Required</sup> <a name="IndexingMode" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingMode"></a>

```go
func IndexingMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() CosmosdbGremlinGraphIndexPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

---


### CosmosdbGremlinGraphIndexPolicySpatialIndexList <a name="CosmosdbGremlinGraphIndexPolicySpatialIndexList" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphIndexPolicySpatialIndexList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CosmosdbGremlinGraphIndexPolicySpatialIndexList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.get"></a>

```go
func Get(index *f64) CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference <a name="CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbGremlinGraphTimeoutsOutputReference <a name="CosmosdbGremlinGraphTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CosmosdbGremlinGraphTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbGremlinGraphUniqueKeyList <a name="CosmosdbGremlinGraphUniqueKeyList" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphUniqueKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CosmosdbGremlinGraphUniqueKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.get"></a>

```go
func Get(index *f64) CosmosdbGremlinGraphUniqueKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CosmosdbGremlinGraphUniqueKeyOutputReference <a name="CosmosdbGremlinGraphUniqueKeyOutputReference" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cosmosdbgremlingraph"

cosmosdbgremlingraph.NewCosmosdbGremlinGraphUniqueKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CosmosdbGremlinGraphUniqueKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



