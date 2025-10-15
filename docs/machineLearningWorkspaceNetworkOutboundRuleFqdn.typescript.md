# `machineLearningWorkspaceNetworkOutboundRuleFqdn` Submodule <a name="`machineLearningWorkspaceNetworkOutboundRuleFqdn` Submodule" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningWorkspaceNetworkOutboundRuleFqdn <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn azurerm_machine_learning_workspace_network_outbound_rule_fqdn}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer"></a>

```typescript
import { machineLearningWorkspaceNetworkOutboundRuleFqdn } from '@cdktf/provider-azurerm'

new machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn(scope: Construct, id: string, config: MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig">MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig">MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts"></a>

```typescript
public putTimeouts(value: MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningWorkspaceNetworkOutboundRuleFqdn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isConstruct"></a>

```typescript
import { machineLearningWorkspaceNetworkOutboundRuleFqdn } from '@cdktf/provider-azurerm'

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformElement"></a>

```typescript
import { machineLearningWorkspaceNetworkOutboundRuleFqdn } from '@cdktf/provider-azurerm'

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformResource"></a>

```typescript
import { machineLearningWorkspaceNetworkOutboundRuleFqdn } from '@cdktf/provider-azurerm'

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport"></a>

```typescript
import { machineLearningWorkspaceNetworkOutboundRuleFqdn } from '@cdktf/provider-azurerm'

machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MachineLearningWorkspaceNetworkOutboundRuleFqdn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MachineLearningWorkspaceNetworkOutboundRuleFqdn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MachineLearningWorkspaceNetworkOutboundRuleFqdn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningWorkspaceNetworkOutboundRuleFqdn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdnInput">destinationFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdn">destinationFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference</a>

---

##### `destinationFqdnInput`<sup>Optional</sup> <a name="destinationFqdnInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdnInput"></a>

```typescript
public readonly destinationFqdnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `destinationFqdn`<sup>Required</sup> <a name="destinationFqdn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdn"></a>

```typescript
public readonly destinationFqdn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.Initializer"></a>

```typescript
import { machineLearningWorkspaceNetworkOutboundRuleFqdn } from '@cdktf/provider-azurerm'

const machineLearningWorkspaceNetworkOutboundRuleFqdnConfig: machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.destinationFqdn">destinationFqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#destination_fqdn MachineLearningWorkspaceNetworkOutboundRuleFqdn#destination_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#name MachineLearningWorkspaceNetworkOutboundRuleFqdn#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#workspace_id MachineLearningWorkspaceNetworkOutboundRuleFqdn#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#id MachineLearningWorkspaceNetworkOutboundRuleFqdn#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationFqdn`<sup>Required</sup> <a name="destinationFqdn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.destinationFqdn"></a>

```typescript
public readonly destinationFqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#destination_fqdn MachineLearningWorkspaceNetworkOutboundRuleFqdn#destination_fqdn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#name MachineLearningWorkspaceNetworkOutboundRuleFqdn#name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#workspace_id MachineLearningWorkspaceNetworkOutboundRuleFqdn#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#id MachineLearningWorkspaceNetworkOutboundRuleFqdn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#timeouts MachineLearningWorkspaceNetworkOutboundRuleFqdn#timeouts}

---

### MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.Initializer"></a>

```typescript
import { machineLearningWorkspaceNetworkOutboundRuleFqdn } from '@cdktf/provider-azurerm'

const machineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts: machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#create MachineLearningWorkspaceNetworkOutboundRuleFqdn#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#delete MachineLearningWorkspaceNetworkOutboundRuleFqdn#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#read MachineLearningWorkspaceNetworkOutboundRuleFqdn#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#update MachineLearningWorkspaceNetworkOutboundRuleFqdn#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#create MachineLearningWorkspaceNetworkOutboundRuleFqdn#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#delete MachineLearningWorkspaceNetworkOutboundRuleFqdn#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#read MachineLearningWorkspaceNetworkOutboundRuleFqdn#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#update MachineLearningWorkspaceNetworkOutboundRuleFqdn#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer"></a>

```typescript
import { machineLearningWorkspaceNetworkOutboundRuleFqdn } from '@cdktf/provider-azurerm'

new machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>

---



