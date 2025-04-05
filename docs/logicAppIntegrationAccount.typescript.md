# `logicAppIntegrationAccount` Submodule <a name="`logicAppIntegrationAccount` Submodule" id="@cdktf/provider-azurerm.logicAppIntegrationAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccount <a name="LogicAppIntegrationAccount" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account azurerm_logic_app_integration_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.Initializer"></a>

```typescript
import { logicAppIntegrationAccount } from '@cdktf/provider-azurerm'

new logicAppIntegrationAccount.LogicAppIntegrationAccount(scope: Construct, id: string, config: LogicAppIntegrationAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig">LogicAppIntegrationAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig">LogicAppIntegrationAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.resetIntegrationServiceEnvironmentId">resetIntegrationServiceEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: LogicAppIntegrationAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts">LogicAppIntegrationAccountTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationServiceEnvironmentId` <a name="resetIntegrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.resetIntegrationServiceEnvironmentId"></a>

```typescript
public resetIntegrationServiceEnvironmentId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogicAppIntegrationAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.isConstruct"></a>

```typescript
import { logicAppIntegrationAccount } from '@cdktf/provider-azurerm'

logicAppIntegrationAccount.LogicAppIntegrationAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.isTerraformElement"></a>

```typescript
import { logicAppIntegrationAccount } from '@cdktf/provider-azurerm'

logicAppIntegrationAccount.LogicAppIntegrationAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.isTerraformResource"></a>

```typescript
import { logicAppIntegrationAccount } from '@cdktf/provider-azurerm'

logicAppIntegrationAccount.LogicAppIntegrationAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.generateConfigForImport"></a>

```typescript
import { logicAppIntegrationAccount } from '@cdktf/provider-azurerm'

logicAppIntegrationAccount.LogicAppIntegrationAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogicAppIntegrationAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogicAppIntegrationAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogicAppIntegrationAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppIntegrationAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference">LogicAppIntegrationAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.integrationServiceEnvironmentIdInput">integrationServiceEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts">LogicAppIntegrationAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.integrationServiceEnvironmentId">integrationServiceEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppIntegrationAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference">LogicAppIntegrationAccountTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationServiceEnvironmentIdInput`<sup>Optional</sup> <a name="integrationServiceEnvironmentIdInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.integrationServiceEnvironmentIdInput"></a>

```typescript
public readonly integrationServiceEnvironmentIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LogicAppIntegrationAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts">LogicAppIntegrationAccountTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationServiceEnvironmentId`<sup>Required</sup> <a name="integrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.integrationServiceEnvironmentId"></a>

```typescript
public readonly integrationServiceEnvironmentId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountConfig <a name="LogicAppIntegrationAccountConfig" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.Initializer"></a>

```typescript
import { logicAppIntegrationAccount } from '@cdktf/provider-azurerm'

const logicAppIntegrationAccountConfig: logicAppIntegrationAccount.LogicAppIntegrationAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#location LogicAppIntegrationAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#name LogicAppIntegrationAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#resource_group_name LogicAppIntegrationAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#sku_name LogicAppIntegrationAccount#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#id LogicAppIntegrationAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.integrationServiceEnvironmentId">integrationServiceEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#integration_service_environment_id LogicAppIntegrationAccount#integration_service_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#tags LogicAppIntegrationAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts">LogicAppIntegrationAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#location LogicAppIntegrationAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#name LogicAppIntegrationAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#resource_group_name LogicAppIntegrationAccount#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#sku_name LogicAppIntegrationAccount#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#id LogicAppIntegrationAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationServiceEnvironmentId`<sup>Optional</sup> <a name="integrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.integrationServiceEnvironmentId"></a>

```typescript
public readonly integrationServiceEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#integration_service_environment_id LogicAppIntegrationAccount#integration_service_environment_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#tags LogicAppIntegrationAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppIntegrationAccountTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts">LogicAppIntegrationAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#timeouts LogicAppIntegrationAccount#timeouts}

---

### LogicAppIntegrationAccountTimeouts <a name="LogicAppIntegrationAccountTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts.Initializer"></a>

```typescript
import { logicAppIntegrationAccount } from '@cdktf/provider-azurerm'

const logicAppIntegrationAccountTimeouts: logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#create LogicAppIntegrationAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#delete LogicAppIntegrationAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#read LogicAppIntegrationAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#update LogicAppIntegrationAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#create LogicAppIntegrationAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#delete LogicAppIntegrationAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#read LogicAppIntegrationAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/logic_app_integration_account#update LogicAppIntegrationAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountTimeoutsOutputReference <a name="LogicAppIntegrationAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { logicAppIntegrationAccount } from '@cdktf/provider-azurerm'

new logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts">LogicAppIntegrationAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogicAppIntegrationAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccount.LogicAppIntegrationAccountTimeouts">LogicAppIntegrationAccountTimeouts</a>

---



