# `azurerm_orbital_spacecraft`

Refer to the Terraform Registory for docs: [`azurerm_orbital_spacecraft`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft).

# `orbitalSpacecraft` Submodule <a name="`orbitalSpacecraft` Submodule" id="@cdktf/provider-azurerm.orbitalSpacecraft"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrbitalSpacecraft <a name="OrbitalSpacecraft" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft azurerm_orbital_spacecraft}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/orbitalspacecraft"

orbitalspacecraft.NewOrbitalSpacecraft(scope Construct, id *string, config OrbitalSpacecraftConfig) OrbitalSpacecraft
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig">OrbitalSpacecraftConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig">OrbitalSpacecraftConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks">PutLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLinks` <a name="PutLinks" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks"></a>

```go
func PutLinks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts"></a>

```go
func PutTimeouts(value OrbitalSpacecraftTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/orbitalspacecraft"

orbitalspacecraft.OrbitalSpacecraft_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/orbitalspacecraft"

orbitalspacecraft.OrbitalSpacecraft_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/orbitalspacecraft"

orbitalspacecraft.OrbitalSpacecraft_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.links">Links</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList">OrbitalSpacecraftLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference">OrbitalSpacecraftTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.linksInput">LinksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradIdInput">NoradIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLineInput">TitleLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElementsInput">TwoLineElementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradId">NoradId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLine">TitleLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElements">TwoLineElements</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.links"></a>

```go
func Links() OrbitalSpacecraftLinksList
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList">OrbitalSpacecraftLinksList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeouts"></a>

```go
func Timeouts() OrbitalSpacecraftTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference">OrbitalSpacecraftTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinksInput`<sup>Optional</sup> <a name="LinksInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.linksInput"></a>

```go
func LinksInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NoradIdInput`<sup>Optional</sup> <a name="NoradIdInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradIdInput"></a>

```go
func NoradIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TitleLineInput`<sup>Optional</sup> <a name="TitleLineInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLineInput"></a>

```go
func TitleLineInput() *string
```

- *Type:* *string

---

##### `TwoLineElementsInput`<sup>Optional</sup> <a name="TwoLineElementsInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElementsInput"></a>

```go
func TwoLineElementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NoradId`<sup>Required</sup> <a name="NoradId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradId"></a>

```go
func NoradId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TitleLine`<sup>Required</sup> <a name="TitleLine" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLine"></a>

```go
func TitleLine() *string
```

- *Type:* *string

---

##### `TwoLineElements`<sup>Required</sup> <a name="TwoLineElements" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElements"></a>

```go
func TwoLineElements() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrbitalSpacecraftConfig <a name="OrbitalSpacecraftConfig" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/orbitalspacecraft"

&orbitalspacecraft.OrbitalSpacecraftConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Links: interface{},
	Location: *string,
	Name: *string,
	NoradId: *string,
	ResourceGroupName: *string,
	TitleLine: *string,
	TwoLineElements: *[]*string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.orbitalSpacecraft.OrbitalSpacecraftTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.links">Links</a></code> | <code>interface{}</code> | links block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.noradId">NoradId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.titleLine">TitleLine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.twoLineElements">TwoLineElements</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.links"></a>

```go
Links interface{}
```

- *Type:* interface{}

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#links OrbitalSpacecraft#links}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}.

---

##### `NoradId`<sup>Required</sup> <a name="NoradId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.noradId"></a>

```go
NoradId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}.

---

##### `TitleLine`<sup>Required</sup> <a name="TitleLine" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.titleLine"></a>

```go
TitleLine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}.

---

##### `TwoLineElements`<sup>Required</sup> <a name="TwoLineElements" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.twoLineElements"></a>

```go
TwoLineElements *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.timeouts"></a>

```go
Timeouts OrbitalSpacecraftTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#timeouts OrbitalSpacecraft#timeouts}

---

### OrbitalSpacecraftLinks <a name="OrbitalSpacecraftLinks" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/orbitalspacecraft"

&orbitalspacecraft.OrbitalSpacecraftLinks {
	BandwidthMhz: *f64,
	CenterFrequencyMhz: *f64,
	Direction: *string,
	Name: *string,
	Polarization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.bandwidthMhz">BandwidthMhz</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#bandwidth_mhz OrbitalSpacecraft#bandwidth_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.centerFrequencyMhz">CenterFrequencyMhz</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#center_frequency_mhz OrbitalSpacecraft#center_frequency_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.direction">Direction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#direction OrbitalSpacecraft#direction}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.polarization">Polarization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#polarization OrbitalSpacecraft#polarization}. |

---

##### `BandwidthMhz`<sup>Required</sup> <a name="BandwidthMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.bandwidthMhz"></a>

```go
BandwidthMhz *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#bandwidth_mhz OrbitalSpacecraft#bandwidth_mhz}.

---

##### `CenterFrequencyMhz`<sup>Required</sup> <a name="CenterFrequencyMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.centerFrequencyMhz"></a>

```go
CenterFrequencyMhz *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#center_frequency_mhz OrbitalSpacecraft#center_frequency_mhz}.

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#direction OrbitalSpacecraft#direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}.

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.polarization"></a>

```go
Polarization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#polarization OrbitalSpacecraft#polarization}.

---

### OrbitalSpacecraftTimeouts <a name="OrbitalSpacecraftTimeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/orbitalspacecraft"

&orbitalspacecraft.OrbitalSpacecraftTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#create OrbitalSpacecraft#create}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#delete OrbitalSpacecraft#delete}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#read OrbitalSpacecraft#read}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#update OrbitalSpacecraft#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#create OrbitalSpacecraft#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#delete OrbitalSpacecraft#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#read OrbitalSpacecraft#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_spacecraft#update OrbitalSpacecraft#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrbitalSpacecraftLinksList <a name="OrbitalSpacecraftLinksList" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/orbitalspacecraft"

orbitalspacecraft.NewOrbitalSpacecraftLinksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OrbitalSpacecraftLinksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get"></a>

```go
func Get(index *f64) OrbitalSpacecraftLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OrbitalSpacecraftLinksOutputReference <a name="OrbitalSpacecraftLinksOutputReference" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/orbitalspacecraft"

orbitalspacecraft.NewOrbitalSpacecraftLinksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OrbitalSpacecraftLinksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhzInput">BandwidthMhzInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhzInput">CenterFrequencyMhzInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarizationInput">PolarizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhz">BandwidthMhz</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhz">CenterFrequencyMhz</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarization">Polarization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BandwidthMhzInput`<sup>Optional</sup> <a name="BandwidthMhzInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhzInput"></a>

```go
func BandwidthMhzInput() *f64
```

- *Type:* *f64

---

##### `CenterFrequencyMhzInput`<sup>Optional</sup> <a name="CenterFrequencyMhzInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhzInput"></a>

```go
func CenterFrequencyMhzInput() *f64
```

- *Type:* *f64

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolarizationInput`<sup>Optional</sup> <a name="PolarizationInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarizationInput"></a>

```go
func PolarizationInput() *string
```

- *Type:* *string

---

##### `BandwidthMhz`<sup>Required</sup> <a name="BandwidthMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhz"></a>

```go
func BandwidthMhz() *f64
```

- *Type:* *f64

---

##### `CenterFrequencyMhz`<sup>Required</sup> <a name="CenterFrequencyMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhz"></a>

```go
func CenterFrequencyMhz() *f64
```

- *Type:* *f64

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarization"></a>

```go
func Polarization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OrbitalSpacecraftTimeoutsOutputReference <a name="OrbitalSpacecraftTimeoutsOutputReference" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/orbitalspacecraft"

orbitalspacecraft.NewOrbitalSpacecraftTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrbitalSpacecraftTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



