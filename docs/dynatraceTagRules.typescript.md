# `dynatraceTagRules` Submodule <a name="`dynatraceTagRules` Submodule" id="@cdktf/provider-azurerm.dynatraceTagRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynatraceTagRules <a name="DynatraceTagRules" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules azurerm_dynatrace_tag_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

new dynatraceTagRules.DynatraceTagRules(scope: Construct, id: string, config: DynatraceTagRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig">DynatraceTagRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig">DynatraceTagRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule">putLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule">putMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetLogRule">resetLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetMetricRule">resetMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogRule` <a name="putLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule"></a>

```typescript
public putLogRule(value: DynatraceTagRulesLogRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---

##### `putMetricRule` <a name="putMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule"></a>

```typescript
public putMetricRule(value: DynatraceTagRulesMetricRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts"></a>

```typescript
public putTimeouts(value: DynatraceTagRulesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogRule` <a name="resetLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetLogRule"></a>

```typescript
public resetLogRule(): void
```

##### `resetMetricRule` <a name="resetMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetMetricRule"></a>

```typescript
public resetMetricRule(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DynatraceTagRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

dynatraceTagRules.DynatraceTagRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

dynatraceTagRules.DynatraceTagRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

dynatraceTagRules.DynatraceTagRules.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

dynatraceTagRules.DynatraceTagRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DynatraceTagRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynatraceTagRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynatraceTagRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DynatraceTagRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRule">logRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference">DynatraceTagRulesLogRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRule">metricRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference">DynatraceTagRulesMetricRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference">DynatraceTagRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRuleInput">logRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRuleInput">metricRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorIdInput">monitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logRule`<sup>Required</sup> <a name="logRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRule"></a>

```typescript
public readonly logRule: DynatraceTagRulesLogRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference">DynatraceTagRulesLogRuleOutputReference</a>

---

##### `metricRule`<sup>Required</sup> <a name="metricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRule"></a>

```typescript
public readonly metricRule: DynatraceTagRulesMetricRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference">DynatraceTagRulesMetricRuleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeouts"></a>

```typescript
public readonly timeouts: DynatraceTagRulesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference">DynatraceTagRulesTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logRuleInput`<sup>Optional</sup> <a name="logRuleInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRuleInput"></a>

```typescript
public readonly logRuleInput: DynatraceTagRulesLogRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---

##### `metricRuleInput`<sup>Optional</sup> <a name="metricRuleInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRuleInput"></a>

```typescript
public readonly metricRuleInput: DynatraceTagRulesMetricRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorIdInput"></a>

```typescript
public readonly monitorIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DynatraceTagRulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynatraceTagRulesConfig <a name="DynatraceTagRulesConfig" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

const dynatraceTagRulesConfig: dynatraceTagRules.DynatraceTagRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.monitorId">monitorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.logRule">logRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | log_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.metricRule">metricRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | metric_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logRule`<sup>Optional</sup> <a name="logRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.logRule"></a>

```typescript
public readonly logRule: DynatraceTagRulesLogRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

log_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#log_rule DynatraceTagRules#log_rule}

---

##### `metricRule`<sup>Optional</sup> <a name="metricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.metricRule"></a>

```typescript
public readonly metricRule: DynatraceTagRulesMetricRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

metric_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#metric_rule DynatraceTagRules#metric_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DynatraceTagRulesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#timeouts DynatraceTagRules#timeouts}

---

### DynatraceTagRulesLogRule <a name="DynatraceTagRulesLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

const dynatraceTagRulesLogRule: dynatraceTagRules.DynatraceTagRulesLogRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.filteringTag">filteringTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]</code> | filtering_tag block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendActivityLogsEnabled">sendActivityLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#send_activity_logs_enabled DynatraceTagRules#send_activity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendAzureActiveDirectoryLogsEnabled">sendAzureActiveDirectoryLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#send_azure_active_directory_logs_enabled DynatraceTagRules#send_azure_active_directory_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendSubscriptionLogsEnabled">sendSubscriptionLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#send_subscription_logs_enabled DynatraceTagRules#send_subscription_logs_enabled}. |

---

##### `filteringTag`<sup>Required</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.filteringTag"></a>

```typescript
public readonly filteringTag: IResolvable | DynatraceTagRulesLogRuleFilteringTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#filtering_tag DynatraceTagRules#filtering_tag}

---

##### `sendActivityLogsEnabled`<sup>Optional</sup> <a name="sendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendActivityLogsEnabled"></a>

```typescript
public readonly sendActivityLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#send_activity_logs_enabled DynatraceTagRules#send_activity_logs_enabled}.

---

##### `sendAzureActiveDirectoryLogsEnabled`<sup>Optional</sup> <a name="sendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendAzureActiveDirectoryLogsEnabled"></a>

```typescript
public readonly sendAzureActiveDirectoryLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#send_azure_active_directory_logs_enabled DynatraceTagRules#send_azure_active_directory_logs_enabled}.

---

##### `sendSubscriptionLogsEnabled`<sup>Optional</sup> <a name="sendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendSubscriptionLogsEnabled"></a>

```typescript
public readonly sendSubscriptionLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#send_subscription_logs_enabled DynatraceTagRules#send_subscription_logs_enabled}.

---

### DynatraceTagRulesLogRuleFilteringTag <a name="DynatraceTagRulesLogRuleFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

const dynatraceTagRulesLogRuleFilteringTag: dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}.

---

### DynatraceTagRulesMetricRule <a name="DynatraceTagRulesMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

const dynatraceTagRulesMetricRule: dynatraceTagRules.DynatraceTagRulesMetricRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.filteringTag">filteringTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]</code> | filtering_tag block. |

---

##### `filteringTag`<sup>Required</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.filteringTag"></a>

```typescript
public readonly filteringTag: IResolvable | DynatraceTagRulesMetricRuleFilteringTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#filtering_tag DynatraceTagRules#filtering_tag}

---

### DynatraceTagRulesMetricRuleFilteringTag <a name="DynatraceTagRulesMetricRuleFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

const dynatraceTagRulesMetricRuleFilteringTag: dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}.

---

### DynatraceTagRulesTimeouts <a name="DynatraceTagRulesTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

const dynatraceTagRulesTimeouts: dynatraceTagRules.DynatraceTagRulesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#create DynatraceTagRules#create}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#delete DynatraceTagRules#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#read DynatraceTagRules#read}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#update DynatraceTagRules#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#create DynatraceTagRules#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#delete DynatraceTagRules#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#read DynatraceTagRules#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/dynatrace_tag_rules#update DynatraceTagRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynatraceTagRulesLogRuleFilteringTagList <a name="DynatraceTagRulesLogRuleFilteringTagList" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

new dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get"></a>

```typescript
public get(index: number): DynatraceTagRulesLogRuleFilteringTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynatraceTagRulesLogRuleFilteringTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]

---


### DynatraceTagRulesLogRuleFilteringTagOutputReference <a name="DynatraceTagRulesLogRuleFilteringTagOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

new dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynatraceTagRulesLogRuleFilteringTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>

---


### DynatraceTagRulesLogRuleOutputReference <a name="DynatraceTagRulesLogRuleOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

new dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag">putFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendActivityLogsEnabled">resetSendActivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendAzureActiveDirectoryLogsEnabled">resetSendAzureActiveDirectoryLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendSubscriptionLogsEnabled">resetSendSubscriptionLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilteringTag` <a name="putFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag"></a>

```typescript
public putFilteringTag(value: IResolvable | DynatraceTagRulesLogRuleFilteringTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]

---

##### `resetSendActivityLogsEnabled` <a name="resetSendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendActivityLogsEnabled"></a>

```typescript
public resetSendActivityLogsEnabled(): void
```

##### `resetSendAzureActiveDirectoryLogsEnabled` <a name="resetSendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendAzureActiveDirectoryLogsEnabled"></a>

```typescript
public resetSendAzureActiveDirectoryLogsEnabled(): void
```

##### `resetSendSubscriptionLogsEnabled` <a name="resetSendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendSubscriptionLogsEnabled"></a>

```typescript
public resetSendSubscriptionLogsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTag">filteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList">DynatraceTagRulesLogRuleFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTagInput">filteringTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabledInput">sendActivityLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabledInput">sendAzureActiveDirectoryLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabledInput">sendSubscriptionLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabled">sendActivityLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabled">sendAzureActiveDirectoryLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabled">sendSubscriptionLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filteringTag`<sup>Required</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTag"></a>

```typescript
public readonly filteringTag: DynatraceTagRulesLogRuleFilteringTagList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList">DynatraceTagRulesLogRuleFilteringTagList</a>

---

##### `filteringTagInput`<sup>Optional</sup> <a name="filteringTagInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTagInput"></a>

```typescript
public readonly filteringTagInput: IResolvable | DynatraceTagRulesLogRuleFilteringTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag">DynatraceTagRulesLogRuleFilteringTag</a>[]

---

##### `sendActivityLogsEnabledInput`<sup>Optional</sup> <a name="sendActivityLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabledInput"></a>

```typescript
public readonly sendActivityLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendAzureActiveDirectoryLogsEnabledInput`<sup>Optional</sup> <a name="sendAzureActiveDirectoryLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabledInput"></a>

```typescript
public readonly sendAzureActiveDirectoryLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendSubscriptionLogsEnabledInput`<sup>Optional</sup> <a name="sendSubscriptionLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabledInput"></a>

```typescript
public readonly sendSubscriptionLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendActivityLogsEnabled`<sup>Required</sup> <a name="sendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabled"></a>

```typescript
public readonly sendActivityLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendAzureActiveDirectoryLogsEnabled`<sup>Required</sup> <a name="sendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabled"></a>

```typescript
public readonly sendAzureActiveDirectoryLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendSubscriptionLogsEnabled`<sup>Required</sup> <a name="sendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabled"></a>

```typescript
public readonly sendSubscriptionLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DynatraceTagRulesLogRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---


### DynatraceTagRulesMetricRuleFilteringTagList <a name="DynatraceTagRulesMetricRuleFilteringTagList" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

new dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get"></a>

```typescript
public get(index: number): DynatraceTagRulesMetricRuleFilteringTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynatraceTagRulesMetricRuleFilteringTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]

---


### DynatraceTagRulesMetricRuleFilteringTagOutputReference <a name="DynatraceTagRulesMetricRuleFilteringTagOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

new dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynatraceTagRulesMetricRuleFilteringTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>

---


### DynatraceTagRulesMetricRuleOutputReference <a name="DynatraceTagRulesMetricRuleOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

new dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag">putFilteringTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilteringTag` <a name="putFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag"></a>

```typescript
public putFilteringTag(value: IResolvable | DynatraceTagRulesMetricRuleFilteringTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTag">filteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList">DynatraceTagRulesMetricRuleFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTagInput">filteringTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filteringTag`<sup>Required</sup> <a name="filteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTag"></a>

```typescript
public readonly filteringTag: DynatraceTagRulesMetricRuleFilteringTagList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList">DynatraceTagRulesMetricRuleFilteringTagList</a>

---

##### `filteringTagInput`<sup>Optional</sup> <a name="filteringTagInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTagInput"></a>

```typescript
public readonly filteringTagInput: IResolvable | DynatraceTagRulesMetricRuleFilteringTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag">DynatraceTagRulesMetricRuleFilteringTag</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DynatraceTagRulesMetricRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---


### DynatraceTagRulesTimeoutsOutputReference <a name="DynatraceTagRulesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer"></a>

```typescript
import { dynatraceTagRules } from '@cdktf/provider-azurerm'

new dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynatraceTagRulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

---



