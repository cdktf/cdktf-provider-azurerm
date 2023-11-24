# `azurerm_cdn_frontdoor_route_disable_link_to_default_domain`

Refer to the Terraform Registory for docs: [`azurerm_cdn_frontdoor_route_disable_link_to_default_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain).

# `cdnFrontdoorRouteDisableLinkToDefaultDomain` Submodule <a name="`cdnFrontdoorRouteDisableLinkToDefaultDomain` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorRouteDisableLinkToDefaultDomain <a name="CdnFrontdoorRouteDisableLinkToDefaultDomain" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain azurerm_cdn_frontdoor_route_disable_link_to_default_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoorroutedisablelinktodefaultdomain"

cdnfrontdoorroutedisablelinktodefaultdomain.NewCdnFrontdoorRouteDisableLinkToDefaultDomain(scope Construct, id *string, config CdnFrontdoorRouteDisableLinkToDefaultDomainConfig) CdnFrontdoorRouteDisableLinkToDefaultDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig">CdnFrontdoorRouteDisableLinkToDefaultDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig">CdnFrontdoorRouteDisableLinkToDefaultDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts"></a>

```go
func PutTimeouts(value CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorRouteDisableLinkToDefaultDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoorroutedisablelinktodefaultdomain"

cdnfrontdoorroutedisablelinktodefaultdomain.CdnFrontdoorRouteDisableLinkToDefaultDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoorroutedisablelinktodefaultdomain"

cdnfrontdoorroutedisablelinktodefaultdomain.CdnFrontdoorRouteDisableLinkToDefaultDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoorroutedisablelinktodefaultdomain"

cdnfrontdoorroutedisablelinktodefaultdomain.CdnFrontdoorRouteDisableLinkToDefaultDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoorroutedisablelinktodefaultdomain"

cdnfrontdoorroutedisablelinktodefaultdomain.CdnFrontdoorRouteDisableLinkToDefaultDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CdnFrontdoorRouteDisableLinkToDefaultDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CdnFrontdoorRouteDisableLinkToDefaultDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CdnFrontdoorRouteDisableLinkToDefaultDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorRouteDisableLinkToDefaultDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIdsInput">CdnFrontdoorCustomDomainIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteIdInput">CdnFrontdoorRouteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIds">CdnFrontdoorCustomDomainIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteId">CdnFrontdoorRouteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeouts"></a>

```go
func Timeouts() CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference</a>

---

##### `CdnFrontdoorCustomDomainIdsInput`<sup>Optional</sup> <a name="CdnFrontdoorCustomDomainIdsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIdsInput"></a>

```go
func CdnFrontdoorCustomDomainIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CdnFrontdoorRouteIdInput`<sup>Optional</sup> <a name="CdnFrontdoorRouteIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteIdInput"></a>

```go
func CdnFrontdoorRouteIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CdnFrontdoorCustomDomainIds`<sup>Required</sup> <a name="CdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIds"></a>

```go
func CdnFrontdoorCustomDomainIds() *[]*string
```

- *Type:* *[]*string

---

##### `CdnFrontdoorRouteId`<sup>Required</sup> <a name="CdnFrontdoorRouteId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteId"></a>

```go
func CdnFrontdoorRouteId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorRouteDisableLinkToDefaultDomainConfig <a name="CdnFrontdoorRouteDisableLinkToDefaultDomainConfig" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoorroutedisablelinktodefaultdomain"

&cdnfrontdoorroutedisablelinktodefaultdomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CdnFrontdoorCustomDomainIds: *[]*string,
	CdnFrontdoorRouteId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorCustomDomainIds">CdnFrontdoorCustomDomainIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_custom_domain_ids CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_custom_domain_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorRouteId">CdnFrontdoorRouteId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_route_id CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_route_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#id CdnFrontdoorRouteDisableLinkToDefaultDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CdnFrontdoorCustomDomainIds`<sup>Required</sup> <a name="CdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorCustomDomainIds"></a>

```go
CdnFrontdoorCustomDomainIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_custom_domain_ids CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_custom_domain_ids}.

---

##### `CdnFrontdoorRouteId`<sup>Required</sup> <a name="CdnFrontdoorRouteId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorRouteId"></a>

```go
CdnFrontdoorRouteId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_route_id CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_route_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#id CdnFrontdoorRouteDisableLinkToDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.timeouts"></a>

```go
Timeouts CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#timeouts CdnFrontdoorRouteDisableLinkToDefaultDomain#timeouts}

---

### CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts <a name="CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoorroutedisablelinktodefaultdomain"

&cdnfrontdoorroutedisablelinktodefaultdomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#create CdnFrontdoorRouteDisableLinkToDefaultDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#delete CdnFrontdoorRouteDisableLinkToDefaultDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#read CdnFrontdoorRouteDisableLinkToDefaultDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#update CdnFrontdoorRouteDisableLinkToDefaultDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#create CdnFrontdoorRouteDisableLinkToDefaultDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#delete CdnFrontdoorRouteDisableLinkToDefaultDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#read CdnFrontdoorRouteDisableLinkToDefaultDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#update CdnFrontdoorRouteDisableLinkToDefaultDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference <a name="CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoorroutedisablelinktodefaultdomain"

cdnfrontdoorroutedisablelinktodefaultdomain.NewCdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



