# `mysqlFlexibleServerFirewallRule` Submodule <a name="`mysqlFlexibleServerFirewallRule` Submodule" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlFlexibleServerFirewallRule <a name="MysqlFlexibleServerFirewallRule" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule azurerm_mysql_flexible_server_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.Initializer"></a>

```typescript
import { mysqlFlexibleServerFirewallRule } from '@cdktf/provider-azurerm'

new mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule(scope: Construct, id: string, config: MysqlFlexibleServerFirewallRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig">MysqlFlexibleServerFirewallRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig">MysqlFlexibleServerFirewallRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.putTimeouts"></a>

```typescript
public putTimeouts(value: MysqlFlexibleServerFirewallRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts">MysqlFlexibleServerFirewallRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlFlexibleServerFirewallRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isConstruct"></a>

```typescript
import { mysqlFlexibleServerFirewallRule } from '@cdktf/provider-azurerm'

mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isTerraformElement"></a>

```typescript
import { mysqlFlexibleServerFirewallRule } from '@cdktf/provider-azurerm'

mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isTerraformResource"></a>

```typescript
import { mysqlFlexibleServerFirewallRule } from '@cdktf/provider-azurerm'

mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.generateConfigForImport"></a>

```typescript
import { mysqlFlexibleServerFirewallRule } from '@cdktf/provider-azurerm'

mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MysqlFlexibleServerFirewallRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MysqlFlexibleServerFirewallRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MysqlFlexibleServerFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlFlexibleServerFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference">MysqlFlexibleServerFirewallRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.endIpAddressInput">endIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.startIpAddressInput">startIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts">MysqlFlexibleServerFirewallRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.endIpAddress">endIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.startIpAddress">startIpAddress</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlFlexibleServerFirewallRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference">MysqlFlexibleServerFirewallRuleTimeoutsOutputReference</a>

---

##### `endIpAddressInput`<sup>Optional</sup> <a name="endIpAddressInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.endIpAddressInput"></a>

```typescript
public readonly endIpAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `startIpAddressInput`<sup>Optional</sup> <a name="startIpAddressInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.startIpAddressInput"></a>

```typescript
public readonly startIpAddressInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MysqlFlexibleServerFirewallRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts">MysqlFlexibleServerFirewallRuleTimeouts</a>

---

##### `endIpAddress`<sup>Required</sup> <a name="endIpAddress" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.endIpAddress"></a>

```typescript
public readonly endIpAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `startIpAddress`<sup>Required</sup> <a name="startIpAddress" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.startIpAddress"></a>

```typescript
public readonly startIpAddress: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlFlexibleServerFirewallRuleConfig <a name="MysqlFlexibleServerFirewallRuleConfig" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.Initializer"></a>

```typescript
import { mysqlFlexibleServerFirewallRule } from '@cdktf/provider-azurerm'

const mysqlFlexibleServerFirewallRuleConfig: mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.endIpAddress">endIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#end_ip_address MysqlFlexibleServerFirewallRule#end_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#name MysqlFlexibleServerFirewallRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#resource_group_name MysqlFlexibleServerFirewallRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#server_name MysqlFlexibleServerFirewallRule#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.startIpAddress">startIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#start_ip_address MysqlFlexibleServerFirewallRule#start_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#id MysqlFlexibleServerFirewallRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts">MysqlFlexibleServerFirewallRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endIpAddress`<sup>Required</sup> <a name="endIpAddress" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.endIpAddress"></a>

```typescript
public readonly endIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#end_ip_address MysqlFlexibleServerFirewallRule#end_ip_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#name MysqlFlexibleServerFirewallRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#resource_group_name MysqlFlexibleServerFirewallRule#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#server_name MysqlFlexibleServerFirewallRule#server_name}.

---

##### `startIpAddress`<sup>Required</sup> <a name="startIpAddress" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.startIpAddress"></a>

```typescript
public readonly startIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#start_ip_address MysqlFlexibleServerFirewallRule#start_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#id MysqlFlexibleServerFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlFlexibleServerFirewallRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts">MysqlFlexibleServerFirewallRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#timeouts MysqlFlexibleServerFirewallRule#timeouts}

---

### MysqlFlexibleServerFirewallRuleTimeouts <a name="MysqlFlexibleServerFirewallRuleTimeouts" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts.Initializer"></a>

```typescript
import { mysqlFlexibleServerFirewallRule } from '@cdktf/provider-azurerm'

const mysqlFlexibleServerFirewallRuleTimeouts: mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#create MysqlFlexibleServerFirewallRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#delete MysqlFlexibleServerFirewallRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#read MysqlFlexibleServerFirewallRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#update MysqlFlexibleServerFirewallRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#create MysqlFlexibleServerFirewallRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#delete MysqlFlexibleServerFirewallRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#read MysqlFlexibleServerFirewallRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mysql_flexible_server_firewall_rule#update MysqlFlexibleServerFirewallRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlFlexibleServerFirewallRuleTimeoutsOutputReference <a name="MysqlFlexibleServerFirewallRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { mysqlFlexibleServerFirewallRule } from '@cdktf/provider-azurerm'

new mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts">MysqlFlexibleServerFirewallRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MysqlFlexibleServerFirewallRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mysqlFlexibleServerFirewallRule.MysqlFlexibleServerFirewallRuleTimeouts">MysqlFlexibleServerFirewallRuleTimeouts</a>

---



