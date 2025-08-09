# `policySetDefinition` Submodule <a name="`policySetDefinition` Submodule" id="@cdktf/provider-azurerm.policySetDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicySetDefinition <a name="PolicySetDefinition" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition azurerm_policy_set_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

new policySetDefinition.PolicySetDefinition(scope: Construct, id: string, config: PolicySetDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig">PolicySetDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig">PolicySetDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup">putPolicyDefinitionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference">putPolicyDefinitionReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetManagementGroupId">resetManagementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetPolicyDefinitionGroup">resetPolicyDefinitionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyDefinitionGroup` <a name="putPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup"></a>

```typescript
public putPolicyDefinitionGroup(value: IResolvable | PolicySetDefinitionPolicyDefinitionGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>[]

---

##### `putPolicyDefinitionReference` <a name="putPolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference"></a>

```typescript
public putPolicyDefinitionReference(value: IResolvable | PolicySetDefinitionPolicyDefinitionReference[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts"></a>

```typescript
public putTimeouts(value: PolicySetDefinitionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagementGroupId` <a name="resetManagementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetManagementGroupId"></a>

```typescript
public resetManagementGroupId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPolicyDefinitionGroup` <a name="resetPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetPolicyDefinitionGroup"></a>

```typescript
public resetPolicyDefinitionGroup(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicySetDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

policySetDefinition.PolicySetDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

policySetDefinition.PolicySetDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

policySetDefinition.PolicySetDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

policySetDefinition.PolicySetDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicySetDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicySetDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicySetDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicySetDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroup">policyDefinitionGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList">PolicySetDefinitionPolicyDefinitionGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReference">policyDefinitionReference</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList">PolicySetDefinitionPolicyDefinitionReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference">PolicySetDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroupInput">policyDefinitionGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReferenceInput">policyDefinitionReferenceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupId">managementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyDefinitionGroup`<sup>Required</sup> <a name="policyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroup"></a>

```typescript
public readonly policyDefinitionGroup: PolicySetDefinitionPolicyDefinitionGroupList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList">PolicySetDefinitionPolicyDefinitionGroupList</a>

---

##### `policyDefinitionReference`<sup>Required</sup> <a name="policyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReference"></a>

```typescript
public readonly policyDefinitionReference: PolicySetDefinitionPolicyDefinitionReferenceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList">PolicySetDefinitionPolicyDefinitionReferenceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeouts"></a>

```typescript
public readonly timeouts: PolicySetDefinitionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference">PolicySetDefinitionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupIdInput"></a>

```typescript
public readonly managementGroupIdInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `policyDefinitionGroupInput`<sup>Optional</sup> <a name="policyDefinitionGroupInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroupInput"></a>

```typescript
public readonly policyDefinitionGroupInput: IResolvable | PolicySetDefinitionPolicyDefinitionGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>[]

---

##### `policyDefinitionReferenceInput`<sup>Optional</sup> <a name="policyDefinitionReferenceInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReferenceInput"></a>

```typescript
public readonly policyDefinitionReferenceInput: IResolvable | PolicySetDefinitionPolicyDefinitionReference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>[]

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PolicySetDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupId"></a>

```typescript
public readonly managementGroupId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicySetDefinitionConfig <a name="PolicySetDefinitionConfig" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.Initializer"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

const policySetDefinitionConfig: policySetDefinition.PolicySetDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionReference">policyDefinitionReference</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>[]</code> | policy_definition_reference block. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#policy_type PolicySetDefinition#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#id PolicySetDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.managementGroupId">managementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#management_group_id PolicySetDefinition#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.metadata">metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#metadata PolicySetDefinition#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#parameters PolicySetDefinition#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionGroup">policyDefinitionGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>[]</code> | policy_definition_group block. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}.

---

##### `policyDefinitionReference`<sup>Required</sup> <a name="policyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionReference"></a>

```typescript
public readonly policyDefinitionReference: IResolvable | PolicySetDefinitionPolicyDefinitionReference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>[]

policy_definition_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#policy_definition_reference PolicySetDefinition#policy_definition_reference}

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#policy_type PolicySetDefinition#policy_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#id PolicySetDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementGroupId`<sup>Optional</sup> <a name="managementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.managementGroupId"></a>

```typescript
public readonly managementGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#management_group_id PolicySetDefinition#management_group_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#metadata PolicySetDefinition#metadata}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#parameters PolicySetDefinition#parameters}.

---

##### `policyDefinitionGroup`<sup>Optional</sup> <a name="policyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionGroup"></a>

```typescript
public readonly policyDefinitionGroup: IResolvable | PolicySetDefinitionPolicyDefinitionGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>[]

policy_definition_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#policy_definition_group PolicySetDefinition#policy_definition_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PolicySetDefinitionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#timeouts PolicySetDefinition#timeouts}

---

### PolicySetDefinitionPolicyDefinitionGroup <a name="PolicySetDefinitionPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.Initializer"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

const policySetDefinitionPolicyDefinitionGroup: policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.additionalMetadataResourceId">additionalMetadataResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#additional_metadata_resource_id PolicySetDefinition#additional_metadata_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#category PolicySetDefinition#category}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}.

---

##### `additionalMetadataResourceId`<sup>Optional</sup> <a name="additionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.additionalMetadataResourceId"></a>

```typescript
public readonly additionalMetadataResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#additional_metadata_resource_id PolicySetDefinition#additional_metadata_resource_id}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#category PolicySetDefinition#category}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}.

---

### PolicySetDefinitionPolicyDefinitionReference <a name="PolicySetDefinitionPolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.Initializer"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

const policySetDefinitionPolicyDefinitionReference: policySetDefinition.PolicySetDefinitionPolicyDefinitionReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#policy_definition_id PolicySetDefinition#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.parameterValues">parameterValues</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#parameter_values PolicySetDefinition#parameter_values}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyGroupNames">policyGroupNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#policy_group_names PolicySetDefinition#policy_group_names}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.referenceId">referenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#reference_id PolicySetDefinition#reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#version PolicySetDefinition#version}. |

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#policy_definition_id PolicySetDefinition#policy_definition_id}.

---

##### `parameterValues`<sup>Optional</sup> <a name="parameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.parameterValues"></a>

```typescript
public readonly parameterValues: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#parameter_values PolicySetDefinition#parameter_values}.

---

##### `policyGroupNames`<sup>Optional</sup> <a name="policyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyGroupNames"></a>

```typescript
public readonly policyGroupNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#policy_group_names PolicySetDefinition#policy_group_names}.

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#reference_id PolicySetDefinition#reference_id}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#version PolicySetDefinition#version}.

---

### PolicySetDefinitionTimeouts <a name="PolicySetDefinitionTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.Initializer"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

const policySetDefinitionTimeouts: policySetDefinition.PolicySetDefinitionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#create PolicySetDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#delete PolicySetDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#read PolicySetDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#update PolicySetDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#create PolicySetDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#delete PolicySetDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#read PolicySetDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/policy_set_definition#update PolicySetDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicySetDefinitionPolicyDefinitionGroupList <a name="PolicySetDefinitionPolicyDefinitionGroupList" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

new policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get"></a>

```typescript
public get(index: number): PolicySetDefinitionPolicyDefinitionGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicySetDefinitionPolicyDefinitionGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>[]

---


### PolicySetDefinitionPolicyDefinitionGroupOutputReference <a name="PolicySetDefinitionPolicyDefinitionGroupOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

new policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetAdditionalMetadataResourceId">resetAdditionalMetadataResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalMetadataResourceId` <a name="resetAdditionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetAdditionalMetadataResourceId"></a>

```typescript
public resetAdditionalMetadataResourceId(): void
```

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceIdInput">additionalMetadataResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId">additionalMetadataResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalMetadataResourceIdInput`<sup>Optional</sup> <a name="additionalMetadataResourceIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceIdInput"></a>

```typescript
public readonly additionalMetadataResourceIdInput: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `additionalMetadataResourceId`<sup>Required</sup> <a name="additionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId"></a>

```typescript
public readonly additionalMetadataResourceId: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicySetDefinitionPolicyDefinitionGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup">PolicySetDefinitionPolicyDefinitionGroup</a>

---


### PolicySetDefinitionPolicyDefinitionReferenceList <a name="PolicySetDefinitionPolicyDefinitionReferenceList" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

new policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get"></a>

```typescript
public get(index: number): PolicySetDefinitionPolicyDefinitionReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicySetDefinitionPolicyDefinitionReference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>[]

---


### PolicySetDefinitionPolicyDefinitionReferenceOutputReference <a name="PolicySetDefinitionPolicyDefinitionReferenceOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

new policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetParameterValues">resetParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetPolicyGroupNames">resetPolicyGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetReferenceId">resetReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterValues` <a name="resetParameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetParameterValues"></a>

```typescript
public resetParameterValues(): void
```

##### `resetPolicyGroupNames` <a name="resetPolicyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetPolicyGroupNames"></a>

```typescript
public resetPolicyGroupNames(): void
```

##### `resetReferenceId` <a name="resetReferenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetReferenceId"></a>

```typescript
public resetReferenceId(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValuesInput">parameterValuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionIdInput">policyDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNamesInput">policyGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceIdInput">referenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues">parameterValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId">policyDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames">policyGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId">referenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterValuesInput`<sup>Optional</sup> <a name="parameterValuesInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValuesInput"></a>

```typescript
public readonly parameterValuesInput: string;
```

- *Type:* string

---

##### `policyDefinitionIdInput`<sup>Optional</sup> <a name="policyDefinitionIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionIdInput"></a>

```typescript
public readonly policyDefinitionIdInput: string;
```

- *Type:* string

---

##### `policyGroupNamesInput`<sup>Optional</sup> <a name="policyGroupNamesInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNamesInput"></a>

```typescript
public readonly policyGroupNamesInput: string[];
```

- *Type:* string[]

---

##### `referenceIdInput`<sup>Optional</sup> <a name="referenceIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceIdInput"></a>

```typescript
public readonly referenceIdInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `parameterValues`<sup>Required</sup> <a name="parameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues"></a>

```typescript
public readonly parameterValues: string;
```

- *Type:* string

---

##### `policyDefinitionId`<sup>Required</sup> <a name="policyDefinitionId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId"></a>

```typescript
public readonly policyDefinitionId: string;
```

- *Type:* string

---

##### `policyGroupNames`<sup>Required</sup> <a name="policyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames"></a>

```typescript
public readonly policyGroupNames: string[];
```

- *Type:* string[]

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicySetDefinitionPolicyDefinitionReference;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference">PolicySetDefinitionPolicyDefinitionReference</a>

---


### PolicySetDefinitionTimeoutsOutputReference <a name="PolicySetDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer"></a>

```typescript
import { policySetDefinition } from '@cdktf/provider-azurerm'

new policySetDefinition.PolicySetDefinitionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicySetDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

---



