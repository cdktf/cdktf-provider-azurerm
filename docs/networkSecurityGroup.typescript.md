# `networkSecurityGroup` Submodule <a name="`networkSecurityGroup` Submodule" id="@cdktf/provider-azurerm.networkSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityGroup <a name="NetworkSecurityGroup" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group azurerm_network_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

new networkSecurityGroup.NetworkSecurityGroup(scope: Construct, id: string, config: NetworkSecurityGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig">NetworkSecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig">NetworkSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putSecurityRule">putSecurityRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetSecurityRule">resetSecurityRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSecurityRule` <a name="putSecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putSecurityRule"></a>

```typescript
public putSecurityRule(value: IResolvable | NetworkSecurityGroupSecurityRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putSecurityRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule">NetworkSecurityGroupSecurityRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecurityRule` <a name="resetSecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetSecurityRule"></a>

```typescript
public resetSecurityRule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isConstruct"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

networkSecurityGroup.NetworkSecurityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformElement"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

networkSecurityGroup.NetworkSecurityGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformResource"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

networkSecurityGroup.NetworkSecurityGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkSecurityGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRule">securityRule</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList">NetworkSecurityGroupSecurityRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference">NetworkSecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRuleInput">securityRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule">NetworkSecurityGroupSecurityRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `securityRule`<sup>Required</sup> <a name="securityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRule"></a>

```typescript
public readonly securityRule: NetworkSecurityGroupSecurityRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList">NetworkSecurityGroupSecurityRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference">NetworkSecurityGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `securityRuleInput`<sup>Optional</sup> <a name="securityRuleInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRuleInput"></a>

```typescript
public readonly securityRuleInput: IResolvable | NetworkSecurityGroupSecurityRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule">NetworkSecurityGroupSecurityRule</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityGroupConfig <a name="NetworkSecurityGroupConfig" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.Initializer"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

const networkSecurityGroupConfig: networkSecurityGroup.NetworkSecurityGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#location NetworkSecurityGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#name NetworkSecurityGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#resource_group_name NetworkSecurityGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#id NetworkSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.securityRule">securityRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule">NetworkSecurityGroupSecurityRule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#security_rule NetworkSecurityGroup#security_rule}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#tags NetworkSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#location NetworkSecurityGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#name NetworkSecurityGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#resource_group_name NetworkSecurityGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#id NetworkSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityRule`<sup>Optional</sup> <a name="securityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.securityRule"></a>

```typescript
public readonly securityRule: IResolvable | NetworkSecurityGroupSecurityRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule">NetworkSecurityGroupSecurityRule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#security_rule NetworkSecurityGroup#security_rule}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#tags NetworkSecurityGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#timeouts NetworkSecurityGroup#timeouts}

---

### NetworkSecurityGroupSecurityRule <a name="NetworkSecurityGroupSecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.Initializer"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

const networkSecurityGroupSecurityRule: networkSecurityGroup.NetworkSecurityGroupSecurityRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.access">access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#access NetworkSecurityGroup#access}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#description NetworkSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefix">destinationAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#destination_address_prefix NetworkSecurityGroup#destination_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefixes">destinationAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#destination_address_prefixes NetworkSecurityGroup#destination_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationApplicationSecurityGroupIds">destinationApplicationSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#destination_application_security_group_ids NetworkSecurityGroup#destination_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRange">destinationPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#destination_port_range NetworkSecurityGroup#destination_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRanges">destinationPortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#destination_port_ranges NetworkSecurityGroup#destination_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#direction NetworkSecurityGroup#direction}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#name NetworkSecurityGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#priority NetworkSecurityGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#protocol NetworkSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#source_address_prefix NetworkSecurityGroup#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefixes">sourceAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#source_address_prefixes NetworkSecurityGroup#source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceApplicationSecurityGroupIds">sourceApplicationSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#source_application_security_group_ids NetworkSecurityGroup#source_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRange">sourcePortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#source_port_range NetworkSecurityGroup#source_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRanges">sourcePortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#source_port_ranges NetworkSecurityGroup#source_port_ranges}. |

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#access NetworkSecurityGroup#access}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#description NetworkSecurityGroup#description}.

---

##### `destinationAddressPrefix`<sup>Optional</sup> <a name="destinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefix"></a>

```typescript
public readonly destinationAddressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#destination_address_prefix NetworkSecurityGroup#destination_address_prefix}.

---

##### `destinationAddressPrefixes`<sup>Optional</sup> <a name="destinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefixes"></a>

```typescript
public readonly destinationAddressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#destination_address_prefixes NetworkSecurityGroup#destination_address_prefixes}.

---

##### `destinationApplicationSecurityGroupIds`<sup>Optional</sup> <a name="destinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationApplicationSecurityGroupIds"></a>

```typescript
public readonly destinationApplicationSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#destination_application_security_group_ids NetworkSecurityGroup#destination_application_security_group_ids}.

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#destination_port_range NetworkSecurityGroup#destination_port_range}.

---

##### `destinationPortRanges`<sup>Optional</sup> <a name="destinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRanges"></a>

```typescript
public readonly destinationPortRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#destination_port_ranges NetworkSecurityGroup#destination_port_ranges}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#direction NetworkSecurityGroup#direction}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#name NetworkSecurityGroup#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#priority NetworkSecurityGroup#priority}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#protocol NetworkSecurityGroup#protocol}.

---

##### `sourceAddressPrefix`<sup>Optional</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefix"></a>

```typescript
public readonly sourceAddressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#source_address_prefix NetworkSecurityGroup#source_address_prefix}.

---

##### `sourceAddressPrefixes`<sup>Optional</sup> <a name="sourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefixes"></a>

```typescript
public readonly sourceAddressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#source_address_prefixes NetworkSecurityGroup#source_address_prefixes}.

---

##### `sourceApplicationSecurityGroupIds`<sup>Optional</sup> <a name="sourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceApplicationSecurityGroupIds"></a>

```typescript
public readonly sourceApplicationSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#source_application_security_group_ids NetworkSecurityGroup#source_application_security_group_ids}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#source_port_range NetworkSecurityGroup#source_port_range}.

---

##### `sourcePortRanges`<sup>Optional</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRanges"></a>

```typescript
public readonly sourcePortRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#source_port_ranges NetworkSecurityGroup#source_port_ranges}.

---

### NetworkSecurityGroupTimeouts <a name="NetworkSecurityGroupTimeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.Initializer"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

const networkSecurityGroupTimeouts: networkSecurityGroup.NetworkSecurityGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#create NetworkSecurityGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#delete NetworkSecurityGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#read NetworkSecurityGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#update NetworkSecurityGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#create NetworkSecurityGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#delete NetworkSecurityGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#read NetworkSecurityGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_security_group#update NetworkSecurityGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityGroupSecurityRuleList <a name="NetworkSecurityGroupSecurityRuleList" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

new networkSecurityGroup.NetworkSecurityGroupSecurityRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.get"></a>

```typescript
public get(index: number): NetworkSecurityGroupSecurityRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule">NetworkSecurityGroupSecurityRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityGroupSecurityRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule">NetworkSecurityGroupSecurityRule</a>[]

---


### NetworkSecurityGroupSecurityRuleOutputReference <a name="NetworkSecurityGroupSecurityRuleOutputReference" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

new networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefix">resetDestinationAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefixes">resetDestinationAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationApplicationSecurityGroupIds">resetDestinationApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRanges">resetDestinationPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefix">resetSourceAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefixes">resetSourceAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceApplicationSecurityGroupIds">resetSourceApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRanges">resetSourcePortRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetAccess"></a>

```typescript
public resetAccess(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationAddressPrefix` <a name="resetDestinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefix"></a>

```typescript
public resetDestinationAddressPrefix(): void
```

##### `resetDestinationAddressPrefixes` <a name="resetDestinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefixes"></a>

```typescript
public resetDestinationAddressPrefixes(): void
```

##### `resetDestinationApplicationSecurityGroupIds` <a name="resetDestinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationApplicationSecurityGroupIds"></a>

```typescript
public resetDestinationApplicationSecurityGroupIds(): void
```

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetDestinationPortRanges` <a name="resetDestinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRanges"></a>

```typescript
public resetDestinationPortRanges(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSourceAddressPrefix` <a name="resetSourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefix"></a>

```typescript
public resetSourceAddressPrefix(): void
```

##### `resetSourceAddressPrefixes` <a name="resetSourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefixes"></a>

```typescript
public resetSourceAddressPrefixes(): void
```

##### `resetSourceApplicationSecurityGroupIds` <a name="resetSourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceApplicationSecurityGroupIds"></a>

```typescript
public resetSourceApplicationSecurityGroupIds(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```

##### `resetSourcePortRanges` <a name="resetSourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRanges"></a>

```typescript
public resetSourcePortRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.accessInput">accessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixesInput">destinationAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixInput">destinationAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIdsInput">destinationApplicationSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangesInput">destinationPortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixesInput">sourceAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixInput">sourceAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIdsInput">sourceApplicationSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangesInput">sourcePortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix">destinationAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes">destinationAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds">destinationApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges">destinationPortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes">sourceAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds">sourceApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges">sourcePortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule">NetworkSecurityGroupSecurityRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.accessInput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationAddressPrefixesInput`<sup>Optional</sup> <a name="destinationAddressPrefixesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixesInput"></a>

```typescript
public readonly destinationAddressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `destinationAddressPrefixInput`<sup>Optional</sup> <a name="destinationAddressPrefixInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixInput"></a>

```typescript
public readonly destinationAddressPrefixInput: string;
```

- *Type:* string

---

##### `destinationApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="destinationApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIdsInput"></a>

```typescript
public readonly destinationApplicationSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: string;
```

- *Type:* string

---

##### `destinationPortRangesInput`<sup>Optional</sup> <a name="destinationPortRangesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangesInput"></a>

```typescript
public readonly destinationPortRangesInput: string[];
```

- *Type:* string[]

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceAddressPrefixesInput`<sup>Optional</sup> <a name="sourceAddressPrefixesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixesInput"></a>

```typescript
public readonly sourceAddressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressPrefixInput`<sup>Optional</sup> <a name="sourceAddressPrefixInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixInput"></a>

```typescript
public readonly sourceAddressPrefixInput: string;
```

- *Type:* string

---

##### `sourceApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="sourceApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIdsInput"></a>

```typescript
public readonly sourceApplicationSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: string;
```

- *Type:* string

---

##### `sourcePortRangesInput`<sup>Optional</sup> <a name="sourcePortRangesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangesInput"></a>

```typescript
public readonly sourcePortRangesInput: string[];
```

- *Type:* string[]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationAddressPrefix`<sup>Required</sup> <a name="destinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix"></a>

```typescript
public readonly destinationAddressPrefix: string;
```

- *Type:* string

---

##### `destinationAddressPrefixes`<sup>Required</sup> <a name="destinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes"></a>

```typescript
public readonly destinationAddressPrefixes: string[];
```

- *Type:* string[]

---

##### `destinationApplicationSecurityGroupIds`<sup>Required</sup> <a name="destinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds"></a>

```typescript
public readonly destinationApplicationSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: string;
```

- *Type:* string

---

##### `destinationPortRanges`<sup>Required</sup> <a name="destinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges"></a>

```typescript
public readonly destinationPortRanges: string[];
```

- *Type:* string[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceAddressPrefix`<sup>Required</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix"></a>

```typescript
public readonly sourceAddressPrefix: string;
```

- *Type:* string

---

##### `sourceAddressPrefixes`<sup>Required</sup> <a name="sourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes"></a>

```typescript
public readonly sourceAddressPrefixes: string[];
```

- *Type:* string[]

---

##### `sourceApplicationSecurityGroupIds`<sup>Required</sup> <a name="sourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds"></a>

```typescript
public readonly sourceApplicationSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: string;
```

- *Type:* string

---

##### `sourcePortRanges`<sup>Required</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges"></a>

```typescript
public readonly sourcePortRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityGroupSecurityRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule">NetworkSecurityGroupSecurityRule</a>

---


### NetworkSecurityGroupTimeoutsOutputReference <a name="NetworkSecurityGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityGroup } from '@cdktf/provider-azurerm'

new networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a>

---



