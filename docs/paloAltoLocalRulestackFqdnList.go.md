# `paloAltoLocalRulestackFqdnList` Submodule <a name="`paloAltoLocalRulestackFqdnList` Submodule" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoLocalRulestackFqdnList <a name="PaloAltoLocalRulestackFqdnList" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list azurerm_palo_alto_local_rulestack_fqdn_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackfqdnlist"

paloaltolocalrulestackfqdnlist.NewPaloAltoLocalRulestackFqdnList(scope Construct, id *string, config PaloAltoLocalRulestackFqdnListConfig) PaloAltoLocalRulestackFqdnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig">PaloAltoLocalRulestackFqdnListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig">PaloAltoLocalRulestackFqdnListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetAuditComment">ResetAuditComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.putTimeouts"></a>

```go
func PutTimeouts(value PaloAltoLocalRulestackFqdnListTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts">PaloAltoLocalRulestackFqdnListTimeouts</a>

---

##### `ResetAuditComment` <a name="ResetAuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetAuditComment"></a>

```go
func ResetAuditComment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PaloAltoLocalRulestackFqdnList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackfqdnlist"

paloaltolocalrulestackfqdnlist.PaloAltoLocalRulestackFqdnList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackfqdnlist"

paloaltolocalrulestackfqdnlist.PaloAltoLocalRulestackFqdnList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackfqdnlist"

paloaltolocalrulestackfqdnlist.PaloAltoLocalRulestackFqdnList_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackfqdnlist"

paloaltolocalrulestackfqdnlist.PaloAltoLocalRulestackFqdnList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PaloAltoLocalRulestackFqdnList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PaloAltoLocalRulestackFqdnList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PaloAltoLocalRulestackFqdnList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoLocalRulestackFqdnList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference">PaloAltoLocalRulestackFqdnListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.auditCommentInput">AuditCommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fullyQualifiedDomainNamesInput">FullyQualifiedDomainNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.rulestackIdInput">RulestackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.auditComment">AuditComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fullyQualifiedDomainNames">FullyQualifiedDomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.rulestackId">RulestackId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.timeouts"></a>

```go
func Timeouts() PaloAltoLocalRulestackFqdnListTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference">PaloAltoLocalRulestackFqdnListTimeoutsOutputReference</a>

---

##### `AuditCommentInput`<sup>Optional</sup> <a name="AuditCommentInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.auditCommentInput"></a>

```go
func AuditCommentInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FullyQualifiedDomainNamesInput`<sup>Optional</sup> <a name="FullyQualifiedDomainNamesInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fullyQualifiedDomainNamesInput"></a>

```go
func FullyQualifiedDomainNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RulestackIdInput`<sup>Optional</sup> <a name="RulestackIdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.rulestackIdInput"></a>

```go
func RulestackIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuditComment`<sup>Required</sup> <a name="AuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.auditComment"></a>

```go
func AuditComment() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FullyQualifiedDomainNames`<sup>Required</sup> <a name="FullyQualifiedDomainNames" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fullyQualifiedDomainNames"></a>

```go
func FullyQualifiedDomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.rulestackId"></a>

```go
func RulestackId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoLocalRulestackFqdnListConfig <a name="PaloAltoLocalRulestackFqdnListConfig" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackfqdnlist"

&paloaltolocalrulestackfqdnlist.PaloAltoLocalRulestackFqdnListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FullyQualifiedDomainNames: *[]*string,
	Name: *string,
	RulestackId: *string,
	AuditComment: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.fullyQualifiedDomainNames">FullyQualifiedDomainNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#fully_qualified_domain_names PaloAltoLocalRulestackFqdnList#fully_qualified_domain_names}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#name PaloAltoLocalRulestackFqdnList#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.rulestackId">RulestackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#rulestack_id PaloAltoLocalRulestackFqdnList#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.auditComment">AuditComment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#audit_comment PaloAltoLocalRulestackFqdnList#audit_comment}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#description PaloAltoLocalRulestackFqdnList#description}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#id PaloAltoLocalRulestackFqdnList#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts">PaloAltoLocalRulestackFqdnListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FullyQualifiedDomainNames`<sup>Required</sup> <a name="FullyQualifiedDomainNames" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.fullyQualifiedDomainNames"></a>

```go
FullyQualifiedDomainNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#fully_qualified_domain_names PaloAltoLocalRulestackFqdnList#fully_qualified_domain_names}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#name PaloAltoLocalRulestackFqdnList#name}.

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.rulestackId"></a>

```go
RulestackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#rulestack_id PaloAltoLocalRulestackFqdnList#rulestack_id}.

---

##### `AuditComment`<sup>Optional</sup> <a name="AuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.auditComment"></a>

```go
AuditComment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#audit_comment PaloAltoLocalRulestackFqdnList#audit_comment}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#description PaloAltoLocalRulestackFqdnList#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#id PaloAltoLocalRulestackFqdnList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.timeouts"></a>

```go
Timeouts PaloAltoLocalRulestackFqdnListTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts">PaloAltoLocalRulestackFqdnListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#timeouts PaloAltoLocalRulestackFqdnList#timeouts}

---

### PaloAltoLocalRulestackFqdnListTimeouts <a name="PaloAltoLocalRulestackFqdnListTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackfqdnlist"

&paloaltolocalrulestackfqdnlist.PaloAltoLocalRulestackFqdnListTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#create PaloAltoLocalRulestackFqdnList#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#delete PaloAltoLocalRulestackFqdnList#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#read PaloAltoLocalRulestackFqdnList#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#update PaloAltoLocalRulestackFqdnList#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#create PaloAltoLocalRulestackFqdnList#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#delete PaloAltoLocalRulestackFqdnList#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#read PaloAltoLocalRulestackFqdnList#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/palo_alto_local_rulestack_fqdn_list#update PaloAltoLocalRulestackFqdnList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoLocalRulestackFqdnListTimeoutsOutputReference <a name="PaloAltoLocalRulestackFqdnListTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackfqdnlist"

paloaltolocalrulestackfqdnlist.NewPaloAltoLocalRulestackFqdnListTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PaloAltoLocalRulestackFqdnListTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



