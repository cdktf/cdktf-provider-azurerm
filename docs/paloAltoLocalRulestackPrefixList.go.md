# `paloAltoLocalRulestackPrefixList` Submodule <a name="`paloAltoLocalRulestackPrefixList` Submodule" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoLocalRulestackPrefixList <a name="PaloAltoLocalRulestackPrefixList" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list azurerm_palo_alto_local_rulestack_prefix_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackprefixlist"

paloaltolocalrulestackprefixlist.NewPaloAltoLocalRulestackPrefixList(scope Construct, id *string, config PaloAltoLocalRulestackPrefixListConfig) PaloAltoLocalRulestackPrefixList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig">PaloAltoLocalRulestackPrefixListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig">PaloAltoLocalRulestackPrefixListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetAuditComment">ResetAuditComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.putTimeouts"></a>

```go
func PutTimeouts(value PaloAltoLocalRulestackPrefixListTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts">PaloAltoLocalRulestackPrefixListTimeouts</a>

---

##### `ResetAuditComment` <a name="ResetAuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetAuditComment"></a>

```go
func ResetAuditComment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PaloAltoLocalRulestackPrefixList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackprefixlist"

paloaltolocalrulestackprefixlist.PaloAltoLocalRulestackPrefixList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackprefixlist"

paloaltolocalrulestackprefixlist.PaloAltoLocalRulestackPrefixList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackprefixlist"

paloaltolocalrulestackprefixlist.PaloAltoLocalRulestackPrefixList_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackprefixlist"

paloaltolocalrulestackprefixlist.PaloAltoLocalRulestackPrefixList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PaloAltoLocalRulestackPrefixList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PaloAltoLocalRulestackPrefixList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PaloAltoLocalRulestackPrefixList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoLocalRulestackPrefixList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference">PaloAltoLocalRulestackPrefixListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.auditCommentInput">AuditCommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.prefixListInput">PrefixListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.rulestackIdInput">RulestackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.auditComment">AuditComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.prefixList">PrefixList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.rulestackId">RulestackId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.timeouts"></a>

```go
func Timeouts() PaloAltoLocalRulestackPrefixListTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference">PaloAltoLocalRulestackPrefixListTimeoutsOutputReference</a>

---

##### `AuditCommentInput`<sup>Optional</sup> <a name="AuditCommentInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.auditCommentInput"></a>

```go
func AuditCommentInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrefixListInput`<sup>Optional</sup> <a name="PrefixListInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.prefixListInput"></a>

```go
func PrefixListInput() *[]*string
```

- *Type:* *[]*string

---

##### `RulestackIdInput`<sup>Optional</sup> <a name="RulestackIdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.rulestackIdInput"></a>

```go
func RulestackIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuditComment`<sup>Required</sup> <a name="AuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.auditComment"></a>

```go
func AuditComment() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrefixList`<sup>Required</sup> <a name="PrefixList" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.prefixList"></a>

```go
func PrefixList() *[]*string
```

- *Type:* *[]*string

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.rulestackId"></a>

```go
func RulestackId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoLocalRulestackPrefixListConfig <a name="PaloAltoLocalRulestackPrefixListConfig" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackprefixlist"

&paloaltolocalrulestackprefixlist.PaloAltoLocalRulestackPrefixListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PrefixList: *[]*string,
	RulestackId: *string,
	AuditComment: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#name PaloAltoLocalRulestackPrefixList#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.prefixList">PrefixList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#prefix_list PaloAltoLocalRulestackPrefixList#prefix_list}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.rulestackId">RulestackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#rulestack_id PaloAltoLocalRulestackPrefixList#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.auditComment">AuditComment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#audit_comment PaloAltoLocalRulestackPrefixList#audit_comment}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#description PaloAltoLocalRulestackPrefixList#description}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#id PaloAltoLocalRulestackPrefixList#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts">PaloAltoLocalRulestackPrefixListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#name PaloAltoLocalRulestackPrefixList#name}.

---

##### `PrefixList`<sup>Required</sup> <a name="PrefixList" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.prefixList"></a>

```go
PrefixList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#prefix_list PaloAltoLocalRulestackPrefixList#prefix_list}.

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.rulestackId"></a>

```go
RulestackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#rulestack_id PaloAltoLocalRulestackPrefixList#rulestack_id}.

---

##### `AuditComment`<sup>Optional</sup> <a name="AuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.auditComment"></a>

```go
AuditComment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#audit_comment PaloAltoLocalRulestackPrefixList#audit_comment}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#description PaloAltoLocalRulestackPrefixList#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#id PaloAltoLocalRulestackPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.timeouts"></a>

```go
Timeouts PaloAltoLocalRulestackPrefixListTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts">PaloAltoLocalRulestackPrefixListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#timeouts PaloAltoLocalRulestackPrefixList#timeouts}

---

### PaloAltoLocalRulestackPrefixListTimeouts <a name="PaloAltoLocalRulestackPrefixListTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackprefixlist"

&paloaltolocalrulestackprefixlist.PaloAltoLocalRulestackPrefixListTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#create PaloAltoLocalRulestackPrefixList#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#delete PaloAltoLocalRulestackPrefixList#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#read PaloAltoLocalRulestackPrefixList#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#update PaloAltoLocalRulestackPrefixList#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#create PaloAltoLocalRulestackPrefixList#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#delete PaloAltoLocalRulestackPrefixList#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#read PaloAltoLocalRulestackPrefixList#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/palo_alto_local_rulestack_prefix_list#update PaloAltoLocalRulestackPrefixList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoLocalRulestackPrefixListTimeoutsOutputReference <a name="PaloAltoLocalRulestackPrefixListTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackprefixlist"

paloaltolocalrulestackprefixlist.NewPaloAltoLocalRulestackPrefixListTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PaloAltoLocalRulestackPrefixListTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



